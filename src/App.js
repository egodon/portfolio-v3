import React from 'react';
import { Root, Routes } from 'react-static';
import { Router } from '@reach/router';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle, { variables, media } from 'style';
import SideNav from 'components/SideNav';

const App = () => (
  <Root>
    <ThemeProvider theme={variables}>
      <AppContainer>
        <SideNav />
        <Main>
          <React.Suspense fallback="<em>Loading...</em>">
            <Router>
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </Main>
      </AppContainer>
    </ThemeProvider>
    <GlobalStyle />
  </Root>
);

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 22rem 1fr;
  overflow: hidden;

  ${media.tablet`
    --mobile-nav-height: 7rem

    grid-template-columns: auto;
    grid-template-rows: calc(100vh - var(--mobile-nav-height)) var(--mobile-nav-height);
  `}
`;

const Main = styled.main`
  overflow-y: auto;
`;

export default App;
