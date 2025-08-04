import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  allowedDevOrigins: ['http://localhost:3000', 'http://192.168.5.199:3000', 'placehold.co']
}

export default nextConfig;
