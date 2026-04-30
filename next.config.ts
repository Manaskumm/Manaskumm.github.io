import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: "C:/Users/Manas/Downloads/Website",
  },
};

export default nextConfig;
