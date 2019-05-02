import React from 'react';
import { Root, Routes } from 'react-static';
import { Link, Router } from '@reach/router';
import { Transition, animated } from 'react-spring';
import styled from 'styled-components';
import GlobalStyle from 'style';

import SideNav from 'components/SideNav';

function App() {
  return (
    <Root>
      <AppContainer>
        <SideNav />
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </AppContainer>
      <GlobalStyle />
    </Root>
  );
}

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 22rem 1fr;
`;

export default App;
