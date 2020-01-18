import React from 'react';
import styled from 'styled-components';
import {
  fadeOut,
  fadeIn,
  translateRight,
  glitch,
  animStrokeDashoffset,
} from 'css/animations.css';
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
  color: red;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  animation: ${fadeOut} 0.3s 1.8s ease forwards;
  /* opacity: 0; */
`;

const LogoContainer = styled.div`
  position: relative;

  svg {
    /* position: absolute;
    left: 0; */
  }

  .logo-2 {
    /* left: -2px; */
    /* --logo-grey: var(--color-primary);
    animation: ${glitch} 0.7s infinite linear alternate-reverse; */
  }

  --duration: 0.3s;
  --timing-function: ease-out;
  --fill-mode: backwards;
  --delay-1: 0.3s;
  --delay-2: 0.4s;
  --delay-3: 0.5s;
  --delay-4: 0.6s;
  --delay-5: 0.7s;

  .logo-bar-1 {
    animation: var(--duration) var(--timing-function) var(--delay-1) var(--fill-mode) ${fadeIn},
      var(--duration) var(--timing-function) var(--delay-1) var(--fill-mode) ${translateRight};
  }

  .logo-bar-2 {
    animation: var(--duration) var(--timing-function) var(--delay-2) var(--fill-mode)
        ${fadeIn},
      var(--duration) var(--timing-function) var(--delay-2) var(--fill-mode)
        ${translateRight};
  }

  .logo-bar-3 {
    animation: var(--duration) var(--timing-function) var(--delay-3) var(--fill-mode)
        ${fadeIn},
      var(--duration) var(--timing-function) var(--delay-3) var(--fill-mode)
        ${translateRight};
  }

  .logo-curve {
    animation: ${animStrokeDashoffset} .4s ease var(--delay-4) backwards;
  }

  .logo-bar-4 {
    animation: var(--duration) var(--timing-function) var(--delay-5) var(--fill-mode)
        ${fadeIn},
      var(--duration) var(--timing-function) var(--delay-5) var(--fill-mode)
        ${translateRight};
  }
`;

export default LandingAnimation;
