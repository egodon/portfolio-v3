import React from 'react';
import styled from 'styled-components';
import { ROUTES } from 'constants/index';
import SocialMedia from 'components/SocialMedia';
import NavItem from 'components/NavItem';
import { media } from 'style/index';
import Logo from 'components/Logo';

const SideNav = ({ pathname }) => {
  return (
    <Container>
      <LogoContainer>
        <Logo size="8rem" />
      </LogoContainer>
      <>
        <Nav>
          <NavList currentPath={pathname}>
            {Object.keys(ROUTES).map((route, index) => {
              const isCurrent = pathname === ROUTES[route];
              return <NavItem isCurrent={isCurrent} route={route} key={index} />;
            })}
          </NavList>
        </Nav>
        {pathname !== '/' && <SocialMedia inside="sidenav" />}
      </>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--black);
  height: 100%;
  min-height: 60rem;
  padding: 3.2rem 0;
  color: var(--white);
  display: flex;
  flex-direction: column;
  z-index: 100;

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
    min-height: auto;
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
      display: flex;
      align-items: center;
  `}
`;

const NavList = styled.ul`
  &:before {
    content: '';
    position: absolute;
    width: 0.3rem;
    height: var(--nav-item-height);
    background-color: var(--color-secondary);
    box-shadow: 0 0 18px 3px var(--color-secondary);
    transition: transform 0.2s ease;
    transform: translateY(${(p) => lightBarPosition[p.currentPath]});
  }

  ${media.tablet`
      display: flex;
      justify-content: space-around;
      width: 100%;

    &:before {
      display: none;
    }
  `}
`;

export default SideNav;
