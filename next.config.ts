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
      "bluetea.co.in",
      "img1.hkrtcdn.com",
      "img2.hkrtcdn.com",
      "img3.hkrtcdn.com",
      "img4.hkrtcdn.com",
      "img5.hkrtcdn.com",
      "img6.hkrtcdn.com",
      "img7.hkrtcdn.com",
      "img8.hkrtcdn.com",
      "img9.hkrtcdn.com",
      "img10.hkrtcdn.com",
      "www.sova.health",
      "kapiva-cdn.gumlet.io",
      "zanducare.com",
      "m.media-amazon.com",
      "static.toiimg.com",
      "upload.wikimedia.org",
      "en-media.thebetterindia.com",
    ], // Add other domains as needed
  },
};

export default nextConfig;