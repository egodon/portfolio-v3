import React from 'react';
import styled from 'styled-components';
import Icon, { icons } from 'components/Icon';
import { fadeIn } from 'style';

const SideNavFooter = () => (
  <Footer>
    <SocialIcons>
      <Icon src={icons.envelope} />
      <Icon src={icons.github} viewBox="0 0 10 10" />
      <Icon src={icons.linkedin} viewBox="0 0 10 10" />
    </SocialIcons>
  </Footer>
);

const Footer = styled.footer`
  margin-top: auto;
  animation: ${fadeIn} 0.2s ease;
`;

const SocialIcons = styled.div`
  padding: 0 var(--side-padding);
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg path {
    cursor: pointer;
    fill: var(--white);
  }

  svg:hover path {
    fill: var(--grey-300);
  }
`;

export default SideNavFooter;
