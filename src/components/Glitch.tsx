import React from 'react';
import styled, { css, withTheme } from 'styled-components';
import {
  glitch,
  glitch_2,
  glitch_skew,
  glitch_loop,
  glitch_loop_2,
} from 'css/animations.css';

type Props = {
  text?: string;
  Icon?: string | (() => React.ReactElement);
  eachLetter?: boolean;
  theme: any;
  delay?: number;
  children?: ({ GlitchText, GlitchIcon }) => React.ReactNode;
};

const Glitch: React.FC<Props> = ({
  text,
  Icon,
  eachLetter = false,
  theme,
  delay = 0,
  children,
}) => {
  if (eachLetter) {
    return (
      <>
        {text.split('').map((letter, index) => {
          return (
            <Container key={index}>
              <LetterContainer
                data-text={letter}
                delay={delay}
                key={theme.inDarkMode}
              >
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

  return <Container>{children({ GlitchText, GlitchIcon })}</Container>;
};

// todo: move this to own styled component
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
    color: var(--color-primary);
    animation: ${glitch} 1s infinite linear alternate-reverse;
  }

  &:hover svg:last-of-type {
    left: -2px;
    color: var(--color-secondary);
    animation: ${glitch_2} 0.7s infinite linear alternate-reverse;
  }
`;

const TextContainerBase = styled.span`
  position: relative;

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
    text-shadow: -2px 0 var(--color-secondary), 2px 2px var(--color-primary);
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

const TextContainer = styled(TextContainerBase)<{ eachLetter?: boolean }>`
  display: ${(p) => (p.eachLetter ? 'inline-block' : 'block')};
  position: relative;
  top: 1px;
`;

const LetterContainerBase = styled(TextContainer)`
  display: inline-block;

  ${Container}:hover & {
    animation: unset;
  }

  ${Container} &::before {
    ${glitch_copy}
    text-shadow: -3px 0 var(--color-secondary);
    left: 3px;
  }

  ${Container} &::after {
    ${glitch_copy}
    text-shadow: -3px 0 var(--color-primary), 2px 2px var(--color-secondary);
    left: -3px;
  }
`;

const LetterContainer = styled(LetterContainerBase)<{ delay: number }>`
  ${Container} &::before {
    animation: ${glitch_loop} 22s ${(p) => p.delay + 's'} infinite linear alternate;
  }

  ${Container} &::after {
    animation: ${glitch_loop_2} 22s ${(p) => p.delay + 's'} infinite linear alternate;
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

export default withTheme(Glitch);
