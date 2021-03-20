import React from 'react';
import MainTemplate from 'views/MainTemplate';

import { ThemeProvider } from 'styled-components';
import theme from 'assets/styles/theme';
import GlobalStyle from 'assets/styles/GlobalStyle';

import WeatherProvider from 'weatherProvider';

function Root() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <WeatherProvider>
          <MainTemplate />
        </WeatherProvider>
      </ThemeProvider>
    </>
  );
}

export default Root;
