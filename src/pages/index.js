import React from 'react';
import styled from 'styled-components';
import SideNavFooter from 'components/SideNavFooter';
import Glitch from 'components/Glitch';
import H1 from 'components/H1';

export default () => (
  <Container>
    <HeaderContainer>
      <H1>Evan Godon</H1>
      <H2>
        <Glitch text="Front End Web Developer" eachLetter />
      </H2>
      <SideNavFooter />
    </HeaderContainer>
  </Container>
);

const Container = styled.div`
  padding: 5rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.h2`
  margin-bottom: 4.8rem;
  font-weight: 300;
  letter-spacing: 3px;
`;
