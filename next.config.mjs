const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return [
      // Next.js multi-page experiments - serve .html files for clean routes
      {
        source: "/experiments/next-clip-mask-page-transition/:page",
        destination: "/experiments/next-clip-mask-page-transition/:page.html",
      },
      {
        source: "/experiments/obsidianassembly-page-transition/:page",
        destination: "/experiments/obsidianassembly-page-transition/:page.html",
      },
      {
        source: "/experiments/grid-shutter-page-transition/:page",
        destination: "/experiments/grid-shutter-page-transition/:page.html",
      },
      {
        source: "/experiments/svg-stroke-page-transition-nextjs/:page",
        destination: "/experiments/svg-stroke-page-transition-nextjs/:page.html",
      },
      {
        source: "/experiments/poppr-menu-nextjs/:page",
        destination: "/experiments/poppr-menu-nextjs/:page.html",
      },
    ];
  },
};

export default nextConfig;