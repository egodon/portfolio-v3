import styled from 'styled-components';

const Button = styled.button`
  background: linear-gradient(to bottom right, hotpink, pink);
  border: 0;
  border-radius: 2px;
  color: ${(props) => props.color};
  padding: 1rem 3.2rem;
  cursor: pointer;
  transition: all 0.1s;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: relative;
    left: 10px;
  }
  svg {
    transform: translateX(6px);
  }

`;

export default Button; 
