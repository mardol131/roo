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
        source: "/prihlasit-se",
        destination: "/login",
      },
      {
        source: "/registrovat-se",
        destination: "/signup",
      },
    ];
  },
};

export default nextConfig;
