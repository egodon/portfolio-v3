import styled from 'styled-components';

const Button = styled.button`
  background: var(--color-secondary);
  border: 0;
  border-radius: 2px;
  color: ${(props) => props.color};
  padding: 1.2rem 2.4rem;
  cursor: pointer;
  transition: all 0.1s;
  font-size: var(--fs-small);
  color: var(--white);

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
