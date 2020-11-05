import React from 'react';
import styled from 'styled-components';

function NoData() {
  return <Wrapper>No data</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: calc(100vh - 60px);
  color: #bfb9b9;
  font-size: 24px;
`;

export default NoData;
