const path = require('path');
const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const optimizedImages = require('next-optimized-images');
const dotenv = require('dotenv');
const webpack = require('webpack');

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

      /* Inject env variables */
      const env = dotenv.config().parsed;
      const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
      }, {});

      config.plugins.push(new webpack.DefinePlugin(envKeys));

      return config;
    },
  }
);
