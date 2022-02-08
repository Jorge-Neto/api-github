import React from 'react';

import { Normalize } from 'styled-normalize';

import Router from './routes';

import Theme from './styles/Theme';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Theme>
      <Router />
      <GlobalStyle />
      <Normalize />
    </Theme>
  );
}

export default App;
