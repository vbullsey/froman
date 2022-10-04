/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
