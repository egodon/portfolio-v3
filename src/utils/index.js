export const isNightTime = () => {
  const date = new Date();
  const hour = date.getHours();

  return hour > 18 || hour < 5;
};
