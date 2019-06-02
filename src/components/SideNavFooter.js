import React from 'react';
import styled from 'styled-components';
import Icon, { icons } from 'components/Icon';
import Button from 'components/Button';
import { fadeIn, media } from 'style';

const SideNavFooter = () => (
  <Footer>
    <SocialIcons>
      <Icon src={icons.envelope} />
      <Icon src={icons.github} viewBox="0 0 10 10" />
      <Icon src={icons.linkedin} viewBox="0 0 10 10" />
    </SocialIcons>
    <Button
      href="https://docs.google.com/document/d/1oRRKbLnIwHAstLXkW2SHXKTz04Ce51gDXKIokOoUQo8/edit?usp=sharing"
      target="_blank"
    >
      <span>VIEW CV</span>
      <Icon icon={icons.CHEVERON_RIGHT} className="right-arrow" />
    </Button>
  </Footer>
);

const Footer = styled.footer`
  margin-top: auto;
  padding: 0 var(--side-padding);
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.2s ease;

  ${media.tablet`
    display: none;
  `}
`;

const SocialIcons = styled.div`
  padding: 0 2.6rem;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg path {
    cursor: pointer;
    fill: var(--grey-300);
  }

  svg:hover path {
    fill: var(--white);
  }
`;

export default SideNavFooter;
