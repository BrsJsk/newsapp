import { SET_COUNTRY, SET_IS_DISABLED_COUNTRY } from '../actionTypes';
import { Countries } from '../../constants';

const initialState = {
  country: Countries.GREAT_BRITAN,
  isDisabled: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_COUNTRY: {
      const { country } = action.payload;

      return {
        ...state,
        country,
      };
    }
    case SET_IS_DISABLED_COUNTRY: {
      const { isDisabled } = action.payload;
      return {
        ...state,
        isDisabled,
      };
    }
    default:
      return state;
  }
}
