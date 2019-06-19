import React from 'react';
import styled from 'styled-components';
import RightChevronIcon from 'static/icons/chevron-right.svg';

const WorkExperience = ({ company }) => {
  const { companyName, timePeriod, position, techStack, responsibilities } = company;

  return (
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
  grid-template-columns: 17rem 8rem 1fr;
  --container-margin-bottom: 6rem;
  margin-bottom: var(--container-margin-bottom);
`;

const TimePeriod = styled.span`
  font-size: var(--fs-small);
  color: var(--grey-300);
  text-align: right;
`;

const TimeLine = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    display: block;
    height: calc(100% + var(--container-margin-bottom));
    width: 0.2rem;
    background-color: var(--color-secondary);
  }

  ${Container}:last-of-type &::before {
    background-image: linear-gradient(to bottom, var(--color-secondary) 20%, rgba(18, 18, 18, 1));
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
