import React from 'react';
import styled from 'styled-components';

const Project = ({ project }) => {
  const { projectName } = project;

  return (
    <Container>
      <h3>{projectName}</h3>
    </Container>
  );
};

const Container = styled.li``;

export default Project;
