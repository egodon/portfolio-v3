import React from 'react';
import styled from 'styled-components';
import { Location, Link } from '@reach/router';
import { ROUTES } from 'constants/index';
import Icon, { icons } from 'components/Icon';
import SideNavFooter from 'components/SideNavFooter';
import Logo from 'components/Logo';

const navIcon = {
  HOME: icons.home,
  ABOUT: icons.user,
  EXPERIENCE: icons.paper,
  PROJECTS: icons.code,
};

const SideNav = () => (
  <Container>
    <H1>
      <Logo size="8rem" />
      <span style={{ fontSize: 18, display: 'block' }}>EVAN GODON</span>
    </H1>
    <Location>
      {({ location }) => (
        <>
          <nav>
            <NavList currentPath={location.pathname}>
              {Object.keys(ROUTES).map((routeName) => {
                const isCurrent = location.pathname === ROUTES[routeName];
                return (
                  <NavItem key={routeName} isCurrent={isCurrent}>
                    <Icon src={navIcon[routeName]} size="2rem" fillColor="currentColor" />
                    <Link to={ROUTES[routeName]}>{routeName}</Link>
                  </NavItem>
                );
              })}
            </NavList>
          </nav>
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
`;

const H1 = styled.h1`
  padding: var(--side-padding);
  margin-bottom: 5rem;
`;

const lightPosition = {
  '/': '0',
  '/about': '100%',
  '/experience': '200%',
  '/projects': '300%',
};

const NavList = styled.ul`
  &:before {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: var(--nav-item-height);
    background-color: hotpink;
    box-shadow: 1px 0px 15px hotpink;
    transition: transform 0.2s ease;
    transform: translateY(${(p) => lightPosition[p.currentPath]});
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 3.4rem;
  color: ${(p) => (p.isCurrent ? p.theme['--white'] : p.theme['--grey-300'])};

  &:hover {
    color: ${(p) => (p.isCurrent ? p.theme['--white'] : p.theme['--grey-300'])};
  }

  a {
    flex: 1;
    height: var(--nav-item-height);
    line-height: var(--nav-item-height);
    padding-left: 2.2rem;
    letter-spacing: 1px;
    font-size: var(--fs-small);
    display: block;
  }
`;

export default SideNav;
