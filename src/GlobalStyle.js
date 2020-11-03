import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box}


@import url('https://fonts.googleapis.com/css2?family=Meddon&display=swap');


  body {
    margin: 0;
    font-family:  'Meddon', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: 'Meddon', cursive;
  }
`;

export default GlobalStyle;
