import React from 'react';
import styled from 'styled-components';
import PageContainer from 'components/layout/PageContainer';
import H1 from 'components/H1';
import Title from 'components/Title';
import { media } from 'style/variables.css';
import aboutData from 'static/content/about.json';

export default () => {
  const { header, profileImage, paragraph_1, paragraph_2, paragraph_3 } = aboutData;
  
  return (
    <>
      <Title title={header} />
      <PageContainer>
        <H1>{header}</H1>
        <Content>
          <ProfileContainer>
            <ProfileImg
              src={profileImage + '/-/preview/440x440/-/grayscale/'}
              alt="profile"
            />
          </ProfileContainer>
          <AboutText>
            <p>{paragraph_1}</p>
            <br />
            <p>{paragraph_2}</p>
            <br />
            <p>{paragraph_3}</p>
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

const ProfileImg = styled.img`
  max-width: 100%;
`;
