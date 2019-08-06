import React from 'react';
import { useRouteData } from 'react-static';
import PageContainer from 'components/layout/PageContainer';
import H1 from 'components/H1';
import Project from 'components/Project';
import Title from 'components/Title';

export default () => {
  const { projectsData } = useRouteData();

  const { header, projects } = projectsData;

  console.log({ projects });

  return (
    <>
      <Title title={header} />
      <PageContainer>
        <H1 largeMargin>{header}</H1>
        <ul>
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </ul>
      </PageContainer>
    </>
  );
};
