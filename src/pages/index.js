import React from 'react';
import styled from 'styled-components';
import SideNavFooter from 'components/SideNavFooter';
import H1 from 'components/H1';

export default () => (
  <Container>
    <HeaderContainer>
      <H1>Evan Godon</H1>
      <H2>Front End Web Developer</H2>
      <SideNavFooter />
    </HeaderContainer>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.h2`
  margin-bottom: 6.2rem;
  font-weight: 300;
  color: var(--grey-300);
  text-transform: uppercase;
  font-size: var(--fs-default);
  letter-spacing: 4px;
`;
