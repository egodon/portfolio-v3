import React from 'react';
import styled, { css } from 'styled-components';
import { rainEffect } from 'style/animations.css';

const AnimatedBackground = () => {
  return (
    <Container>
      <Line m={-41} delay={2.5} />
      <Line m={-22} delay={4} />
      <Line m={-13} delay={5.2} />
      <Line m={13} delay={10.8} />
      <Line m={5} delay={8.8} />
      <Line m={17} delay={7.2} />
      <Line m={27} delay={0.2} />
      <Line m={34} delay={11.8} />
      <Line m={45} delay={3.5} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  pointer-events: none;
`;

const darkGradient = css`
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 75%,
    rgba(255, 255, 255, 0.4) 100%
  );
`;

const lightGradient = css`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.2) 75%,
    rgba(0, 0, 0, 0.4) 100%
  );
`;

const Line = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0);
  overflow: hidden;
  margin-left: ${(props) => props.m}%;

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    ${({ theme }) => (theme.inDarkMode ? darkGradient : lightGradient)};

    animation: ${rainEffect} 14s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    animation-delay: ${(props) => props.delay}s;
  }
`;

export default AnimatedBackground;
