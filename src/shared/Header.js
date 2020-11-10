import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { getIsCountryDisabled, getSelectedCountry } from '../redux/selectors';
import { connect } from 'react-redux';
import { SetCountry, SetIsDisabledCountry } from '../redux/actions';
import { Countries } from '../constants';
import { device } from '../styles/breakpoints';

function Header({ country, isDisabled, SetCountry, SetIsDisabledCountry }) {
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
        <HeaderButtonLink to="/" active={location.pathname === '/'}>
          Top News
        </HeaderButtonLink>

        <HeaderButtonLink to="/categories" active={location.pathname === '/categories'}>
          Categories
        </HeaderButtonLink>

        <HeaderButtonLink to="/search" active={location.pathname === '/search'}>
          Search
        </HeaderButtonLink>
      </ButtonRow>

      <ButtonRow>
        <HeaderButton
          onClick={() => (!isDisabled ? setActiveCountry(Countries.GREAT_BRITAIN) : null)}
          disabled={isDisabled}
          active={country === Countries.GREAT_BRITAIN}
        >
          GB
        </HeaderButton>
        <HeaderButton
          onClick={() => (!isDisabled ? setActiveCountry(Countries.USA) : null)}
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

const HeaderButtonLink = styled(Link)`
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

const HeaderButton = styled(HeaderButtonLink)`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
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
