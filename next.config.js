module.exports = {
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
}
