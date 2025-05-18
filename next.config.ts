import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ph-files.imgix.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
