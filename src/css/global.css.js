import { createGlobalStyle } from 'styled-components';
import { customProperties } from './variables.css';
import anurati_woff2 from 'static/fonts/anurati-regular-webfont.woff2';
import anurati_woff from 'static/fonts/anurati-regular-webfont.woff2';
import inter_woff from 'static/fonts/robotomono-regular.woff';
import inter_woff2 from 'static/fonts/robotomono-regular.woff2';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 80%;

    /* For 4k monitors */
    @media 
    (-webkit-min-device-pixel-ratio: 2), 
    (min-resolution: 192dpi) { 
      font-size: 62.5%;
    }
  }

  ${normalize()}

  :root {
    ${customProperties}
  } 

  body {
    font-family: 'robotomono', monospace;
    font-weight: 400;
    font-size: var(--fs-default);
    letter-spacing: 0.3px;
    margin: 0;
    padding: 0;
    color: var(--white);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: "liga" 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: color, background-color .3s ease;
  }

  a:hover, a:active, a:focus, a:link, a:visited {
    outline: 0 !important;
    outline-style:none;
  }

  p {
    line-height: 1.6;
  }

  h1, h2, h3, h4 , h5, h6 {
    line-height: 1;
  }

  button, object, embed { 
    outline: 0;
  }

  input[type="submit"]::-moz-focus-inner, input[type="button"]::-moz-focus-inner{
    outline: 0;
  }

  @font-face {
    font-family: 'anuratiregular';
    src: url(${anurati_woff2}) format('woff2'),
         url(${anurati_woff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'robotomono';
    src: url(${inter_woff}) format('woff'),
         url(${inter_woff2}) format('woff2');
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

  ::selection {
    background-color: var(--color-secondary-light);
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
