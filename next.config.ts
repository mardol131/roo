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
        source: "/admin/novy-dodavatel/:step",
        destination: "/admin/new-service/:step",
      },
      {
        source: "/admin/registrace",
        destination: "/admin/signup",
      },
    ];
  },
};

export default nextConfig;
