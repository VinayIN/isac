/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;