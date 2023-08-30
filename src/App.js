import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';

import MainPage from '@pages/MainPage';
import Page404 from '@pages/Page404';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
