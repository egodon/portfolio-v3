import React, { useState } from 'react';
import styled from 'styled-components';
import Glitch from 'components/Glitch';
import Button from 'components/Button';
import { fadeIn, media } from 'style';
import CodesandboxIcon from 'static/icons/codesandbox.svg';
import GitHubIcon from 'static/icons/github.svg';
import LinkedinIcon from 'static/icons/linkedin.svg';
import Link from 'next/link';

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
  displayOnMobile: boolean;
};

const SocialMedia: React.FC<Props> = ({ inside, displayOnMobile }) => {
  const [iconHovered, setIconHovered] = useState(null);

  const inSidenav = inside === 'sidenav';

  return (
    <Footer displayOnMobile={displayOnMobile}>
      <SocialIcons inSidenav={inSidenav}>
        {socialLinks.map((socialLink) => (
          <Glitch icon={socialLink.icon} key={socialLink.id}>
            {({ icon: GlitchIcon }) => (
              <SocialIcon>
                <IconContainer
                  inSidenav={inSidenav}
                  href={socialLink.url}
                  target="_blank"
                  noopener
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
        <Link href="/contact">
          <Button as="a">
            <ButtonText>
              {iconHovered ? <Glitch text={iconHovered} eachLetter /> : 'Contact Me'}
            </ButtonText>
          </Button>
        </Link>
      )}
    </Footer>
  );
};

const Footer = styled.footer`
  padding: 0 var(--side-padding);
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.2s ease;

  ${media.tablet`
    display: ${(props) => (props.displayOnMobile ? 'flex' : 'none')};
  `}
`;

const SocialIcons = styled.div`
  margin-bottom: 1.8rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  svg {
    stroke-width: 1;
  }
`;

const IconContainer = styled.a`
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

const SocialIcon = styled.div``;

const ButtonText = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export default SocialMedia;
