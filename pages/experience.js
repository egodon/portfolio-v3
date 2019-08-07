import React from 'react';
import styled from 'styled-components';
import PageContainer from 'components/layout/PageContainer';
import WorkExperience from 'components/WorkExperience';
import Title from 'components/Title';
import Button from 'components/Button';
import H1 from 'components/H1';
import ExternalLinkIcon from 'static/icons/external-link.svg';
import experienceData from 'static/content/experience.json';

export default () => {
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
              <ExternalLinkIcon viewBox="0 0 24 24" />
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

const CvButton = styled(Button)`
  display: block;
  margin-bottom: 4.2rem;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    position: relative;
    top: -2px;
    right: -3px;
  }
`;

const ExperienceList = styled.ul``;
