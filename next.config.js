const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  exclude: [
    path.resolve(__dirname, 'static/icons'),
  ],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          // Limit at 50k. Above that it emits separate files
          limit: 100000,

          // url-loader sets mimetype if it's passed.
          // Without this it derives it from the file extension
          mimetype: 'application/font-woff',

          // Output below fonts directory
          name: './fonts/[name].[ext]',
        },
      },
    });

    return config;
  },
});
