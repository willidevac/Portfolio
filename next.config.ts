import type { NextConfig } from 'next';

// The portfolio has no server-side data or account system.
// Static HTML keeps the build portable between hosting providers.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
