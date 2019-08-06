import React from 'react';
import { withRouter } from 'next/router'
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle, { variables, media } from 'style';
import SideNav from 'components/SideNav';

const Template = ({ children, router }) => (
  <>
    <ThemeProvider theme={variables}>
      <AppContainer>
        <SideNav pathname={router.pathname}/>
        <Main>{children}</Main>
      </AppContainer>
    </ThemeProvider>
    <GlobalStyle />
  </>
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

export default withRouter(Template);
