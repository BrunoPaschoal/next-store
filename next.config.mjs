/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.adidas.com"],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
