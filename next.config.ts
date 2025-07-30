import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allows images from all HTTPS domains
      },
    ],
  },
};

export default nextConfig;
