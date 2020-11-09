import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { getIsCountryDisabled, getSelectedCountry } from '../redux/selectors';
import { connect } from 'react-redux';
import { SetCountry, SetIsDisabledCountry } from '../redux/actions';
import { Countries } from '../constants';
import { device } from '../styles/breakpoints';

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
      <ButtonRow>
        <HeaderButtonTW to="/" active={location.pathname === '/'}>
          Top News
        </HeaderButtonTW>

        <HeaderButtonTW to="/categories" active={location.pathname === '/categories'}>
          Categories
        </HeaderButtonTW>

        <HeaderButtonTW to="/search" active={location.pathname === '/search'}>
          Search
        </HeaderButtonTW>
      </ButtonRow>

      <ButtonRow>
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
      </ButtonRow>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  background: #fbf6f6;
  justify-content: space-between;

  @media ${device.mobileS} {
    height: auto;
    flex-direction: column;
  }

  @media ${device.tablet} {
    height: 60px;
    flex-direction: row;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const HeaderButtonTW = styled(Link)`
  background: ${(props) => (props.active ? '#6161aa' : '#fbf6f6')};
  color: ${(props) => (props.active ? '#f3f0f0' : '#1d1c1c')};
  display: flex;
  align-items: center;
  min-width: 120px;
  justify-content: center;
  outline: none;
  text-decoration: none;
  font-size: 14px;
  border: 1px solid #a4a4a9;
  height: 60px;
`;

const HeaderButton = styled.button`
  height: 60px;
  min-width: 120px;
  background: ${(props) => (props.active ? '#6161aa' : '#fbf6f6')};
  color: ${(props) => (props.active ? '#f3f0f0' : '#1d1c1c')};
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
