import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">
          <HeaderButton>Top News</HeaderButton>
        </Link>
        <Link to="/categories">
          <HeaderButton>Categories</HeaderButton>
        </Link>
        <Link to="/search">
          <HeaderButton>Search</HeaderButton>
        </Link>
      </div>

      <div>
        <HeaderButton active={true}>GB</HeaderButton>
        <HeaderButton>US</HeaderButton>
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  height: 60px;
  background: #fbf6f6;
  justify-content: space-between;
`;

const HeaderButton = styled.button`
  height: 60px;
  min-width: 120px;
  background: ${(props) => (props.active ? '#6161aa' : '#fbf6f6')};
  border: 1px solid #a4a4a9;
`;
