import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com"], // Add other domains as needed
  },
};

export default nextConfig;