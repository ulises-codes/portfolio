const withPWA = require('next-pwa');

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  poweredByHeader: false,
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/da3fgujdy/',
  },
};

// module.exports = withPWA({
//   ...nextConfig,
//   pwa: {
//     dest: 'public',
//     disable: process.env.NODE_ENV === 'development',
//     mode: 'production',
//   },
// });
