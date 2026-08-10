import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = "";
if (isGithubActions) {
  repo = process.env.GITHUB_REPOSITORY?.replace(/^.*?\//, "") || "";
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo ? `/${repo}` : "",
  assetPrefix: repo ? `/${repo}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
