/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  reactStrictMode: true,

  output: "export",

  basePath: isGithubPages ? "/fabian-producer" : "",

  images: {
    domains: [],
    unoptimized: true,
  },
};

module.exports = nextConfig;
