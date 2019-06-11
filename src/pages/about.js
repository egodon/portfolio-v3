import React from 'react';
import styled from 'styled-components';
import Profile from 'images/profile.svg';

export default () => (
  <Container>
    <ProfileContainer>
      <Profile />
    </ProfileContainer>
    <AboutText>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod maiores similique
        animi excepturi! Natus hic expedita necessitatibus unde, nostrum ad sequi
        cupiditate corrupti, repellat accusamus perferendis sapiente animi aut architecto
        magnam nulla molestiae officia sunt debitis suscipit porro?
      </p>
      <br />
      <p>
        Nihil perferendis officia maiores dignissimos ex. Quia dolorum quis iure. Earum,
        eius.
      </p>
    </AboutText>
  </Container>
);

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const ProfileContainer = styled.div`
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
`;

const AboutText = styled.div`
  max-width: 40rem;
  font-size: var(--fs-medium);
  margin: 0 4rem;
  line-height: 1.2;
`;
