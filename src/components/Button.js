import styled from 'styled-components';

const Button = styled.button`
  text-transform: uppercase;
  border: 1px solid currentColor;
  background-color: transparent;
  color: ${(props) => props.color || props.theme.__color_secondary};
  padding: 0 2.4rem;
  cursor: pointer;
  transition: all 0.1s;
  font-size: var(--fs-xsmall);
  --height: 4.2rem;
  height: var(--height);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    /* background-color: var(--color-secondary); */
  }
`;

export default Button;
