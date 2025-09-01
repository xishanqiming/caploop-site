import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // 只在构建阶段忽略 ESLint，让 CI 不被样式或小问题拦截
    ignoreDuringBuilds: true,
  },
  // 如使用了新语法/实验特性，可按需开启
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;
