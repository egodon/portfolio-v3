import React from 'react';
import styled from 'styled-components';
import PageContainer from 'components/layout/PageContainer';
import SideNavFooter from 'components/SideNavFooter';
import H1 from 'components/H1';

export default () => (
  <PageContainer>
    <HeaderContainer>
      <H1>Evan Godon</H1>
      <H2>Front End Web Developer</H2>
      <SideNavFooter />
    </HeaderContainer>
  </PageContainer>
);


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.h2`
  margin-bottom: 4.8rem;
  font-weight: 300;
  letter-spacing: 3px;
`;
