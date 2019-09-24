import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ROUTES } from 'constants/index';
import Glitch from 'components/Glitch';
import { media } from 'style/index';
import HomeIcon from 'static/icons/home.svg';
import UserIcon from 'static/icons/user.svg';
import WorkIcon from 'static/icons/clipboard.svg';
import CodeIcon from 'static/icons/code.svg';

const navIcon = {
  HOME: HomeIcon,
  ABOUT: UserIcon,
  EXPERIENCE: WorkIcon,
  PROJECTS: CodeIcon,
};

const NavItem = ({ isCurrent, route }) => (
  <Link href={ROUTES[route]}>
    <a>
      <Glitch text={route} icon={navIcon[route]}>
        {({ text: GlitchText, icon: GlitchIcon }) => (
          <Container
            key={route}
            isCurrent={isCurrent}
            aria-current={isCurrent ? 'page' : false}
          >
            <GlitchIcon viewBox="0 0 24 24" width="1.8rem" />
            <GlitchText />
          </Container>
        )}
      </Glitch>
    </a>
  </Link>
);

const Container = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: var(--nav-item-height);
  line-height: var(--nav-item-height);
  padding-left: 2.4rem;
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};
  font-size: var(--fs-small);

  &:hover {
    color: ${({ theme }) => (theme.inDarkMode ? theme.__white : theme.__black)};
  }

  &[aria-current='page'] {
    color: ${({ theme }) => (theme.inDarkMode ? theme.__white : theme.__black)};
    background-color: ${({ theme }) => (theme.inDarkMode ? 'none' : theme.__grey_100)};
  }

  svg {
    margin-right: 1.6rem;
  }

  ${media.tablet`
    flex-direction: column;
    justify-content: center;
    padding-left: 0;
    height: var(--mobile-nav-height);
    line-height: 1;

    svg {
      margin-right: 0;
    }
     
    span {
      margin-top: .8rem;
    }
  `}

  ${media.mobile`
    padding: 0 2.4rem;
    font-size: var(--fs-xsmall);
  `}
`;

export default NavItem;
