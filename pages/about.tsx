import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import PageContainer from 'components/layout/PageContainer';
import H1 from 'components/typography/H1';
import Title from 'components/Title';
import { media } from 'css/variables.css';
import aboutData from 'static/content/about.json';
import { useThemeContext } from 'css/index';
import H2 from 'components/typography/H2';

/**
 * @todo: preload profile images
 */
const About: NextPage = () => {
  const { header, profileImage, paragraph_1, paragraph_2, paragraph_3 } = aboutData;
  const { inDarkMode } = useThemeContext();

  return (
    <>
      <Title title={header} />
      <PageContainer>
        <H1 largeMargin>{header}</H1>
        <Content>
          <ProfileContainer>
            <ProfileImg
              src={
                profileImage +
                `/-/preview/460x460/${inDarkMode ? '-/grayscale/' : ''}`
              }
              alt="profile"
            />
          </ProfileContainer>
          <AboutText>
            <H2>Who I Am</H2>
            <Line />
            <P>{paragraph_1}</P>
            <H2>What I Do</H2>
            <Line />
            <P>{paragraph_2}</P>
            <H2>What I Use</H2>
            <Line />
            <P>{paragraph_3}</P>
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
  --size: 18rem;
  min-width: var(--size);
  min-height: var(--size);
  width: var(--size);
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const ProfileImg = styled.img`
  max-width: 100%;
`;

const AboutText = styled.div`
  max-width: 46rem;
  font-size: var(--fs-medium);
  margin-left: 6rem;
  color: ${({ theme }) => (theme.inDarkMode ? theme.__white : theme.__grey_500)};
  letter-spacing: 1px;

  ${media.tablet`
      margin: 4rem 0;
  `};
`;

const P = styled.p`
  margin-bottom: 1.8rem;
  font-size: var(--fs-medium);

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Line = styled.span`
  max-width: 14rem;
  margin: 0.8rem 0;
  display: block;
  border-bottom: 1px solid
    ${({ theme }) => (theme.inDarkMode ? theme.__grey_400 : theme.__grey_200)};
`;

export default About;
