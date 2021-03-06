export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  EXPERIENCE: '/experience',
  PROJECTS: '/projects',
  CONTACT: '/contact',
};

export const isSSR = !!(typeof window === 'undefined');
export const prod = process.env.NODE_ENV === 'production';
export const DEV_ENV = process.env.NODE_ENV === 'development';
