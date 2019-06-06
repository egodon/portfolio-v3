import React from 'react';
import styled, { css } from 'styled-components';
import { glitch, glitch_2, glitch_skew } from 'style';

const GlitchText = ({ text, eachLetter }) => {
  console.log({ text });
  if (eachLetter) {
    return (
      <>
        {text.split('').map((letter, index) =>
          letter === ' ' ? (
            <> </>
          ) : (
            <Container key={index} data-text={letter}>
              {letter}
            </Container>
          )
        )}
      </>
    );
  }

  return <Container data-text={text}>{text}</Container>;
};

const glitch_copy = css`
  content: attr(data-text);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.span`
  position: relative;
  display: inline-block;
  cursor: inherit;

  &:hover {
    animation: ${glitch_skew} 0.5s infinite linear alternate-reverse;
  }

  &:hover::before {
    ${glitch_copy}
    left: 1px;
    clip: rect(44px, 450px, 56px, 0);
    animation: ${glitch} 2s infinite linear alternate-reverse;
  }

  &:hover::after {
    ${glitch_copy}
    left: -1px;
    text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
    animation: ${glitch_2} 1s infinite linear alternate-reverse;
  }
`;

export default GlitchText;
