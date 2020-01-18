import React from 'react';
import styled from 'styled-components';

type Props = {
  size?: number;
  className?: string;
};

const Logo: React.FC<Props> = ({ size = 80, className }) => {
  const CX = String(Number(size) * 0.9);
  const CY = '50%';
  const strokeWidth = 22;

  // 115 is from the viewBox
  const RADIUS = 115 / 2 - strokeWidth / 2;
  const strokeDasharray = RADIUS * 2 * Math.PI;
  const strokeDashoffset = strokeDasharray * 0.2;

  return (
    <>
      <SVG
        className={className}
        width={size / 2}
        viewBox="0 0 115 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20.9091H81.2983L114.647 0H33.3487L0 20.9091Z"
          fill="var(--logo-grey)"
          className="logo-bar-1"
        />
        <path
          d="M0 67.9546H80.9016L114.088 47.0455H33.186L0 67.9546Z"
          fill="var(--color-secondary)"
          className="logo-bar-2"
        />
        <path
          d="M0 115H80.9016L114.088 94.0909H33.186L0 115Z"
          fill="var(--logo-grey)"
          className="logo-bar-3"
        />
      </SVG>
      <SVG
        className={className}
        width={size / 2}
        circleOrigin={[CX, CY]}
        viewBox="0 0 115 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeDashoffset={strokeDashoffset}
      >
        <path
          d="M115 46H54V67H83.0926L115 46Z"
          fill="var(--color-secondary)"
          className="logo-bar-4"
        />
        <circle
          cx="50%"
          cy="50%"
          r={RADIUS}
          fill="none"
          strokeWidth={strokeWidth}
          stroke="var(--logo-grey)"
          strokeDasharray={strokeDasharray}
          className="logo-curve"
        ></circle>
      </SVG>
    </>
  );
};

const SVG = styled.svg<{ circleOrigin?: String[] }>`
  margin: 0 0.2rem;
  --logo-grey: ${({ theme }) => (theme.inDarkMode ? '#EDF2F7' : '#718096')};
  color: ${({ theme }) => (theme.inDarkMode ? '#EDF2F7' : '#718096')};

  .logo-curve {
    stroke-dashoffset: ${({ strokeDashoffset }) => strokeDashoffset};
    transform: rotate(33deg);
    transform-origin: 50% 50%;
  }

  &:hover {
    /* For glitch animation */
    --logo-grey: currentColor;
  }

  &:first-of-type:hover {
    color: var(--color-secondary);
  }
`;

export default Logo;
