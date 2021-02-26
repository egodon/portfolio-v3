import { isSSR } from 'constants/index';

const options = {
  timeZone: 'America/New_York',
  hour: 'numeric',
  hour12: false,
} as const;

export const isNightTime = () => {
  const time = new Date().toLocaleString([], options);
  const hour = parseInt(time, 10);

  const isNight = hour >= 17 || hour < 6;

  if (isSSR) {
    console.log(
      `[theme] Hour is ${hour}, setting ${isNight ? 'night' : 'light'} theme`
    );
  }

  return isNight;
};
