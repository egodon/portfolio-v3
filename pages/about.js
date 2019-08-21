import React, { useState } from 'react';
import styled from 'styled-components';
import VectorProfile from 'static/images/profile-vector.svg';
import Profile from 'static/images/profile.jpg';
import PageContainer from 'components/layout/PageContainer';
import H1 from 'components/H1';
import Title from 'components/Title';
import { glitch, glitch_2 } from 'style';
import { media } from 'style/variables.css';
import aboutData from 'static/content/about.json';

export default () => {
  const [profileHovered, setProfileHovered] = useState(false);

  const { header, paragraph_1, paragraph_2 } = aboutData;

  return (
    <>
      <Title title={header} />
      <PageContainer>
        <H1>{header}</H1>
        <Content>
          <ProfileContainer
            onMouseEnter={() => setProfileHovered(true)}
            onMouseLeave={() => setProfileHovered(false)}
          >
            {profileHovered ? (
              <VectorProfileContainer>
                <img src={VectorProfile} alt="glitch" fill="var(--color-secondary)" />
                <img src={VectorProfile} alt="glitch" fill="var(--color-secondary)" />
                <img src={VectorProfile} alt="glitch" fill="var(--color-primary)" />
              </VectorProfileContainer>
            ) : (
              <ProfileImg
                src={Profile}
                alt="profile"
                style={{
                  backgroundSize: 'cover',
                  backgroundImage: `url(${require(`../static/images/profile.jpg`)})`,
                }}
              />
            )}
          </ProfileContainer>
          <AboutText>
            <p>{paragraph_1}</p>
            <br />
            <p>{paragraph_2}</p>
          </AboutText>
        </Content>
      </PageContainer>
    </>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;

  ${media.tablet`
      flex-direction: column;
  `}
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
  max-width: 45rem;
  font-size: var(--fs-medium);
  margin: 0 4rem;
  line-height: 1.4;

  ${media.tablet`
      margin: 4rem 0;
  `}
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
