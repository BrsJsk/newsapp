import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Countries } from '../constants';
import SelectedCountryName from './SelectedCountryName';

test('displays correct country name if Great Britain', () => {
  render(<SelectedCountryName country={Countries.GREAT_BRITAIN} />);
  expect(screen.getByRole('caption')).toHaveTextContent('Great Britain');
});

test('displays correct country name if USA', () => {
  render(<SelectedCountryName country={Countries.USA} />);
  expect(screen.getByRole('caption')).toHaveTextContent('USA');
});
