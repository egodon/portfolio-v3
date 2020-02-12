import React from 'react';
import styled from 'styled-components';
import { fadeOut, logoAnim, clockWise } from 'css/animations.css';
import Logo from './Logo';

const LandingAnimation = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo size={120} className="logo-2" />
      </LogoContainer>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--bg-color);
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  animation: ${fadeOut} 0.3s 4s ease forwards;
`;

const LogoContainer = styled.div`
  position: relative;

  --duration: 3s;
  --timing-function: ease;
  --fill-mode: both;
  --delay-1: 0.3s;
  --delay-2: 0.4s;
  --delay-3: 0.5s;
  --delay-4: 0.6s;
  --delay-5: 0.7s;

  .logo-bar-1,
  .logo-bar-2,
  .logo-bar-3,
  .logo-bar-4 {
    animation-name: ${logoAnim};
    animation-duration: var(--duration);
    animation-timing-function: var(--timing-function);
    animation-fill-mode: vaR(--fill-mode);
  }

  .logo-bar-1 {
    animation-delay: var(--delay-1);
  }

  .logo-bar-2 {
    animation-delay: var(--delay-2);
  }

  .logo-bar-3 {
    animation-delay: var(--delay-3);
  }
  .logo-bar-4 {
    animation-delay: var(--delay-5);
  }

  .logo-curve {
    animation: ${clockWise} var(--duration) var(--delay-4) ease both;
  }
`;

export default LandingAnimation;
