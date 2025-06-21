import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app',
        pathname: '/api/**',
      },
    ],
  },
};

export default nextConfig;
