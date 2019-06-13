import { createGlobalStyle } from 'styled-components';
import { customProperties } from './variables.css';
import anurati_woff2 from 'static/fonts/anurati-regular-webfont.woff2';
import anurati_woff from 'static/fonts/anurati-regular-webfont.woff2';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  :root {
    ${customProperties}
  } 

  body {
    background-color: var(--grey-500);
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    color: var(--white);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'anuratiregular';
    src: url(${anurati_woff2}) format('woff2'),
         url(${anurati_woff}) format('woff');
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

`;

export default GlobalStyle;
