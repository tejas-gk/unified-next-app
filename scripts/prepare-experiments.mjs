import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const workspace = resolve(appRoot, "..");
const outputRoot = join(appRoot, "public", "experiments");
const tempRoot = join(appRoot, ".experiment-build");
const manifestPath = join(appRoot, "data", "experiments.json");
const repairMode = process.argv.includes("--repair");
const npmCli = process.env.npm_execpath || join(dirname(process.execPath), "node_modules", "npm", "bin", "npm-cli.js");

const ignored = new Set(["node_modules", ".next", "dist", "out", "__MACOSX", ".git"]);
const copyFilter = (source) => {
  const name = source.split(/[\\/]/).at(-1);
  return !ignored.has(name) && name !== ".DS_Store" && !name.startsWith("._");
};

function findProjects() {
  return readdirSync(workspace, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^CODE(?: \(\d+\))?$/.test(entry.name))
    .sort((a, b) => projectNumber(a.name) - projectNumber(b.name))
    .flatMap((container) => readdirSync(join(workspace, container.name), { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && entry.name !== "__MACOSX")
      .map((entry) => ({
        order: projectNumber(container.name) + 1,
        root: join(workspace, container.name, entry.name),
        folder: entry.name,
      })));
}

function projectNumber(name) {
  const match = name.match(/\((\d+)\)/);
  return match ? Number(match[1]) : 0;
}

function titleCase(value) {
  return value.replace(/^(codegrid|cg)-/, "").replace(/-nextjs|-javascript|-main|-final/g, "")
    .split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function uniqueSlug(folder, used) {
  const base = folder.replace(/^(codegrid|cg)-/, "").replace(/[^a-z0-9-]/gi, "-").toLowerCase();
  let slug = base;
  let suffix = 2;
  while (used.has(slug)) slug = `${base}-${suffix++}`;
  used.add(slug);
  return slug;
}

function readPackage(root) {
  const path = join(root, "package.json");
  return existsSync(path) ? JSON.parse(readFileSync(path, "utf8")) : {};
}

function rewriteAbsolutePaths(directory, prefix) {
  const extensions = /\.(html|css|js|mjs|json|svg)$/i;
  const visit = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const path = join(current, entry.name);
      if (entry.isDirectory()) visit(path);
      else if (extensions.test(entry.name)) {
        const original = readFileSync(path, "utf8");
        const rewritten = original
          .replace(/(["'`])\/(?!\/|experiments\/|_next\/|>)/g, `$1${prefix}/`)
          .replaceAll(`${prefix}/${prefix.split("/").at(-1)}/`, `${prefix}/`)
          .replace(/url\(\/(?!\/|experiments\/|_next\/)/g, `url(${prefix}/`);
        if (rewritten !== original) writeFileSync(path, rewritten);
      }
    }
  };
  visit(directory);
}

function namespaceNextAssets(temp, basePath) {
  const publicRoot = join(temp, "public");
  if (!existsSync(publicRoot)) return;

  const assets = [];
  const dirs = new Set();
  const collect = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const path = join(current, entry.name);
      if (entry.isDirectory()) {
        dirs.add(`/${relative(publicRoot, path).replaceAll("\\", "/")}/`);
        collect(path);
      } else {
        assets.push(`/${relative(publicRoot, path).replaceAll("\\", "/")}`);
      }
    }
  };
  collect(publicRoot);

  const extensions = /\.(js|jsx|ts|tsx|css)$/i;
  const visit = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const path = join(current, entry.name);
      if (entry.isDirectory() && entry.name !== "public") visit(path);
      else if (entry.isFile() && extensions.test(entry.name)) {
        let content = readFileSync(path, "utf8");
        for (const asset of assets) content = content.replaceAll(asset, `${basePath}${asset}`);
        for (const dir of dirs) content = content.replaceAll(dir, `${basePath}${dir}`);
        // Handle dynamic template literals like `/img${num}.jpg`
        content = content.replace(
          /(`[^`]*?)\/((?:img|image|hero|model|video|audio|mesh|default|slider|work|portrait|bg|item|card|project|slide|logo|mask|fire|sky|outro|window|whatido)\d*\.jpg)/gi,
          `$1${basePath}/$2`
        );
        writeFileSync(path, content);
      }
    }
  };
  visit(temp);
}

function buildVanilla(project, destination, basePath, slug, pkg) {
  let buildRoot = project.root;
  let viteCli = join(buildRoot, "node_modules", "vite", "bin", "vite.js");

  if (!existsSync(viteCli) && (pkg.dependencies?.vite || pkg.devDependencies?.vite)) {
    buildRoot = join(tempRoot, `${slug}-vite`);
    cpSync(project.root, buildRoot, { recursive: true, filter: copyFilter });
    execFileSync(process.execPath, [npmCli, "install", "--ignore-scripts"], {
      cwd: buildRoot,
      stdio: "pipe",
      timeout: 300000,
    });
    viteCli = join(buildRoot, "node_modules", "vite", "bin", "vite.js");
  }

  if (existsSync(viteCli)) {
    execFileSync(process.execPath, [viteCli, "build", "--base", `${basePath}/`, "--outDir", destination, "--emptyOutDir"], {
      cwd: buildRoot,
      stdio: "pipe",
      timeout: 180000,
    });

    // Vite intentionally leaves classic script tags external.
    for (const entry of readdirSync(project.root, { withFileTypes: true })) {
      if (entry.isFile() && /\.(js|mjs)$/i.test(entry.name) && !existsSync(join(destination, entry.name))) {
        cpSync(join(project.root, entry.name), join(destination, entry.name));
      }
    }
    rewriteAbsolutePaths(destination, basePath);
  } else {
    cpSync(project.root, destination, { recursive: true, filter: copyFilter });
    rewriteAbsolutePaths(destination, basePath);
  }
}

