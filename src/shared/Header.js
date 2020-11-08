import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { getIsCountryDisabled, getSelectedCountry } from '../redux/selectors';
import { connect } from 'react-redux';
import { SetCountry, SetIsDisabledCountry } from '../redux/actions';
import { Countries } from '../constants';

function Header(props) {
  const { country, isDisabled, SetCountry, SetIsDisabledCountry } = props;

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/details') {
      SetIsDisabledCountry(true);
    } else {
      SetIsDisabledCountry(false);
    }
  }, [location.pathname, SetIsDisabledCountry]);

  const setActiveCountry = (country) => {
    SetCountry(country);
  };

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
        <HeaderButton
          onClick={() => setActiveCountry(Countries.GREAT_BRITAIN)}
          disabled={isDisabled}
          active={country === Countries.GREAT_BRITAIN}
        >
          GB
        </HeaderButton>
        <HeaderButton
          onClick={() => setActiveCountry(Countries.USA)}
          disabled={isDisabled}
          active={country === Countries.USA}
        >
          US
        </HeaderButton>
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
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid #a4a4a9;
`;

const mapStateToProps = (state) => {
  const country = getSelectedCountry(state);
  const isDisabled = getIsCountryDisabled(state);
  return { country, isDisabled };
};

export default connect(mapStateToProps, {
  SetCountry,
  SetIsDisabledCountry,
})(Header);
