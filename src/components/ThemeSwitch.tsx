import React from 'react';
import styled from 'styled-components';
import { Sun, Moon } from 'react-feather';
import { useThemeContext } from 'css/index';

const ThemeSwitch: React.FC = () => {
  const { inDarkMode, setDarkMode } = useThemeContext();

  function handleClick() {
    setDarkMode(!inDarkMode);
  }

  return (
    <Container>
      <Content>
        <svg
          width="100%"
          viewBox="0 0 57 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-border"
        >
          <path
            d="M1 0.5H49L56.5 8V31M57 31H8.5L1 23.5V0"
            stroke="var(--color-secondary)"
          />
        </svg>

        <Button
          title={`${inDarkMode ? 'Disable' : 'Enable'} Dark Mode`}
          onClick={handleClick}
        >
          <SwitchButton active={!inDarkMode}>
            <Sun />
          </SwitchButton>
          <SwitchButton active={inDarkMode}>
            <Moon />
          </SwitchButton>
        </Button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem var(--side-padding);
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 3;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  .svg-border {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    opacity: 0.7;
  }
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  color: #8e0c3a;
  background-color: transparent;
  border: 0;
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

const SwitchButton = styled(SwitchButtonBase)<{ active: boolean }>`
  svg {
    color: ${(props) =>
      props.active ? props.theme.__color_secondary : 'currentColor'};
    stroke-width: ${({ theme, active }) => (!theme.inDarkMode && active ? 2 : 1)};
  }
`;

export default ThemeSwitch;
