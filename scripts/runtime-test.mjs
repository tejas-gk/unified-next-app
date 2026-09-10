import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const experiments = JSON.parse(readFileSync(join(root, "data", "experiments.json"), "utf8"));
const port = 3198;
const origin = `http://127.0.0.1:${port}`;
const nextCli = join(root, "node_modules", "next", "dist", "bin", "next");
const server = spawn(process.execPath, [nextCli, "start", "-p", String(port)], {
  cwd: root,
  stdio: ["ignore", "pipe", "pipe"],
});

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      if ((await fetch(origin)).ok) return;
    } catch {}
    await new Promise((resolveWait) => setTimeout(resolveWait, 200));
  }
  throw new Error("Production server did not become ready.");
}

function normalizeError(value) {
  return String(value).replace(origin, "").replace(/\s+/g, " ").trim().slice(0, 500);
}

let browser;
try {
  await waitForServer();
  browser = await chromium.launch({
    headless: true,
    args: ["--enable-webgl", "--ignore-gpu-blocklist", "--use-angle=swiftshader"],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  let activeErrors = [];

  page.on("pageerror", (error) => activeErrors.push(`pageerror: ${normalizeError(error.message)}`));
  page.on("console", (message) => {
    if (message.type() === "error") activeErrors.push(`console: ${normalizeError(message.text())}`);
  });
  page.on("requestfailed", (request) => {
    if (request.failure()?.errorText !== "net::ERR_ABORTED") {
      activeErrors.push(`request: ${normalizeError(request.url())} (${request.failure()?.errorText})`);
    }
  });
  page.on("response", (response) => {
    if (response.url().startsWith(origin) && response.status() >= 400) {
      activeErrors.push(`response: ${response.status()} ${normalizeError(response.url())}`);
    }
  });

  const failures = [];
  for (const experiment of experiments) {
    activeErrors = [];
    const path = `/experiments/${experiment.slug}/index.html`;
    try {
      await page.goto(`${origin}${path}`, { waitUntil: "domcontentloaded", timeout: 20000 });
      await page.mouse.move(300, 240);
      await page.mouse.move(900, 600, { steps: 4 });
      await page.evaluate(() => window.scrollTo(0, Math.max(1, document.body.scrollHeight * 0.5)));
      await page.waitForTimeout(1200);
    } catch (error) {
      activeErrors.push(`navigation: ${normalizeError(error.message)}`);
    }

    const uniqueErrors = [...new Set(activeErrors)];
    if (uniqueErrors.length) failures.push({ slug: experiment.slug, errors: uniqueErrors });
    process.stdout.write(uniqueErrors.length ? "F" : ".");
  }
  console.log();

  if (failures.length) {
    for (const failure of failures) {
      console.log(`\n${failure.slug}`);
      for (const error of failure.errors) console.log(`  ${error}`);
    }
    throw new Error(`${failures.length}/${experiments.length} experiments reported runtime failures.`);
  }

  console.log(`Runtime test passed: ${experiments.length} experiments reported no browser errors.`);
} finally {
  await browser?.close();
  server.kill();
}
