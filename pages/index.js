import React from 'react';
import styled from 'styled-components';
import SocialMedia from 'components/SocialMedia';
import H1 from 'components/H1';
import { media } from 'style/variables.css';
import Title from 'components/Title';
import withTemplate from 'utils/withThemplate';

export default withTemplate(() => (
  <>
    <Title title="Evan Godon" withoutName />
    <Container>
      <HeaderContainer>
        <H1>Evan Godon</H1>
        <H2>Front End Web Developer</H2>
        <SocialMedia />
      </HeaderContainer>
    </Container>
  </>
));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

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

  ${media.mobile`
    font-size: var(--fs-mobile);
  `}
`;
