import React from 'react';
import styled, { css } from 'styled-components';
import { glitch, glitch_2, glitch_skew } from 'style';

const Glitch = ({ text, icon: Icon, eachLetter, children }) => {
  if (eachLetter) {
    return (
      <>
        {text.split('').map((letter, index) => (
          <Container key={index}>
            <TextContainer inline data-text={letter}>
              {letter !== ' ' ? letter : <span> </span>}
            </TextContainer>
          </Container>
        ))}
      </>
    );
  }

  const GlitchIcon = Icon
    ? (props) => (
        <IconContainer>
          <Icon {...props} />
        </IconContainer>
      )
    : null;

  const GlitchText = () => <TextContainer data-text={text}>{text}</TextContainer>;

  return <Container>{children({ text: GlitchText, icon: GlitchIcon })}</Container>;
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
  cursor: inherit;
`;

const TextContainer = styled.span`
  position: relative;
  display: ${(p) => (p.inline ? 'inline-block' : 'block')};

  ${Container}:hover & {
    animation: ${glitch_skew} 1s infinite linear alternate-reverse;
  }

  ${Container}:hover &::before {
    ${glitch_copy}
    left: 1px;
    clip: rect(44px, 450px, 56px, 0);
    text-shadow: -2px 0 var(--color-primary);
    animation: ${glitch} 1s infinite linear alternate-reverse;
  }

  ${Container}:hover &::after {
    ${glitch_copy}
    left: -1px;
    clip: rect(44px, 450px, 56px, 0);
    text-shadow: -2px 0 var(--color-primary), 2px 2px var(--color-secondary);
    animation: ${glitch_2} 0.7s infinite linear alternate-reverse;
  }
`;

const IconContainer = styled.span`
  position: relative;
`;

export default Glitch;
