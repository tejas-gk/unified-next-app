import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const experiments = JSON.parse(readFileSync(join(root, "data", "experiments.json"), "utf8"));
const port = 3199;
const origin = `http://127.0.0.1:${port}`;
const nextCli = join(root, "node_modules", "next", "dist", "bin", "next");
const server = spawn(process.execPath, [nextCli, "start", "-p", String(port)], {
  cwd: root,
  stdio: ["ignore", "pipe", "pipe"],
});

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {}
    await new Promise((resolveWait) => setTimeout(resolveWait, 200));
  }
  throw new Error("Production server did not become ready.");
}

async function assertOk(path) {
  const response = await fetch(`${origin}${path}`);
  if (!response.ok) throw new Error(`${response.status} ${path}`);
}

try {
  await waitForServer();
  await Promise.all(experiments.flatMap(({ slug }) => [
    assertOk(`/experiments/${slug}`),
    assertOk(`/experiments/${slug}/index.html`),
  ]));
  console.log(`Smoke test passed: gallery and ${experiments.length} experiments are reachable.`);
} finally {
  server.kill();
}
