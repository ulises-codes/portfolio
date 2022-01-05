const withPWA = require('next-pwa')

const nextConfig = {
  poweredByHeader: false,
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/da3fgujdy/',
  },
}

module.exports = withPWA(nextConfig)
