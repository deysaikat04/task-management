/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"]
  },
  webpack: (config) => {
    // return modified config for custom webpack config
    // Docs: https://nextjs.org/docs/app/api-reference/next-config-js/webpack
    return config;
  }
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(nextConfig);
