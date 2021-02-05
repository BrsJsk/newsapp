import React from 'react';
import { Countries } from '../constants';

function SelectedCountryName({ country }) {
  return (
    <span role="caption">{country === Countries.GREAT_BRITAIN ? 'Great Britain' : 'USA'}</span>
  );
}

export default SelectedCountryName;
