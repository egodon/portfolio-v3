import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { ROUTES } from 'constants/index';
import Icon, { icons } from 'components/Icon';
import GlitchText from 'components/GlitchText';
import { media } from 'style/index';

const navIcon = {
  HOME: icons.home,
  ABOUT: icons.user,
  EXPERIENCE: icons.paper,
  PROJECTS: icons.code,
};

const NavItem = ({ isCurrent, route }) => (
  <Link to={ROUTES[route]}>
    <Container key={route} isCurrent={isCurrent}>
      <Icon src={navIcon[route]} size="2rem" fillColor="currentColor" />
      <GlitchText text={route} />
    </Container>
  </Link>
);

const Container = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: var(--nav-item-height);
  line-height: var(--nav-item-height);
  padding-left: 1.8rem;
  color: ${(p) => (p.isCurrent ? p.theme.__white : p.theme.__grey_300)};
  transition: color 0.2s ease;

  &:hover {
    color: var(--white);
  }

  ${media.mobile`
    padding: 0 1.2rem;
  `}

  svg {
    margin-right: 1.6rem;
  }
`;

export default NavItem;