function rewriteNextRoutes(destination, basePath) {
  const routes = new Set();
  const collectRoutes = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const path = join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== "_next") collectRoutes(path);
      } else if (entry.name.endsWith(".html") && entry.name !== "index.html") {
        routes.add(entry.name.slice(0, -5));
      }
    }
  };
  collectRoutes(destination);

  const routeList = Array.from(routes);
  const extensions = /\.(html|txt|json)$/i;

  const visit = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const path = join(current, entry.name);
      if (entry.isDirectory()) visit(path);
      else if (extensions.test(entry.name)) {
        let content = readFileSync(path, "utf8");
        for (const route of routeList) {
          content = content.replaceAll(
            `href="${basePath}/${route}"`,
            `href="${basePath}/${route}.html"`,
          );
          content = content.replaceAll(
            `"${basePath}/${route}"`,
            `"${basePath}/${route}.html"`,
          );
          content = content.replaceAll(
            `'${basePath}/${route}'`,
            `'${basePath}/${route}.html'`,
          );
        }
        content = content.replaceAll(`href="${basePath}"`, `href="${basePath}/index.html"`);
        content = content.replaceAll(`"${basePath}"`, `"${basePath}/index.html"`);
        content = content.replaceAll(`'${basePath}'`, `'${basePath}/index.html'`);
        writeFileSync(path, content);
      }
    }
  };
  visit(destination);
}

function buildNext(project, destination, basePath, slug, pkg) {
  const temp = join(tempRoot, slug);
  cpSync(project.root, temp, { recursive: true, filter: copyFilter });

  const sourceModules = join(project.root, "node_modules");
  if (existsSync(sourceModules)) {
    symlinkSync(sourceModules, join(temp, "node_modules"), "junction");
  } else {
    execFileSync(process.execPath, [npmCli, "install", "--ignore-scripts"], {
      cwd: temp,
      stdio: "pipe",
      timeout: 300000,
    });
  }

  const config = `const nextConfig = { output: "export", basePath: "${basePath}", assetPrefix: "${basePath}", images: { unoptimized: true } };\nexport default nextConfig;\n`;
  writeFileSync(join(temp, "next.config.mjs"), config);
  for (const oldConfig of ["next.config.js", "next.config.ts"]) {
    const path = join(temp, oldConfig);
    if (existsSync(path)) rmSync(path);
  }

  // On case-insensitive filesystems, this extensionless import can resolve
  // projects.js instead of the intended Projects.jsx component.
  const ingamanaPage = join(temp, "src", "app", "page.js");
  if (slug === "ingamana-scroll-animation-nextjs" && existsSync(ingamanaPage)) {
    writeFileSync(
      ingamanaPage,
      readFileSync(ingamanaPage, "utf8").replace(
        '"@/components/Projects/Projects"',
        '"@/components/Projects/Projects.jsx"',
      ),
    );
  }

  if (slug === "poppr-menu-nextjs") {
    for (const route of ["work", "services", "about", "insights", "careers", "contact"]) {
      const routeRoot = join(temp, "src", "app", route);
      mkdirSync(routeRoot, { recursive: true });
      writeFileSync(join(routeRoot, "page.js"), 'export { default } from "../page";\n');
    }
  }
  namespaceNextAssets(temp, basePath);

  const nextCli = join(temp, "node_modules", "next", "dist", "bin", "next");
  const nextMajor = Number(String(pkg.dependencies?.next || pkg.devDependencies?.next).match(/\d+/)?.[0]);
  const buildArgs = [nextCli, "build", ...(nextMajor >= 16 ? ["--webpack"] : [])];
  execFileSync(process.execPath, buildArgs, {
    cwd: temp,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: "pipe",
    timeout: 300000,
  });
  cpSync(join(temp, "out"), destination, { recursive: true });
  rewriteNextRoutes(destination, basePath);
}

if (!repairMode) rmSync(outputRoot, { recursive: true, force: true });
rmSync(tempRoot, { recursive: true, force: true });
mkdirSync(outputRoot, { recursive: true });
mkdirSync(tempRoot, { recursive: true });

const projects = findProjects();
const usedSlugs = new Set();
const manifest = [];

for (const project of projects) {
  const pkg = readPackage(project.root);
  const slug = uniqueSlug(project.folder, usedSlugs);
  const destination = join(outputRoot, slug);
  const basePath = `/experiments/${slug}`;
  const isNext = Boolean(pkg.dependencies?.next || pkg.devDependencies?.next);
  const item = {
    order: project.order,
    slug,
    title: titleCase(project.folder),
    kind: isNext ? "Next.js" : pkg.devDependencies?.vite || pkg.dependencies?.vite ? "Vite" : "Static",
    source: relative(workspace, project.root).replaceAll("\\", "/"),
    status: "ready",
  };

  process.stdout.write(`[${String(item.order).padStart(2, "0")}/${projects.length}] ${item.title} ... `);
  try {
    if (repairMode && isNext) rmSync(destination, { recursive: true, force: true });
    mkdirSync(destination, { recursive: true });
    if (isNext) buildNext(project, destination, basePath, slug, pkg);
    else if (repairMode) rewriteAbsolutePaths(destination, basePath);
    else buildVanilla(project, destination, basePath, slug, pkg);
    console.log("ready");
  } catch (error) {
    item.status = "failed";
    item.error = String(error.stderr || error.message).slice(-2000);
    console.log("failed");
  }
  manifest.push(item);
}

writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
rmSync(tempRoot, { recursive: true, force: true });
console.log(`\nPrepared ${manifest.filter((item) => item.status === "ready").length}/${manifest.length} experiments.`);
