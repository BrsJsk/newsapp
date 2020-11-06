import React from 'react';
import { MainHeading } from '../shared/Text';
import { Wrapper } from '../shared/Wrapper';
import CategoryList from './CategoryList';

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
        <CategoryList category={category} key={index} />
      ))}
    </Wrapper>
  );
}

export default Categories;
