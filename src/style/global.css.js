import { createGlobalStyle } from 'styled-components';
import { customProperties } from './variables.css';
import anurati_woff2 from 'static/fonts/anurati-regular-webfont.woff2';
import anurati_woff from 'static/fonts/anurati-regular-webfont.woff2';
import IBMPlexSans_woff from 'static/fonts/IBMPlexSans-Regular.woff';
import IBMPlexSans_woff2 from 'static/fonts/IBMPlexSans-Regular.woff2';
import inter_woff from 'static/fonts/inter.woff';
import inter_woff2 from 'static/fonts/inter.woff2';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  :root {
    ${customProperties}
  } 

  body {
    font-family: 'interUI', monospace;
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
  outline: 0;
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
    font-family: 'ibmpplexsans';
    src: url(${IBMPlexSans_woff}) format('woff'),
         url(${IBMPlexSans_woff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'interUI';
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
