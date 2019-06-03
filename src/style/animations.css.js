import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const flicker = keyframes`
  50% {
    color: white;
    filter: saturate(200%) hue-rotate(20deg);
  }
`;


