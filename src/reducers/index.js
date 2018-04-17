
/**
 * @overview Main reducer.
 */

// Core
import { combineReducers } from 'redux';

// Reducers
import TimerReducer from './timer';


const rootReducer = combineReducers({
  timer: TimerReducer,
});

export default rootReducer;
