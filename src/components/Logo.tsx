import React from 'react';
import styled from 'styled-components';

const Logo: React.FC<{ size?: number | string }> = ({ size }) => (
  <SVG
    width={size}
    height={66}
    viewBox="0 0 139 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 12H46.3187L65.3187 0H19L0 12Z" fill="var(--logo-grey)" />
    <path d="M0 39H46.0927L65 27H18.9073L0 39Z" fill="var(--color-secondary)" />
    <path d="M0 66H46.0927L65 54H18.9073L0 66Z" fill="var(--logo-grey)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M134.659 13.5467C128.657 5.33448 118.951 0 108 0C89.7746 0 75 14.7746 75 33C75 51.2254 89.7746 66 108 66C118.951 66 128.657 60.6655 134.659 52.4533L124.492 46.0021C120.646 50.8734 114.688 54 108 54C96.402 54 87 44.598 87 33C87 21.402 96.402 12 108 12C114.688 12 120.646 15.1266 124.492 19.9979L134.659 13.5467Z"
      fill="var(--logo-grey)"
    />
    <path d="M137.145 27H101.5V39H118.5L137.145 27Z" fill="var(--color-secondary)" />
  </SVG>
);

Logo.defaultProps = {
  size: 80,
};

const SVG = styled.svg`
  --logo-grey: ${({ theme }) => (theme.inDarkMode ? '#F7FAFC' : '#718096')};
  color: ${({ theme }) => (theme.inDarkMode ? '#F7FAFC' : '#718096')};

  &:hover {
    /* For glitch animation */
    --logo-grey: currentColor;
    --color-secondary: currentColor;
  }
`;

export default Logo;
