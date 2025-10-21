import type { NextConfig } from "next";
import path from "path";

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
  turbopack: {
    root: path.resolve(__dirname), // ✅ pevně nastavený absolutní root
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "app"),
      "@public": path.resolve(__dirname, "public"),
    };
    return config;
  },
  transpilePackages: ["@roo/shared"],
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
