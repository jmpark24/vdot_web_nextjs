import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Next.js 기본 설정
  redirects: async () => {
    return [];
  },
};

export default nextConfig;
