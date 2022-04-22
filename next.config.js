/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    domains: [
      "tinnhiemmang.vn",
      "staging.khonggianmang.vn",
      "khonggianmang.vn",
      "staging.khonggianmang.vnundefined",
      "api-staging.khonggianmang.vn",
      "api-staging.khonggianmang.vnundefined",
    ],
  },
};

module.exports = nextConfig;
