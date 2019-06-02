import React from 'react';

const Logo = ({ size }) => (
  <svg
    width={size}
    height={52}
    viewBox="0 0 89 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M42 0H0V14H42V0Z" fill="#C1C1C1" />
    <path d="M42 19H0V33H42V19Z" fill="#F50057" />
    <path d="M61 41.2696V0L47 0V41.2696H61Z" fill="#C1C1C1" />
    <path d="M89 0H47V14H89V0Z" fill="#C1C1C1" />
    <path d="M89 38H47V51.8431H89V38Z" fill="#C1C1C1" />
    <path d="M42 38H0V52H42V38Z" fill="#C1C1C1" />
    <path d="M89 36H75V40.4006H89V36Z" fill="#C1C1C1" />
    <rect x={75} y={19} width={14} height={14} fill="#F50057" />
  </svg>
);

Logo.defaultProps = {
  size: 70,
};

export default Logo;
