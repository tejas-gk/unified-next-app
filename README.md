# Codegrid Collection

A single Next.js gallery for all source projects in the parent workspace. Each experiment is compiled with a namespaced base path and runs in an isolated frame, preserving its original global styles and animation lifecycle.

```bash
npm install
npm run prepare:experiments
npm run dev
```

Re-run `npm run prepare:experiments` after changing any original source project.
