import React from 'react';
import styled from 'styled-components';
import { useRouteData } from 'react-static';
import H1 from 'components/H1';
import WorkExperience from 'components/WorkExperience';

export default () => {
  const { experienceData } = useRouteData();

  const { header, companies } = experienceData;

  return (
    <Container>
      <Content>
        <H1 largeMargin>{header}</H1>
        <ExperienceList>
          {companies.map((company, index) => (
            <WorkExperience company={company} key={index} />
          ))}
        </ExperienceList>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  overflow-y: auto;
`;

const Content = styled.div`
  margin-top: 16%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExperienceList = styled.ul``;
