import React from 'react';
import styled from 'styled-components';
import SideNavFooter from 'components/SideNavFooter';
import GlitchText from 'components/GlitchText';

export default () => (
  <Container>
    <HeaderContainer>
      <H1>
        <GlitchText text="Evan Godon" eachLetter/>
      </H1>
      <H2><GlitchText text="Front-End Web Developer" eachLetter/></H2>
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

const H1 = styled.h1`
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: var(--fs-xlarge);
  font-weight: 300;
  margin-bottom: 1.8rem;
  position: relative;
`;

const H2 = styled.h2`
  margin-bottom: 4.8rem;
  font-weight: 300;
  letter-spacing: 3px;
`;
