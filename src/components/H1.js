import React from 'react';
import styled from 'styled-components';
import Glitch from 'components/Glitch';
import { media } from 'style/variables.css';

const H1 = ({ children, largeMargin }) => (
  <Container largeMargin={largeMargin}>
    <Glitch text={children} eachLetter />
  </Container>
);

const Container = styled.h1`
  font-family: 'anuratiregular', 'Helvitica';
  text-transform: uppercase;
  letter-spacing: 8px;
  margin-right: -8px;
  font-size: var(--fs-xlarge);
  font-weight: 300;
  margin-bottom: ${(p) => (p.largeMargin ? '6rem' : '2.8rem')};
  position: relative;

  ${media.mobile`
    font-size: var(--fs-large);
  `}
`;

export default H1;
