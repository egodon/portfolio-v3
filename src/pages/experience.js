import React from 'react';
import styled from 'styled-components';
import { useRouteData } from 'react-static';
import PageContainer from 'components/layout/PageContainer';
import WorkExperience from 'components/WorkExperience';
import Title from 'components/Title';
import H1 from 'components/H1';

export default () => {
  const { experienceData } = useRouteData();

  const { header, companies } = experienceData;

  return (
    <>
      <Title title={header} />
      <PageContainer>
        <Content>
          <H1 largeMargin>{header}</H1>
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

const ExperienceList = styled.ul``;
