/**
 * @overview Authentication reducer.
 */

// Constants
import * as actionTypes from '../constants/action-types';

const initialState = {
  remainingSeconds: 0,
};

export default function timer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.START_TIMER:
      return {
        ...state,
        remainingSeconds: action.payload,
      };
    case actionTypes.COUNT_DOWN:
      return {
        ...state,
        remainingSeconds: action.payload,
      };
    default:
      return state;
  }
}
