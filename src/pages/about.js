import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouteData } from 'react-static';
import VectorProfile from 'static/images/profile-vector.svg';
import Profile from 'static/images/profile.jpg';
import PageContainer from 'components/layout/PageContainer'
import H1 from 'components/H1';
import { glitch, glitch_2 } from 'style';

export default () => {
  const [profileHovered, setProfileHovered] = useState(false);

  const { aboutData } = useRouteData();
  const { header, paragraph_1, paragraph_2 } = aboutData;

  return (
    <PageContainer>
      <H1>{header}</H1>
      <Content>
        <ProfileContainer
          onMouseEnter={() => setProfileHovered(true)}
          onMouseLeave={() => setProfileHovered(false)}
        >
          {profileHovered ? (
            <VectorProfileContainer>
              <VectorProfile fill="var(--color-secondary)" />
              <VectorProfile fill="var(--color-secondary)" />
              <VectorProfile fill="var(--color-primary)" />
            </VectorProfileContainer>
          ) : (
            <ProfileImg src={Profile} alt="profile" />
          )}
        </ProfileContainer>
        <AboutText>
          <p>{paragraph_1}</p>
          <br />
          <p>{paragraph_2}</p>
        </AboutText>
      </Content>
    </PageContainer>
  );
};

const Content = styled.div`
  display: flex;
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 16rem;
  height: 16rem;
  border: 3px solid var(--color-secondary);
  border-radius: 50%;
  overflow: hidden;

  &:hover svg:first-of-type {
    left: 6px;
    top: 8px;
    animation: ${glitch} 1s infinite linear alternate-reverse;
    color: var(--color-primary);
  }

  &:hover svg:last-of-type {
    left: -6px;
    top: 5px;
    animation: ${glitch_2} 0.7s infinite linear alternate-reverse;
    color: var(--color-primary);
  }
`;

const AboutText = styled.div`
  max-width: 40rem;
  font-size: var(--fs-medium);
  margin: 0 4rem;
  line-height: 1.4;
`;

const VectorProfileContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 16rem;
    height: 16rem;
  }
`;

const ProfileImg = styled.img`
  max-width: 100%;
  filter: grayscale(1);
`;
