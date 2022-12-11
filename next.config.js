/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
  return [
    {
      source: '/notion/:path*',
      destination: `https://api.notion.com/v1/:path*`,
      permanent: false
    },
  ]}
};

module.exports = nextConfig;
