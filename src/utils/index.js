import { isSSR } from 'constants';

const options = {
  timeZone: 'America/New_York',
  timeStyle: 'short',
  hour: 'numeric',
  hour12: false,
};

const formatter = new Intl.DateTimeFormat([], options);

export const isNightTime = () => {
  const time = formatter.format(new Date());
  const hour = +time;

  const isNight = hour >= 17 || hour <= 6;

  if (isSSR) {
    console.log(`Hour is ${hour}, setting ${isNight ? 'night' : 'light'} theme`);
  }

  return isNight;
};
