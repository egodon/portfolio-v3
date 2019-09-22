import { createGlobalStyle } from 'styled-components';
import { customProperties } from './variables.css';
import anurati_woff2 from 'static/fonts/anurati-regular-webfont.woff2';
import anurati_woff from 'static/fonts/anurati-regular-webfont.woff2';
import IBMPlexSans_woff from 'static/fonts/IBMPlexSans-Regular.woff';
import IBMPlexSans_woff2 from 'static/fonts/IBMPlexSans-Regular.woff2';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  :root {
    ${customProperties}
  } 

  body {
    font-family: 'IBMPlexSans', monospace;
    font-weight: 300;
    font-size: var(--fs-default);
    letter-spacing: 0.3px;
    margin: 0;
    padding: 0;
    color: var(--white);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all .2s ease;
  }

  @font-face {
    font-family: 'anuratiregular';
    src: url(${anurati_woff2}) format('woff2'),
         url(${anurati_woff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'IBMPlexSans';
    src: url(${IBMPlexSans_woff}) format('woff'),
         url(${IBMPlexSans_woff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  svg {
    stroke-width: 1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary-dark);
  }

  ::-webkit-scrollbar-track {
    background-color: var(--grey-500);
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

`;

export default GlobalStyle;
