/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost','51.20.66.47', 'encrypted-tbn0.gstatic.com', 'ibb.co']
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
}

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

if (process.env.NODE_ENV === 'development') {
  console.log('info  - lanUrl:', `http://${require('address').ip()}:3000`)
}


module.exports = withPWA(nextConfig);