import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force Turbopack to treat this directory as the workspace root to avoid lockfile mis-detection.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
