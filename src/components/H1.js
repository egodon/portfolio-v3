import React from 'react';
import styled from 'styled-components';
import Glitch from 'components/Glitch';

const H1 = ({ children }) => (
  <Container>
    <Glitch text={children} eachLetter/>
  </Container>
);

const Container = styled.h1`
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: var(--fs-xlarge);
  font-weight: 300;
  margin-bottom: 2.4rem;
  position: relative;
`;

export default H1;
