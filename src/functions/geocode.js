const NodeGeocoder = require('node-geocoder');
const { promisify } = require('util');
const Base64 = require('js-base64').Base64;

const options = {
  provider: 'opencage',
  httpAdapter: 'https',
  apiKey: process.env.OPENCAGE_API_KEY,
  formatter: null,
};

const geocoder = NodeGeocoder(options);
geocoder.reverse = promisify(geocoder.reverse);

exports.handler = async (event, context) => {
  const { body } = event;
  const { latitude, longitude } = JSON.parse(body);

  try {
    const res = await geocoder.reverse({ lat: latitude, lon: longitude });
    const { streetNumber, streetName, city } = res[0];

    return {
      statusCode: 200,
      body: JSON.stringify({
        a: Base64.encode(`${streetNumber} ${streetName}, ${city}`),
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};
