import React from 'react';

const Logo = ({ size }) => (
  <svg
    width="89"
    height="52"
    viewBox="0 0 89 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M42 0H0V14H42V0Z" fill="#C1C1C1" />
    <path d="M61 41.2696V0L47 0V41.2696H61Z" fill="#C1C1C1" />
    <path d="M89 0H47V14H89V0Z" fill="#C1C1C1" />
    <path d="M89 38H47V51.8431H89V38Z" fill="#C1C1C1" />
    <path d="M0 19L14 33H0V19Z" fill="#256BF3" />
    <path d="M14 33L-9.53993e-08 19L14 19L14 33Z" fill="#256BF3" />
    <path d="M28 19L14 33L14 19L28 19Z" fill="#256BF3" />
    <path d="M14 33L28 19L28 33L14 33Z" fill="#256BF3" />
    <path d="M42 33L28 19L42 19L42 33Z" fill="#256BF3" />
    <path d="M28 19L42 33H28L28 19Z" fill="#256BF3" />
    <path d="M89 19L75 33L75 19L89 19Z" fill="hotpink" />
    <path d="M75 33L89 19L89 33L75 33Z" fill="hotpink" />
    <path d="M42 38H0V52H42V38Z" fill="#C1C1C1" />
    <path d="M89 36H75V40.4006H89V36Z" fill="#C1C1C1" />
  </svg>
);

Logo.defaultProps = {
  size: 60,
};

export default Logo;
