import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // ⚠️ CHANGE THIS to your repo name
  basePath: "/portfolio-3",
  assetPrefix: "/portfolio-3/",
};

export default nextConfig;
