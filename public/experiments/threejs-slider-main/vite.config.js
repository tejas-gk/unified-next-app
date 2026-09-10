import { defineConfig } from "vite";

export default defineConfig({
  base: "/experiments/threejs-slider-main/",
  publicDir: "public",
  build: {
    assetsInlineLimit: 0,
  },
  server: {
    open: true,
  },
});
