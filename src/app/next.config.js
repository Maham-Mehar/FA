/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // ✅ Allow Cloudinary domain
  },
};

module.exports = nextConfig;
