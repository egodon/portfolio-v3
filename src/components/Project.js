import React from 'react';
import styled from 'styled-components';

const Project = ({ project }) => {
  const { projectName, description } = project;

  return (
    <Container>
      <H3>{projectName}</H3>
      <Description>{description}</Description>
    </Container>
  );
};

const Container = styled.li`
  margin-bottom: 4rem;
`;

const H3 = styled.h3`
  margin-bottom: .8rem;
`

const Description = styled.p`
  font-size: var(--fs-medium);
  color: var(--grey-300);
`

export default Project;
