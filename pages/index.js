import React from 'react';
import styled from 'styled-components';
import SocialMedia from 'components/SocialMedia';
import H1 from 'components/H1';
import { media } from 'style/variables.css';
import Title from 'components/Title';

export default () => (
  <>
    <Title title="Evan Godon" withoutName />
    <Container>
      <HeaderContainer>
        <H1>Evan Godon</H1>
        <H2>Front End Web Developer</H2>
        <SocialMedia displayOnMobile/>
      </HeaderContainer>
    </Container>
  </>
);

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
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_500)};
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 5.4px;
  text-align: center;

  ${media.mobile`
    font-size: var(--fs-mobile);
    letter-spacing: 2px;
  `}
`;
