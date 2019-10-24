import React from 'react';
import { NextPage } from 'next';
import PageContainer from 'components/layout/PageContainer';
import H1 from 'components/typography/H1';
import Project from 'components/Project';
import Title from 'components/Title';
import projectsData from 'static/content/projects.json';

const Projects: NextPage = () => {
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
};

export default Projects;
