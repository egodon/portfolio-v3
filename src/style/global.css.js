import { createGlobalStyle } from 'styled-components';
import { customProperties } from './variables.css';

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

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`;

export default GlobalStyle;
