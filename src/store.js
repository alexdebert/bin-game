/**
 * @overview Storage.
 */

import reduxThunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(reduxThunk)),
  );

  return store;
}

export default configureStore;
