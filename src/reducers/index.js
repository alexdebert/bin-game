
/**
 * @overview Main reducer.
 */

// Core
import { combineReducers } from 'redux';

// Reducers
import TimerReducer from './timer';
import BinsReducer from './bins';


const rootReducer = combineReducers({
  timer: TimerReducer,
  bins: BinsReducer,
});

export default rootReducer;
