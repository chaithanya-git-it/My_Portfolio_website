import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/My_Portfolio_website",
  assetPrefix: "/My_Portfolio_website/",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
