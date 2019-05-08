import React from 'react';
import styled from 'styled-components';
import { color } from 'style';
import NavLink, { itemHeight } from 'components/NavLink';

const SideNav = () => {
  return (
    <Container>
      <H1>LOGO</H1>
      <nav>
        <NavList>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/experience">EXPERIENCE</NavLink>
          <NavLink to="/project">PROJECTS</NavLink>
        </NavList>
      </nav>
    </Container>
  );
};

export const side_padding = '3.2rem';

const Container = styled.div`
  background-color: ${color.black};
  height: 100vh;
  padding: 3.2rem 0;
  color: ${color.white};
`;

const H1 = styled.h1`
  padding: ${side_padding};
  margin-bottom: 5rem;
`;

const NavList = styled.ul`
  &:before {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: ${itemHeight};
    background-color: hotpink;
    box-shadow: 1px 0px 15px hotpink;
  }
`;

export default SideNav;
