import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid currentColor;
  background-color: transparent;
  color: ${(props) => props.color || props.theme.__color_secondary};
  padding: 1.2rem 2.4rem;
  cursor: pointer;
  transition: all 0.1s;
  font-size: var(--fs-small);
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;

// TODO: add some cool button animation

export default Button;
