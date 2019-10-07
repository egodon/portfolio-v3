import React, { useState } from 'react';
import { withRouter } from 'next/router';
import styled, { ThemeProvider } from 'styled-components';
import SideNav from 'components/SideNav';
import AnimatedBackground from 'components/AnimatedBackground';
import ThemeSwitch from 'components/ThemeSwitch';
import GlobalStyle, { variables, media } from 'css';
import { isNightTime } from 'utils';

const Template = ({ children, router }) => {
  const [inDarkMode, setDarkMode] = useState(isNightTime());

  return (
    <>
      <ThemeProvider theme={{ ...variables, inDarkMode, setDarkMode }}>
        <AppContainer>
          <SideNav pathname={router.pathname} />
          <Main>
            <>
              <AnimatedBackground />
              <ThemeSwitch />
              {children}
            </>
          </Main>
          <GlobalStyle theme={{ ...variables, inDarkMode }} />
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 22rem 1fr;
  overflow: hidden;
  --bg-color: ${({ theme }) =>
    theme.inDarkMode ? theme.__grey_500 : theme.__white};
  background-color: var(--bg-color);

  ${media.tablet`
    --mobile-nav-height: 7rem
    grid-template-columns: auto;
    grid-template-rows: calc(100vh - var(--mobile-nav-height)) var(--mobile-nav-height);
  `};
`;

const Main = styled.main`
  overflow-y: auto;
  position: relative;
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};
`;

export default withRouter(Template);
