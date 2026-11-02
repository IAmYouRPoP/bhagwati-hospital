import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Clean static build configuration */
  images: {
    unoptimized: true,
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
