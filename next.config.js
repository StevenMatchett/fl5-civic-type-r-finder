/** @type {import('next').NextConfig} */
const basePath = process.env.ASSET_URL ? process.env.ASSET_URL : ''
const nextConfig = {
  webpack: (config)=>{
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true }};
    return config
  },
  basePath: basePath,
  reactStrictMode: true,
}

module.exports = nextConfig
