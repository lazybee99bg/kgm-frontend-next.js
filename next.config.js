/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tinnhiemmang.vn",
      "staging.khonggianmang.vn",
      "khonggianmang.vn",
    ],
  },
};

module.exports = nextConfig;
