import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
}

  a, button {
    font-family: 'Raleway', sans-serif;
  }
  ol, ul {
	list-style: none;
}
`;

export default GlobalStyle;
