import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        domains: ['https://cruip-tutorials.vercel.app'],
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default nextConfig;
