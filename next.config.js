/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "www.notion.so",
      "images.unsplash.com",
      // 's3.'
    ],
  },
  async redirects() {
    return [
      {
        source: "/notion/:path*",
        destination: `https://api.notion.com/v1/:path*`,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
