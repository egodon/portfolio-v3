const path = require('path');
const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const optimizedImages = require('next-optimized-images');
const Dotenv = require('dotenv-webpack');

module.exports = withPlugins(
  [images, [optimizedImages, { handleImages: ['png'] }]],
  {
    exclude: [path.resolve(__dirname, 'static/icons')],
    webpack(config) {
      /* Svg icons */
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      /* Files */
      config.module.rules.push({
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            mimetype: 'application/font-woff',
            name: './fonts/[name].[ext]',
          },
        },
      });

      config.plugins = config.plugins || [];

      config.plugins = [
        ...config.plugins,

        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ];

      return config;
    },
  }
);
