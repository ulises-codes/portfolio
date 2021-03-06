const withPlugins = require('next-compose-plugins')
const withPreact = require('next-plugin-preact')
const withPWA = require('next-pwa')
const withPrefresh = require('@prefresh/next')

const nextConfig = {
  poweredByHeader: false,
  future: {
    webpack5: true,
  },
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}

module.exports = withPlugins([
  [withPrefresh],
  [withPreact],
  [
    withPWA,
    {
      pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        mode: 'production',
      },
      ...nextConfig,
    },
  ],
])
