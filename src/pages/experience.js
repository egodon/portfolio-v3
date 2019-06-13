import React from 'react';
import styled from 'styled-components';
import H1 from 'components/H1';

export default () => {
  return (
    <Container>
      <H1>Experience</H1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
