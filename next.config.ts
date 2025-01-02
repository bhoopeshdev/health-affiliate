import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.shopify.com",
      "maxprotein.in",
      "www.ashpveda.com",
      "theayurvedaco.com",
      "krishival.com",
      "bluetea.co.in"
    ], // Add other domains as needed
  },
};

export default nextConfig;