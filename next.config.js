/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // 你已使用 App Router + Turbopack，保持默认即可
};
module.exports = nextConfig;
