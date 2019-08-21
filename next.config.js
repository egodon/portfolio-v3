const path = require('path');
const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [images, optimizedImages],
  {
    exclude: [path.resolve(__dirname, 'static/icons')],
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      config.module.rules.push({
        test: /(png|jpe?g)/,
        loaders: [
          {
            loader: 'lqip-loader',
            options: {
              path: '/media', // your image going to be in media folder in the output dir
              name: '[name].[ext]', // you can use [hash].[ext] too if you wish,
              base64: true, // default: true, gives the base64 encoded image
              palette: true, // default: false, gives the dominant colours palette
            },
          },
        ],
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
  },
]);
