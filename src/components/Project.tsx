import React from 'react';
import styled, { css } from 'styled-components';
import LQIPImage from 'components/LQIPImage';
import ButtonGroup from 'components/ButtonGroup';
import Button from 'components/Button';
import { media } from 'style/variables.css';
import { ChevronRight, Globe, GitHub } from 'react-feather';

type Props = {
  project: {
    projectName: string;
    description: string;
    builtWith: string[];
    githubUrl: string;
    websiteUrl: string;
    screenshotUrl: string;
  };
};

const Project: React.FC<Props> = ({ project }) => {
  const {
    projectName,
    description,
    builtWith,
    githubUrl,
    websiteUrl,
    screenshotUrl,
  } = project;

  return (
    <>
      <Container>
        <LQIPImage
          imageId={`${projectName}-screenshot`}
          url={screenshotUrl}
          alt={`Screenshot of ${projectName}`}
        />
        <TextContainer>
          <H3>{projectName}</H3>
          <Description>{description}</Description>
          <BuiltWith>
            {builtWith.map((technology, index) => (
              <Technology key={index}>
                <ChevronRight />
                {technology}
              </Technology>
            ))}
          </BuiltWith>
          <ButtonGroup>
            <LiveSiteButton as="a" href={websiteUrl} target="_blank" rel="noopener">
              Live Site <Globe />
            </LiveSiteButton>
            <GitHubButton as="a" href={githubUrl} target="_blank" rel="noopener">
              View code <GitHub />
            </GitHubButton>
          </ButtonGroup>
        </TextContainer>
      </Container>
      <Line />
    </>
  );
};

const Line = styled.span`
  max-width: 34rem;
  margin: 8rem auto;
  display: block;
  border-bottom: 1px solid
    ${({ theme }) => (theme.inDarkMode ? theme.__grey_400 : theme.__grey_200)};

  &:last-of-type {
    opacity: 0;
  }
`;

const greyShadow = css`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 8px 0px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;
`;

const coloredShadow = css`
  box-shadow: var(--color-secondary) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 3px 3px -2px;
`;

const Container = styled.li`
  display: flex;

  ${media.tablet`
    flex-direction: column;
    align-items: flex-start;
  `};

  img {
    ${({ theme }) => (theme.inDarkMode ? coloredShadow : greyShadow)};
    margin-bottom: 2rem;
  }
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
  margin-bottom: 1.2rem;
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};

  svg {
    stroke-width: 1;
    color: var(--color-secondary);
    width: 1.8rem;
  }
`;

const H3 = styled.h3`
  margin-bottom: 0.8rem;
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_200 : theme.__grey_500)};
`;

const Description = styled.p`
  font-size: var(--fs-medium);
  color: var(--grey-300);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};
`;

type ButtonAsAnchor = {
  href: string;
  target: string;
  rel: string;
};

const LiveSiteButton = styled(Button)<ButtonAsAnchor>`
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_100 : theme.__grey_500)};
`;

const GitHubButton = styled(Button)<ButtonAsAnchor>``;

export default Project;
