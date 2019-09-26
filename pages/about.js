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
        <H1 largeMargin>{header}</H1>
        <Content>
          <ProfileContainer>
            <ProfileImg
              src={profileImage + '/-/preview/460x460/-/grayscale/'}
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
  --size: 16rem;
  min-width: var(--size);
  min-height: var(--size);
  width: var(--size);
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const AboutText = styled.div`
  max-width: 45rem;
  font-size: var(--fs-medium);
  margin: 0 4rem;
  color: ${({ theme }) => (theme.inDarkMode ? theme.__white : theme.__grey_500)};
  letter-spacing: 1.2px;

  ${media.tablet`
      margin: 4rem 0;
  `};
`;

const ProfileImg = styled.img`
  max-width: 100%;
`;
