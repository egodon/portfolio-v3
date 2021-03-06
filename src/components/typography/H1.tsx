import React from 'react';
import styled from 'styled-components';
import Glitch from 'components/Glitch';
import { media } from 'css/variables.css';

type Props = {
  largeMargin?: boolean;
  children: string;
};

const H1: React.FC<Props> = ({ children, largeMargin }) => (
  <Container largeMargin={largeMargin}>
    <Glitch text={children} eachLetter delay={0.4} />
  </Container>
);

const Container = styled.h1<{ largeMargin?: boolean }>`
  color: ${({ theme }) => (theme.inDarkMode ? theme.__white : theme.__black)};
  font-family: 'anuratiregular', 'Helvitica';
  text-transform: uppercase;
  letter-spacing: 8px;
  margin-right: -8px;
  font-size: var(--fs-xlarge);
  font-weight: 300;
  margin-bottom: ${(p) => (p.largeMargin ? '10rem' : '2.8rem')};
  position: relative;

  ${media.mobile`
    font-size: var(--fs-large);
    margin-bottom: ${(p) => (p.largeMargin ? '6rem' : '2.8rem')};
  `}
`;

export default H1;
