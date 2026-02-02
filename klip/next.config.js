/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['ffmpeg-static', 'sharp'],
  },
  api: {
    bodyParser: {
      sizeLimit: '5gb',
    },
  },
};

module.exports = nextConfig;
