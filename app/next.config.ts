import type { NextConfig } from "next";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

// changing env file to monorepo env in development
if (process.env.VERCEL !== "1") {
  const rootEnvPath = path.resolve(__dirname, "../.env");
  dotenv.config({ path: rootEnvPath });
  console.log("🔹 ENV načteno z rootu");
} else {
  console.warn("⚠️ Root .env nebyl nalezen");
}

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
  experimental: {
    externalDir: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "app"),
      "@public": path.resolve(__dirname, "public"),
      "@roo/shared": path.resolve(__dirname, "../shared"),
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
      {
        source: "/stranky/kontakt",
        destination: "/pages/contact",
      },
      {
        source: "/stranky/:pageSlug",
        destination: "/pages/:pageSlug",
      },
    ];
  },
};

export default nextConfig;
