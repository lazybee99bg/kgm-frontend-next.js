/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: "custom",
    // disableStaticImages: true,
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
