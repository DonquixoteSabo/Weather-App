import React from 'react';
import MainTemplate from 'views/MainTemplate';

import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/GlobalStyle';

function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainTemplate />
      </ThemeProvider>
    </>
  );
}

export default Root;
