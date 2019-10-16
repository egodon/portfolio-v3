import LogRocket from 'logrocket';
import { Base64 } from 'js-base64';

export const initLogRocket = async () => {
  LogRocket.init(process.env.LOGROCKET_APP_ID);

  try {
    const geoResponse = await fetch('https://json.geoiplookup.io/');
    const data = await geoResponse.json();

    const response = await fetch('/.netlify/functions/geocode', {
      method: 'POST',
      body: JSON.stringify({
        latitude: data.latitude,
        longitude: data.longitude,
      }),
    });

    const geoData = await response.json();

    LogRocket.identify(data.ip === process.env.MY_IP_ADDRESS ? 'Me' : data.ip, {
      name: Base64.decode(geoData.a),
    });
  } catch (error) {
    LogRocket.captureException(error);
  }
};
