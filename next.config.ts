import type { NextConfig } from "next"; // type that describes valid Next.js config options

const nextConfig: NextConfig = {
  // config options go here; empty means "use all defaults"
  reactStrictMode: true, // extra dev-only checks that catch common React bugs early
};

export default nextConfig; // Next.js reads this default export at startup
