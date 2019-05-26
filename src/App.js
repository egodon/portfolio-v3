import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import { Transition, animated } from 'react-spring';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle, { variables } from 'style';
import SideNav from 'components/SideNav';

const App = () => (
  <Root>
    <ThemeProvider theme={variables}>
      <AppContainer>
        <SideNav />
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </AppContainer>
    </ThemeProvider>
    <GlobalStyle />
  </Root>
);

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
`;

export default App;
