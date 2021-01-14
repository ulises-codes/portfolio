const withPWA = require('next-pwa')

module.exports = withPWA({
  webpack(config) {
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
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
})
