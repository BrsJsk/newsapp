import React from 'react';
import { Countries } from '../constants';

function SelectedCountryName(props) {
  const { country } = props;
  return <span>{country === Countries.GREAT_BRITAIN ? 'Great Britain' : 'USA'}</span>;
}

export default SelectedCountryName;
