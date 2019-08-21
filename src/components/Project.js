import React from 'react';
import styled from 'styled-components';
import tmpImage from 'static/images/linklib.png';
import RightChevronIcon from 'static/icons/chevron-right.svg';
import ButtonGroup from 'components/ButtonGroup';
import Button from 'components/Button';
import GitHubIcon from 'static/icons/github.svg';
import ExternalLinkIcon from 'static/icons/external-link.svg';
import { media } from 'style/variables.css';

const Project = ({ project }) => {
  const { projectName, description, builtWith, githubUrl, websiteUrl, screenshot } = project;

  return (
    <>
      <Container>
        <ProjectImage height="200" src={`/static/images/${screenshot}`} alt={`Screenshot of ${projectName}`} />
        <TextContainer>
          <H3>{projectName}</H3>
          <Description>{description}</Description>
          <BuiltWith>
            {builtWith.map((technology, index) => (
              <Technology key={index}>
                <RightChevronIcon viewBox="0 0 24 24" />
                {technology}
              </Technology>
            ))}
          </BuiltWith>
          <ButtonGroup>
            <Button as="a" href={websiteUrl} target="_blank" color="var(--white)">
              Live Site <ExternalLinkIcon viewBox="0 0 24 24" />
            </Button>
            <Button as="a" href={githubUrl} target="_blank">
              View code <GitHubIcon viewBox="0 0 24 24" />
            </Button>
          </ButtonGroup>
        </TextContainer>
      </Container>
      <Line />
    </>
  );
};

const Line = styled.span`
  max-width: 26rem;
  margin: 8rem auto;
  display: block;
  border-bottom: 1px solid var(--grey-400);

  &:last-of-type {
    opacity: 0;
  }
`;

const Container = styled.li`
  display: flex;

  ${media.tablet`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 35rem;
  /* border: 1px solid var(--color-secondary-dark); */
  padding: 2px;

  ${media.tablet`
    margin-bottom: 1.8rem;
  `}
`;

const TextContainer = styled.div`
  margin-left: 3.6rem;
  max-width: 45rem;
  display: flex;
  flex-direction: column;

  ${media.tablet`
    margin-left: 0;
  `}
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
  color: var(--grey-300);
  margin-bottom: 1.2rem;

  svg {
    stroke-width: 1;
    color: var(--color-secondary);
    width: 1.8rem;
  }
`;

const H3 = styled.h3`
  margin-bottom: 0.8rem;
  color: var(--grey-200);
`;

const Description = styled.p`
  font-size: var(--fs-medium);
  color: var(--grey-300);
`;

export default Project;
