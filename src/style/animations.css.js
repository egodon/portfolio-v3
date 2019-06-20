import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const steps = 20;

export const random = (max) => Math.floor(Math.random() * max);

/**
 * todo
 * [] Use clip-path instead of clip
 */
const clip = () => `clip: rect(${random(100)}px, 9999px, 0);`;
const transform = () => `transform: skew(${random(100) / 100}deg)`;

export const glitch = keyframes`
  0% {
    clip: rect(5px, 9999px, 54px, 0);
    transform: skew(0.32deg);
  }
  5% {
    clip: rect(82px, 9999px, 49px, 0);
    transform: skew(0.95deg);
  }
  10% {
    clip: rect(32px, 9999px, 71px, 0);
    transform: skew(0.13deg);
  }
  15% {
    clip: rect(91px, 9999px, 100px, 0);
    transform: skew(0.68deg);
  }
  20% {
    clip: rect(94px, 9999px, 52px, 0);
    transform: skew(0.92deg);
  }
  25% {
    clip: rect(27px, 9999px, 20px, 0);
    transform: skew(0.48deg);
  }
  30% {
    clip: rect(49px, 9999px, 42px, 0);
    transform: skew(0.42deg);
  }
  35% {
    clip: rect(37px, 9999px, 17px, 0);
    transform: skew(0.41deg);
  }
  40% {
    clip: rect(68px, 9999px, 18px, 0);
    transform: skew(0.04deg);
  }
  45% {
    clip: rect(5px, 9999px, 86px, 0);
    transform: skew(0.98deg);
  }
  50% {
    clip: rect(15px, 9999px, 48px, 0);
    transform: skew(0.53deg);
  }
  55% {
    clip: rect(2px, 9999px, 31px, 0);
    transform: skew(0.79deg);
  }
  60% {
    clip: rect(19px, 9999px, 18px, 0);
    transform: skew(0.06deg);
  }
  65% {
    clip: rect(28px, 9999px, 85px, 0);
    transform: skew(0.16deg);
  }
  70% {
    clip: rect(7px, 9999px, 74px, 0);
    transform: skew(0.63deg);
  }
  75% {
    clip: rect(13px, 9999px, 6px, 0);
    transform: skew(0.5deg);
  }
  80% {
    clip: rect(25px, 9999px, 20px, 0);
    transform: skew(0.36deg);
  }
  85% {
    clip: rect(49px, 9999px, 7px, 0);
    transform: skew(0.76deg);
  }
  90% {
    clip: rect(55px, 9999px, 9px, 0);
    transform: skew(0.96deg);
  }
  95% {
    clip: rect(67px, 9999px, 73px, 0);
    transform: skew(0.79deg);
  }
  100% {
    clip: rect(29px, 9999px, 5px, 0);
    transform: skew(0.2deg);
  }
`;

export const glitch_2 = keyframes`
   0% {
    clip: rect(51px, 9999px, 25px, 0);
    transform: skew(0.02deg);
  }
  5% {
    clip: rect(11px, 9999px, 45px, 0);
    transform: skew(0.07deg);
  }
  10% {
    clip: rect(56px, 9999px, 24px, 0);
    transform: skew(0.1deg);
  }
  15% {
    clip: rect(37px, 9999px, 28px, 0);
    transform: skew(0.69deg);
  }
  20% {
    clip: rect(74px, 9999px, 32px, 0);
    transform: skew(0.74deg);
  }
  25% {
    clip: rect(69px, 9999px, 35px, 0);
    transform: skew(0.92deg);
  }
  30% {
    clip: rect(97px, 9999px, 1px, 0);
    transform: skew(1deg);
  }
  35% {
    clip: rect(90px, 9999px, 68px, 0);
    transform: skew(0.44deg);
  }
  40% {
    clip: rect(33px, 9999px, 89px, 0);
    transform: skew(0.07deg);
  }
  45% {
    clip: rect(91px, 9999px, 71px, 0);
    transform: skew(0.29deg);
  }
  50% {
    clip: rect(70px, 9999px, 8px, 0);
    transform: skew(0.01deg);
  }
  55% {
    clip: rect(9px, 9999px, 74px, 0);
    transform: skew(1deg);
  }
  60% {
    clip: rect(87px, 9999px, 58px, 0);
    transform: skew(0.49deg);
  }
  65% {
    clip: rect(85px, 9999px, 18px, 0);
    transform: skew(0.97deg);
  }
  70% {
    clip: rect(48px, 9999px, 93px, 0);
    transform: skew(0.31deg);
  }
  75% {
    clip: rect(90px, 9999px, 4px, 0);
    transform: skew(0.36deg);
  }
  80% {
    clip: rect(21px, 9999px, 67px, 0);
    transform: skew(0.85deg);
  }
  85% {
    clip: rect(97px, 9999px, 50px, 0);
    transform: skew(0.97deg);
  }
  90% {
    clip: rect(95px, 9999px, 99px, 0);
    transform: skew(0.16deg);
  }
  95% {
    clip: rect(35px, 9999px, 99px, 0);
    transform: skew(0.35deg);
  }
  100% {
    clip: rect(33px, 9999px, 23px, 0);
    transform: skew(0.43deg);
  }
`;

export const glitch_skew = keyframes`
  0%{
    transform: skew(0deg);
  }
  10% {
    transform: skew(2deg);
  }
  20% {
    transform: skew(5deg);
  }
  30% {
    transform: skew(0deg);
  }
  40% {
    transform: skew(-2deg);
  }
  50% {
    transform: skew(1deg);
  }
  60% {
    transform: skew(5deg);
  }
  70% {
    transform: skew(-2deg);
  }
  80% {
    transform: skew(-4deg);
  }
  90% {
    transform: skew(2deg);
  }
  100% {
    transform: skew(1deg);
  }
`;
