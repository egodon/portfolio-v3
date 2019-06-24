import React from 'react';
import { useRouteData } from 'react-static';
import PageContainer from 'components/layout/PageContainer';
import H1 from 'components/H1';
import Project from 'components/Project';

export default () => {
  const { projectsData } = useRouteData();

  const { header, projects } = projectsData;

  console.log({ projects });

  return (
    <PageContainer>
      <H1>{header}</H1>
      <ul>
        {projects.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </ul>
    </PageContainer>
  );
};
