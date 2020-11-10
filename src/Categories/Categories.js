import React from 'react';
import { MainHeading } from '../shared/Text';
import { Wrapper } from '../shared/Wrapper';
import CategoryList from './CategoryList';
import { getSelectedCountry } from '../redux/selectors';
import { connect } from 'react-redux';
import { SelectedCountryName } from '../shared';

const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

function Categories({ country }) {
  return (
    <Wrapper>
      <MainHeading>
        Top 5 news by categories from <SelectedCountryName country={country} />
      </MainHeading>
      {categories.map((category, index) => (
        <CategoryList category={category} key={index} country={country} />
      ))}
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  const country = getSelectedCountry(state);
  return { country };
};

export default connect(mapStateToProps)(Categories);
