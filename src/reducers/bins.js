/**
 * @overview Bins reducer.
 */

// Constants
import * as actionTypes from '../constants/action-types';

const initialState = {
  data: [
    {
      id: 0,
      color: '',
    },
  ],
};

export default function bins(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.CREATE_BINS:
      return {
        ...state,
        data: action.payload,
      };
    case actionTypes.SHUFFLE_BINS:
      return {
        ...state,
        data: state.data.splice(0, 3, action.payload),
      };
    default:
      return state;
  }
}
