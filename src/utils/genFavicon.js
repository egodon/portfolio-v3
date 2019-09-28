const icongen = require('icon-gen');
const path = require('path');

const input = path.join(__dirname, '../..', '/static/images/logo-E.svg');
const output = path.join(__dirname, '../..', '/static/favicon');

const options = {
  report: true,
  favicon: {
    name: 'favicon-',
    sizes: [32, 64],
    ico: [16, 24, 32, 48, 64],
  },
};

icongen(input, output, options)
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.error(err);
  });
