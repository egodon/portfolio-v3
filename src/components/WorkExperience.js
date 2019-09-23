import React from 'react';
import styled, { css } from 'styled-components';
import RightChevronIcon from 'static/icons/chevron-right.svg';
import { media } from 'style/variables.css';

const WorkExperience = ({ company }) => {
  const { companyName, timePeriod, position, techStack, responsibilities } = company;

  return (
    <>
      <Container>
        <TimePeriod>{timePeriod}</TimePeriod>
        <TimeLine>
          <IconContainer>
            {/* <MapPinIcon width="1.6rem" /> */}
            {companyName[0]}
          </IconContainer>
        </TimeLine>
        <Details>
          <Company>{companyName}</Company>
          <Position>{position}</Position>
          <TechStack>Tech Stack: {techStack.join(', ')}</TechStack>
          <ResponsibilityList>
            {responsibilities.map((responsibility, index) => (
              <Responsibility key={index}>
                <RightChevronIcon viewBox="0 0 24 24" />
                {responsibility}
              </Responsibility>
            ))}
          </ResponsibilityList>
        </Details>
      </Container>
      <Line />
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 17rem 8rem 1fr;
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
  font-size: var(--fs-small);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};
  text-align: right;
  display: inline-block;
  margin-bottom: 1.2rem;
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
  transition: background-image .2s ease;

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

const Company = styled.h3`
  margin-bottom: 0.8rem;
  color: var(--grey-200);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_500)};
`;

const Position = styled.h4`
  margin-bottom: 1.2rem;
  color: var(--grey-200);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_500)};

`;

const Details = styled.div`
`;

const TechStack = styled.div`
  margin-bottom: 3.2rem;
  font-size: var(--fs-medium);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};


`;

const ResponsibilityList = styled.ul`
  font-size: var(--fs-medium);
  color: ${({ theme }) => (theme.inDarkMode ? theme.__grey_300 : theme.__grey_400)};
`;

const Responsibility = styled.li`
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  position: relative;

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
