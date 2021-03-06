import React from 'react';
import styled, { css } from 'styled-components';
import { ChevronRight } from 'react-feather';
import externalLink from 'static/icons/external-link.svg';
import { media } from 'css/variables.css';
import Glitch from 'components/Glitch';

type Props = {
  company: {
    companyName: string;
    companyWebsite: string;
    timePeriod: string;
    position: string;
    techStack?: string[];
    responsibilities?: string[];
  };
};

const WorkExperience: React.FC<Props> = ({ company }) => {
  const {
    companyName,
    companyWebsite,
    timePeriod,
    position,
    techStack,
    responsibilities,
  } = company;

  return (
    <>
      <Container>
        <TimePeriod>{timePeriod}</TimePeriod>
        <TimeLine>
          <IconContainer>{companyName[0]}</IconContainer>
        </TimeLine>
        <Details>
          <Glitch text={companyName} Icon={externalLink}>
            {({ GlitchText, GlitchIcon }) => (
              <Company href={companyWebsite} target="_blank" rel="noopener">
                <GlitchText />
                <GlitchIcon viewBox="0 0 24 24" width={15} strokeWidth={2} />
              </Company>
            )}
          </Glitch>
          <Position>{position}</Position>
          {techStack?.length > 0 && (
            <TechStack>Tech Stack: {techStack.join(', ')}</TechStack>
          )}
          {responsibilities?.length > 0 && (
            <ResponsibilityList>
              {responsibilities.map((responsibility, index) => (
                <Responsibility key={index}>
                  <ChevronRight />
                  {responsibility}
                </Responsibility>
              ))}
            </ResponsibilityList>
          )}
        </Details>
      </Container>
      <Line />
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 17.5rem 8rem 1fr;
  --container-margin-bottom: 6rem;
  margin-bottom: var(--container-margin-bottom);

  ${media.mobile`
    display: block;
    margin-bottom: 0;
  `}
`;

const Line = styled.span`
  max-width: 26rem;
  margin: 4rem auto;
  display: block;
  border-bottom: 1px solid var(--grey-400);
  display: none;

  &:last-of-type {
    opacity: 0;
  }

  ${media.mobile`
    display: block;
  `}
`;

const TimePeriod = styled.span`
  font-size: var(--fs-xsmall);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};
  text-align: right;
  display: inline-block;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
`;

const darkLineGradient = css`
  background-image: linear-gradient(
    to bottom,
    var(--color-secondary) 70%,
    rgba(18, 18, 18, 1)
  );
`;

const lightLineGradient = css`
  background-image: linear-gradient(
    to bottom,
    var(--color-secondary) 70%,
    rgba(255, 255, 255, 1)
  );
`;

const TimeLine = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  --icon-container-size: 3.6rem;
  --icon-container-margin-top: calc(var(--icon-container-size) / 3);
  --icon-container-diff: calc(
    var(--icon-container-size) - var(--icon-container-margin-top)
  );
  transition: background-image 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    top: var(--icon-container-diff);
    display: block;
    height: calc(100% + var(--icon-container-diff));
    width: 1px;
    background-color: var(--color-secondary);
  }

  ${Container}:last-of-type &::before {
    ${({ theme }) => (theme.inDarkMode ? darkLineGradient : lightLineGradient)}
  }

  ${media.mobile`
    display: none;
  `}
`;

const IconContainer = styled.div`
  font-family: 'anuratiregular', 'Helvitica';
  color: var(--color-secondary);
  height: var(--icon-container-size);
  width: var(--icon-container-size);
  margin-top: calc(var(--icon-container-margin-top) * -1);
  line-height: var(--icon-container-size);
  border: 1px solid var(--color-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Company = styled.a`
  display: inline-flex;
  align-items: center;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  font-weight: 300;
  color: var(--grey-200);
  font-size: var(--fs-default);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_500)};

  span {
    margin-right: 0.6rem;
  }

  svg {
    opacity: 0;
    stroke-width: 2;
    transition: opacity 0.1s ease;
  }

  &:hover svg {
    opacity: 1;
  }
`;

const Position = styled.h4`
  margin-bottom: 1.2rem;
  color: var(--grey-200);
  font-weight: 300;
  font-size: var(--fs-medium);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_500)};
`;

const Details = styled.div``;

const TechStack = styled.div`
  margin-bottom: 2.4rem;
  font-size: var(--fs-small);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};
`;

const ResponsibilityList = styled.ul`
  font-size: var(--fs-small);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};
`;

const Responsibility = styled.li`
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  position: relative;
  line-height: 1.5;
  max-width: 42rem;

  ${media.mobile`
      align-items: flex-start;
    `}

  svg {
    stroke-width: 1;
    color: var(--color-secondary);
    width: 1.8rem;
    position: absolute;
    left: -2rem;

    ${media.mobile`
      width: 2rem;
      top: -0.4rem;
    `}
  }
`;

export default WorkExperience;
