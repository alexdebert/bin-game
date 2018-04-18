/**
 * @overview Timer Actions.
 */

// Constants
import * as actionTypes from '../constants/action-types';
import * as constants from '../constants/constants';

export function createBins() {
  const bins = [
    {
      id: 1,
      color: constants.COLOR_BLUE,
    },
    {
      id: 2,
      color: constants.COLOR_RED,
    },
    {
      id: 3,
      color: constants.COLOR_GREEN,
    },
  ];

  return {
    type: actionTypes.CREATE_BINS,
    payload: bins,
  };
}

function shuffle(bins) {
  return bins.sort(() => Math.random() - 0.4);
}

export function shuffleBins(bins) {
  const shuffledBins = shuffle(bins);
  return {
    type: actionTypes.SHUFFLE_BINS,
    payload: shuffledBins,
  };
}
