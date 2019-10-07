import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import { ExternalLink } from 'react-feather';
import PageContainer from 'components/layout/PageContainer';
import WorkExperience from 'components/WorkExperience';
import Title from 'components/Title';
import Button from 'components/Button';
import H1 from 'components/H1';
import experienceData from 'static/content/experience.json';

const Experience: NextPage = () => {
  const { header, companies } = experienceData;

  return (
    <>
      <Title title={header} />
      <PageContainer>
        <Content>
          <H1 largeMargin>{header}</H1>
          <CvButton
            as="a"
            href="https://docs.google.com/document/d/1oRRKbLnIwHAstLXkW2SHXKTz04Ce51gDXKIokOoUQo8/edit?usp=sharing"
            target="_blank"
          >
            <span>
              <span>View CV</span>
              <ExternalLink />
            </span>
          </CvButton>
          <ExperienceList>
            {companies.map((company, index) => (
              <WorkExperience company={company} key={index} />
            ))}
          </ExperienceList>
        </Content>
      </PageContainer>
    </>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CvButton = styled(Button)<{ as: string; href: string; target: string }>`
  display: block;
  margin-bottom: 4.2rem;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 12px;
    position: relative;
    top: -2px;
  }
`;

const ExperienceList = styled.ul``;

export default Experience;
