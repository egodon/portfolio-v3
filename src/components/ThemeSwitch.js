import React from 'react';
import styled from 'styled-components';
import { Sun, Moon } from 'react-feather';
import { useThemeContext } from 'style';

const ThemeSwitch = () => {
  const { inDarkMode, setDarkMode } = useThemeContext();

  return (
    <Container>
      <Border onClick={() => setDarkMode(!inDarkMode)}>
        <SwitchButton active={!inDarkMode}>
          <Sun />
        </SwitchButton>
        <SwitchButton active={inDarkMode}>
          <Moon />
        </SwitchButton>
      </Border>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem var(--side-padding);
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

const Border = styled.span`
  display: inline-flex;
  align-items: center;
  color: #8e0c3a;
  border: 1px solid currentColor;
`;

const SwitchButtonBase = styled.span`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  cursor: pointer;

  svg {
    width: 1.6rem;
    transition: color 0.15s ease;
  }
`;

const SwitchButton = styled(SwitchButtonBase)`
  svg {
    color: ${(props) => (props.active ? props.theme.__color_secondary : 'currentColor')};
    stroke-width: ${({ theme, active }) => (!theme.inDarkMode && active ? 2 : 1)};
  }
`;

export default ThemeSwitch;
