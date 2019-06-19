import React from 'react';
import styled from 'styled-components';
import RightChevronIcon from 'static/icons/chevron-right.svg';

const WorkExperience = ({ workExperience }) => {
  const { company, timePeriod, position, techStack, responsabilities } = workExperience;

  return (
    <Container>
      <TimePeriod>{timePeriod}</TimePeriod>
      <TimeLine>
        <IconContainer>
          {/* <MapPinIcon width="1.6rem" /> */}
          {company[0]}
        </IconContainer>
      </TimeLine>
      <Details>
        <Company>{company}</Company>
        <Position>{position}</Position>
        <TechStack>Tech Stack: {techStack.join(', ')}</TechStack>
        <ResponsibilityList>
          {responsabilities.map((responsibility, index) => (
            <Responsibility key={index}>
              <RightChevronIcon color="var(--color-primary)" width="1.8rem" />
              {responsibility}
            </Responsibility>
          ))}
        </ResponsibilityList>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 8rem 1fr;
  margin-bottom: 6rem;
`;

const TimePeriod = styled.span`
  font-size: var(--fs-small);
  color: var(--grey-300);
`;

const TimeLine = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: block;
    height: 130%;
    width: 0.2rem;
    background-color: var(--color-secondary);
  }
`;

const IconContainer = styled.div`
  font-family: 'anuratiregular', 'Helvitica';
  position: relative;
  top: calc(var(--size) / 3 * -1);
  background-color: var(--color-secondary);
  border-radius: 50%;
  --size: 3.6rem;
  height: var(--size);
  width: var(--size);
  line-height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Company = styled.h3`
  margin-bottom: 0.6rem;
`;

const Position = styled.h4`
  margin-bottom: 1.2rem;
  color: var(--grey-200);
`;

const Details = styled.div``;

const TechStack = styled.div`
  margin-bottom: 3.2rem;
  font-size: var(--fs-medium);
  color: var(--grey-200);
`;

const ResponsibilityList = styled.ul`
  font-size: var(--fs-medium);
`;

const Responsibility = styled.li`
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
`;

export default WorkExperience;
