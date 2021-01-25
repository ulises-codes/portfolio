const WorkerPlugin = require('worker-plugin')
const withPWA = require('next-pwa')

module.exports = withPWA({
  poweredByHeader: false,
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!isServer) {
      config.plugins.push(
        new WorkerPlugin({
          globalObject: 'self',
        })
      )
    }

    return config
  },
  images: {
    loader: 'cloudinary',
    path: ['https://res.cloudinary.com/da3fgujdy'],
  },
  // i18n: {
  //   locales: ['en-US'],
  //   defaultLocale: 'en-US',
  // },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
})
