import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';

import MainPage from '@pages/MainPage';
import CreatePage from '@pages/CreatePage';
import SearchPage from '@pages/SearchPage';
import MyPage from '@pages/MyPage';
import EventPage from '@pages/EventPage';
import ExercisePage from '@pages/ExercisePage';
import EatingHabitsPage from '@pages/EatingHabitsPage';
import LifePage from '@pages/LifePage';
import EmotionsPage from '@pages/EmotionsPage';
import HobbiesPage from '@pages/HobbiesPage';
import EnvironmentPage from '@pages/EnvironmentPage';
import Page404 from '@pages/Page404';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/create" element={<CreatePage />} />
          <Route exact path="/search" element={<SearchPage />} />
          <Route exact path="/my" element={<MyPage />} />
          <Route exact path="/event" element={<EventPage />}>
            <Route exact path="exercise" element={<ExercisePage />} />
            <Route exact path="eating-habits" element={<EatingHabitsPage />} />
            <Route exact path="life" element={<LifePage />} />
            <Route exact path="emotions" element={<EmotionsPage />} />
            <Route exact path="hobbies" element={<HobbiesPage />} />
            <Route exact path="environment" element={<EnvironmentPage />} />
            <Route exact path="*" element={<Page404 />} />
          </Route>
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
