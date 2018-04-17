/**
 * @overview Timer Actions.
 */

// Constants
import * as actionTypes from '../constants/action-types';

export function startTimer() {
  const remainingSeconds = 40;
  return {
    type: actionTypes.START_TIMER,
    payload: remainingSeconds,
  };
}

export function countDown(remainingSeconds) {
  const remainingTime = remainingSeconds - 1;
  return {
    type: actionTypes.COUNT_DOWN,
    payload: remainingTime,
  };
}
