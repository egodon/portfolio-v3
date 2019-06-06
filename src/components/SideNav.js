import React from 'react';
import styled from 'styled-components';
import { Location } from '@reach/router';
import { ROUTES } from 'constants/index';
import SideNavFooter from 'components/SideNavFooter';
import NavItem from 'components/NavItem';
import { media } from 'style/index';
import Logo from 'components/Logo';

const SideNav = () => (
  <Container>
    <LogoContainer>
      <Logo size="8rem" />
    </LogoContainer>
    <Location>
      {({ location }) => (
        <>
          <Nav>
            <NavList currentPath={location.pathname}>
              {Object.keys(ROUTES).map((route) => {
                const isCurrent = location.pathname === ROUTES[route];
                return <NavItem isCurrent={isCurrent} route={route} />;
              })}
            </NavList>
          </Nav>
          {location.pathname !== '/' && <SideNavFooter />}
        </>
      )}
    </Location>
  </Container>
);

const Container = styled.div`
  background-color: var(--black);
  height: 100vh;
  padding: 3.2rem 0;
  color: var(--white);
  display: flex;
  flex-direction: column;

  --side-padding: 3.2rem;
  --nav-item-height: 3.8rem;

  ${media.tablet`
    padding: 0 3.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    grid-row: 2 / 3;
    height: auto;
    flex-direction: row;
    align-items: center;
  `}

  ${media.mobile`
    padding: 0;
  `}
`;

const LogoContainer = styled.div`
  padding: var(--side-padding);
  margin: 0 auto;
  margin-bottom: 5rem;

  ${media.tablet`
      display: none;
  `}
`;

const lightBarPosition = {
  '/': '0',
  '/about': '100%',
  '/experience': '200%',
  '/projects': '300%',
};

const Nav = styled.nav`
  width: 100%;

  ${media.tablet`
      height: var(--mobile-nav-height);
  `}
`;

const NavList = styled.ul`
  ${media.tablet`
      display: flex;
      justify-content: space-around;
  `}

  &:before {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: var(--nav-item-height);
    background-color: var(--color-primary);
    box-shadow: 0 0 18px 3px var(--color-primary);
    transition: transform 0.2s ease;
    transform: translateY(${(p) => lightBarPosition[p.currentPath]});

    ${media.tablet`
      display: none;
    `}
  }

  a {
    flex: 1;
    padding-left: 2.2rem;
    letter-spacing: 1px;
    font-size: var(--fs-small);
    display: block;
  }

  ${media.tablet`
      padding: 0 2.4rem;
      flex-direction: column;
      justify-content: center;
      height: var(--mobile-nav-height);
      color: ${(p) => (p.isCurrent ? p.theme.__color_primary : p.theme.__grey_300)};

      &:hover {
        color: ${(p) => (p.isCurrent ? p.theme.__color_primary : p.theme.__grey_300)};
      }

      a {
        padding: 1.2rem 0 0 0;
        flex: none;
        height: auto;
        line-height: 1;
      }
  `}
`;

export default SideNav;
