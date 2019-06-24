import React from 'react';
import styled, { css } from 'styled-components';
import { glitch, glitch_2, glitch_skew, glitch_loop, glitch_loop_2, random } from 'style';

// TODO: pre compute an array of random numbers for the letter animations
const Glitch = ({ text, icon: Icon, eachLetter, children }) => {
  if (eachLetter) {
    return (
      <>
        {text.split('').map((letter, index) => {
          // const timing = random(20);
          return (
            <Container key={index}>
              <LetterContainer data-text={letter} timing={0}>
                {letter !== ' ' ? letter : <Whitespace />}
              </LetterContainer>
            </Container>
          );
        })}
      </>
    );
  }

  const GlitchIcon = Icon
    ? (props) => (
        <IconContainer>
          <Icon {...props} />
          <Icon {...props} />
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

  &:hover svg:first-of-type {
    left: 2px;
    animation: ${glitch} 1s infinite linear alternate-reverse;
    color: var(--color-primary);
  }

  &:hover svg:last-of-type {
    left: -2px;
    animation: ${glitch_2} 0.7s infinite linear alternate-reverse;
    color: var(--color-secondary);
  }
`;

const TextContainer = styled.span`
  position: relative;
  display: ${(p) => (p.eachLetter ? 'inline-block' : 'block')};

  ${Container}:hover & {
    animation: ${glitch_skew} 1s infinite linear alternate-reverse;
  }

  ${Container} &::before,
  ${Container} &::after {
    ${glitch_copy}
    clip: rect(44px, 450px, 56px, 0);
  }

  ${Container} &::before {
    text-shadow: -2px 0 var(--color-secondary);
  }

  ${Container} &::after {
    text-shadow: -2px 0 var(--color-primary), 2px 2px var(--color-secondary);
  }


  ${Container}:hover &::before {
    ${glitch_copy}
    left: 1px;
    animation: ${glitch} 1s infinite linear alternate-reverse;
  }

  ${Container}:hover &::after {
    ${glitch_copy}
    left: -1px;
    animation: ${glitch_2} .7s infinite linear alternate-reverse;
  }
`;

const LetterContainer = styled(TextContainer)`
  display: inline-block;

  ${Container}:hover & {
    animation: unset;
  }

  ${Container} &::before {
    ${glitch_copy}
    text-shadow: -2px 0 var(--color-secondary);
    left: 2px;
    animation: ${glitch_loop} 22s ${(p) => p.timing + 's'} infinite linear alternate;
  }

  ${Container} &::after {
    ${glitch_copy}
    text-shadow: -2px 0 var(--color-primary), 2px 2px var(--color-secondary);
    left: -2px;
    animation: ${glitch_loop_2} 22s ${(p) => p.timing + 's'} infinite linear alternate;
  }
`;

const IconContainer = styled.span`
  position: relative;
  display: flex;
  align-items: center;

  & svg:first-of-type,
  & svg:last-of-type {
    position: absolute;
  }
`;

const Whitespace = styled.span`
  width: 0.4em;
  display: inline-block;
`;

export default Glitch;
