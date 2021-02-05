import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoData from './NoData';

test('should display no data', () => {
  const { getByText } = render(<NoData />);

  expect(getByText(/no data/i)).toBeTruthy();
});
