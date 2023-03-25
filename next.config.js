/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "links.papareact.com",
      "github.com/avijitsaha2997",
      "avijit-saha2997.web.app",
    ],
  },
};

module.exports = nextConfig;
