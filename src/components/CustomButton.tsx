import React from 'react';
import styled from 'styled-components';

type Props = {
  as: string;
  children: React.ReactChildren | React.ReactElement;
};

const CustomButton: React.FC<Props> = ({ children, as }) => {
  return (
    <Container>
      <svg
        width="100%"
        viewBox="0 0 231 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M213.5 0.5H0.5V32L17 48.5H230V17L213.5 0.5Z"
          stroke="var(--color-secondary)"
        />
      </svg>
      {children}
    </Container>
  );
};

const Container = styled.button`
  text-transform: uppercase;
  border: 0;
  background-color: transparent;
  color: ${(props) => props.color || props.theme.__color_secondary};
  padding: 0 2.4rem;
  cursor: pointer;
  transition: all 0.1s;
  font-size: var(--fs-xsmall);
  --height: 4.2rem;
  line-height: var(--height);
  height: var(--height);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  position: relative;

  svg {
    position: absolute;
    left: 0;
  }
`;

export default CustomButton;
