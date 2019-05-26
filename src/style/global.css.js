import { createGlobalStyle } from 'styled-components';
import { variables } from './variables.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }


  /* Variables */
  :root {
    ${Object.keys(variables).map((key) => `${key}: ${variables[key]};`)}
  }

  body {
    background-color: var(--grey-500);
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
    Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
