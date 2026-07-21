import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Allow this host to access dev resources (webpack HMR) in development
  allowedDevOrigins: ['10.23.178.230'],
};

export default nextConfig;
