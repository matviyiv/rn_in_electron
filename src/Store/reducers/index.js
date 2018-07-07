import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import log from './log-reducer';

const rootReducer = combineReducers({
  log,
  router: routerReducer,
});

export default rootReducer;
