import React from 'react';
import PageContainer from 'components/layout/PageContainer';
import H1 from 'components/H1';
import Project from 'components/Project';
import Title from 'components/Title';
import projectsData from 'static/content/projects.json';
import withTemplate from 'utils/withThemplate';

export default withTemplate(() => {
  const { header, projects } = projectsData;

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
});
