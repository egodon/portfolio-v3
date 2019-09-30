import { isSSR } from 'constants';

const options = {
  timeZone: 'America/New_York',
  timeStyle: 'short',
  hour: 'numeric',
  hour12: false,
};

export const isNightTime = () => {
  const time = new Date().toLocaleString([], options);
  const hour = parseInt(time, 10);

  const isNight = hour >= 17 || hour < 6;

  if (isSSR) {
    console.log(`Hour is ${hour}, setting ${isNight ? 'night' : 'light'} theme`);
  }

  return isNight;
};
