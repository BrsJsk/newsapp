import React from 'react';
import styled from 'styled-components';
import { NoDataText } from './Text';

function NoData() {
  return (
    <Wrapper>
      <NoDataText>No data</NoDataText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: calc(100vh - 60px);
`;

export default NoData;
