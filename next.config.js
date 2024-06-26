/** @type {import('next').NextConfig} */

// const nextConfig = {}

// module.exports = nextConfig
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

module.exports = withPWA({
  reactStrictMode: true,
  typescript: {
    tsconfigPath: "./tsconfig.build.json",
  },
});
