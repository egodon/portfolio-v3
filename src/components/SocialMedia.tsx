import React, { useState } from 'react';
import styled from 'styled-components';
import Glitch from 'components/Glitch';
import CustomButton from 'components/CustomButton';
import { fadeIn } from 'css/animations.css';
import { media } from 'css/index';
import CodesandboxIcon from 'static/icons/codesandbox.svg';
import GitHubIcon from 'static/icons/github.svg';
import LinkedinIcon from 'static/icons/linkedin.svg';

const socialLinks = [
  {
    id: 'CodeSandbox',
    icon: CodesandboxIcon,
    url: 'https://codesandbox.io/u/egodon',
  },
  {
    id: 'GitHub',
    icon: GitHubIcon,
    url: 'https://github.com/egodon',
  },
  {
    id: 'Linkedin',
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/egodon/',
  },
];

type Props = {
  inside: 'sidenav' | 'main';
  displayOnMobile?: boolean;
};

const SocialMedia: React.FC<Props> = ({ inside, displayOnMobile }) => {
  const [iconHovered, setIconHovered] = useState(null);

  const inSidenav = inside === 'sidenav';

  return (
    <Footer displayOnMobile={displayOnMobile}>
      <SocialIcons inSidenav={inSidenav}>
        {socialLinks.map((socialLink) => (
          <Glitch Icon={socialLink.icon} key={socialLink.id}>
            {({ GlitchIcon }) => (
              <SocialIcon>
                <IconContainer
                  inSidenav={inSidenav}
                  href={socialLink.url}
                  target="_blank"
                  rel="noopener"
                  onMouseEnter={() => setIconHovered(socialLink.id)}
                  onMouseLeave={() => setIconHovered(null)}
                >
                  <GlitchIcon viewBox="0 0 24 24" />
                </IconContainer>
              </SocialIcon>
            )}
          </Glitch>
        ))}
      </SocialIcons>
      {!inSidenav && (
        <CustomButton href="/contact">
          <ButtonText>
            {iconHovered ? <Glitch text={iconHovered} eachLetter /> : 'Contact Me'}
          </ButtonText>
        </CustomButton>
      )}
    </Footer>
  );
};

const Footer = styled.footer<{ displayOnMobile: boolean }>`
  padding: 0 var(--side-padding);
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.2s ease;

  ${media.tablet`
    display: ${(props) => (props.displayOnMobile ? 'flex' : 'none')};
  `}
`;

const SocialIcons = styled.div<{ inSidenav: boolean }>`
  margin-bottom: 2rem;
  display: grid;
  grid-gap: 1.8rem;
  grid-template-columns: repeat(3, 1fr);

  svg {
    stroke-width: 1;
  }
`;

const IconContainer = styled.a<{ inSidenav?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--grey-300);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};
  border: 1px solid currentColor;
  font-size: var(--fs-xsmall);
  --size: ${(p) => (p.inSidenav ? '4.5rem' : '5.5rem')};
  width: var(--size);
  height: var(--size);
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => (theme.inDarkMode ? theme.__white : theme.__black)};
  }

  svg {
    width: ${(p) => (p.inSidenav ? '1.8rem' : '5.5rem')};
  }

  ${media.tablet`
    --size: 4.2rem;

    svg {
      width: 2.4rem;
    }
  `}
`;

const SocialIcon = styled.span``;

const ButtonText = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default SocialMedia;
