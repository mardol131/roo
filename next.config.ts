import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/admin/novy-dodavatel",
        destination: "/admin/new-service",
      },
      {
        source: "/admin/registrace",
        destination: "/admin/signup",
      },
    ];
  },
};

export default nextConfig;
