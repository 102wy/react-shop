import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
