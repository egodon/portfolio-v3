import React from 'react';
import styled from 'styled-components';
import Glitch from 'components/Glitch';

const H1 = ({ children, largeMargin }) => (
  <Container largeMargin={largeMargin}>
    <Glitch text={children} eachLetter />
  </Container>
);

const Container = styled.h1`
  font-family: 'anuratiregular', 'Helvitica';
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: var(--fs-xlarge);
  font-weight: 300;
  margin-bottom: ${(p) => (p.largeMargin ? '6rem' : '3.2rem')};
  position: relative;
`;

export default H1;
