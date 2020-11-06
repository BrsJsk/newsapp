import React from 'react';
import { MainHeading } from '../shared/Text';
import { Wrapper } from '../shared/Wrapper';
import CategorySlider from './CategorySlider';

const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology',
];

function Categories() {
  return (
    <Wrapper>
      <MainHeading>Top 5 news by categories from Great Britain</MainHeading>
      {categories.map((category, index) => (
        <CategorySlider category={category} key={index} />
      ))}
    </Wrapper>
  );
}

export default Categories;
