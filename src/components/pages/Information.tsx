import React from 'react';
import Header from '../common/Header';
import InformationContainer from '../information-components/InformationContainer';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100vw;
`;

function Information() {
  return (
    <Container>
      <Header />
      <InformationContainer />
    </Container>
  );
}

export default Information;
