const withPWA = require('next-pwa')

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
    loader: 'cloudinary',
    path: ['https://res.cloudinary.com/da3fgujdy'],
  },
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  ...nextConfig,
})
