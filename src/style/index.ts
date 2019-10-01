import GlobalStyle from './global.css';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export * from './variables.css';
export * from './animations.css';
export const useThemeContext = () => useContext(ThemeContext);

export default GlobalStyle;
