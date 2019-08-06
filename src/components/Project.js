import React from 'react';
import styled from 'styled-components';
import tmpImage from 'static/images/linklib.png';
import RightChevronIcon from 'static/icons/chevron-right.svg';
import ButtonGroup from 'components/ButtonGroup';
import Button from 'components/Button';
import GitHubIcon from 'static/icons/github.svg';
import ExternalLinkIcon from 'static/icons/external-link.svg';

const Project = ({ project }) => {
  const { projectName, description, builtWith } = project;

  return (
    <Container>
      <img width="350" height="200" src={tmpImage} alt={`Screenshot of ${projectName}`} />
      <TextContainer>
        <H3>{projectName}</H3>
        <Description>{description}</Description>
        <BuiltWith>
          {builtWith.map((technology) => (
            <Technology>
              <RightChevronIcon />
              {technology}
            </Technology>
          ))}
        </BuiltWith>
        <ButtonGroup>
          <Button as="a">
            View code <GitHubIcon />
          </Button>
          <Button as="a" color="var(--white)">
            Live Site <ExternalLinkIcon />
          </Button>
        </ButtonGroup>
      </TextContainer>
    </Container>
  );
};

const Container = styled.li`
  margin-bottom: 6rem;
  display: flex;
`;

const TextContainer = styled.div`
  margin-left: 3.6rem;
  max-width: 45rem;
  display: flex;
  flex-direction: column;
`;

const BuiltWith = styled.ul`
  font-size: var(--fs-small);
  display: flex;
  flex-wrap: wrap;
  margin: 1.2rem 0;
  position: relative;
  right: 0.5rem;
  margin-bottom: auto;
`;

const Technology = styled.li`
  display: flex;
  align-items: center;
  color: var(--grey-200);

  svg {
    stroke-width: 1;
    color: var(--color-primary);
    width: 1.8rem;
  }
`;

const H3 = styled.h3`
  margin-bottom: 0.8rem;
`;

const Description = styled.p`
  font-size: var(--fs-medium);
  color: var(--grey-200);
`;

export default Project;
