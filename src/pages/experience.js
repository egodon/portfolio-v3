import React from 'react';
import styled from 'styled-components';
import H1 from 'components/H1';
import WorkExperience from 'components/WorkExperience';

export default () => {
  return (
    <Container>
      <Content>
        <H1 largeMargin>Experience</H1>

        <ExperienceList>
          {workExperiences.map((workExperience, index) => (
            <WorkExperience workExperience={workExperience} key={index} />
          ))}
        </ExperienceList>
      </Content>
    </Container>
  );
};

const workExperiences = [
  {
    company: 'Bmad',
    position: 'Front-End Web Developer',
    timePeriod: 'January 2018 - August 2018',
    techStack: [
      'React',
      'Redux',
      'Redux-Saga',
      'React 360',
      'Styled-Components',
      'Jest',
      'Django',
      'Flask',
      'MySQL',
    ],
    responsabilities: [
      'Collaborated with team members using the Scrum framework and sprint planning.',
      'Responsible for the front-end infrastructure of a web and electron application using React.',
      'Developed the UI while implementing the design specifications provided by the UX/UI designer.',
      'Created many reusable React components and helped grow the UI library of the application.',
      'Developed the registration and login pages and built the UI for a virtual reality platform using React 360.',
    ],
  },
  {
    company: 'Bmad',
    position: 'Front-End Web Developer',
    timePeriod: 'January 2018 - August 2018',
    techStack: [
      'React',
      'Redux',
      'Redux-Saga',
      'React 360',
      'Styled-Components',
      'Jest',
      'Django',
      'Flask',
      'MySQL',
    ],
    responsabilities: [
      'Collaborated with team members using the Scrum framework and sprint planning.',
      'Responsible for the front-end infrastructure of a web and electron application using React.',
      'Developed the UI while implementing the design specifications provided by the UX/UI designer.',
      'Created many reusable React components and helped grow the UI library of the application.',
      'Developed the registration and login pages and built the UI for a virtual reality platform using React 360.',
    ],
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  overflow-y: auto;
`;

const Content = styled.div`
  margin-top: 16%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExperienceList = styled.ul``;
