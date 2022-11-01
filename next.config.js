/** @type {import('next').NextConfig} */
const basePath = process.env.ASSET_URL ? process.env.ASSET_URL : ''
const nextConfig = {
  basePath: basePath,
  reactStrictMode: true,
}

module.exports = nextConfig
