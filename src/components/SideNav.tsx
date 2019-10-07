import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ROUTES } from 'constants/index';
import SocialMedia from 'components/SocialMedia';
import NavItem from 'components/NavItem';
import { media } from 'css/index';
import Logo from 'components/Logo';
import Glitch from 'components/Glitch';

type Props = {
  pathname: string;
};

const SideNav: React.FC<Props> = ({ pathname }) => {
  return (
    <Container>
      <Link href="/">
        <LogoContainer>
          <Glitch Icon={() => <Logo />}>{({ GlitchIcon }) => <GlitchIcon />}</Glitch>
        </LogoContainer>
      </Link>
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
  background-color: ${({ theme }) =>
    theme.inDarkMode ? theme.__black : theme.__grey_200};
  height: 100%;
  min-height: 60rem;
  padding: 3.2rem 0;
  color: ${({ theme }) => (theme.inDarkMode ? theme.__white : theme.__black)};
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

const LogoContainer = styled.a`
  padding: var(--side-padding);
  margin: 0 auto;
  margin-bottom: 15rem;
  cursor: pointer;

  ${media.tablet`
      display: none;
  `}
`;

const lightBarPosition = {
  '/': '0',
  '/about': '100%',
  '/experience': '200%',
  '/projects': '300%',
  '/contact': '400%',
};

const Nav = styled.nav`
  width: 100%;
  margin-bottom: auto;

  ${media.tablet`
      height: var(--mobile-nav-height);
      display: flex;
      align-items: center;
  `}
`;

const NavList = styled.ul<{ currentPath: string }>`
  &:before {
    content: '';
    position: absolute;
    width: 0.3rem;
    height: var(--nav-item-height);
    background-color: var(--color-secondary);
    box-shadow: ${({ theme }) =>
      theme.inDarkMode ? '0 0 18px 3px var(--color-secondary)' : 0};
    transition: ${({ theme }) =>
      theme.inDarkMode ? 'transform 0.2s ease' : 'none'};
    transform: translateY(${(p) => lightBarPosition[p.currentPath]});
    z-index: 1;
  }

  ${media.tablet`
      display: flex;
      justify-content: space-evenly;
      width: 100%;

    &:before {
      display: none;
    }
  `}

  ${media.mobile`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
  `}
`;

export default SideNav;
