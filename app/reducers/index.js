import { combineReducers } from 'redux';

import counter from './counter/';
import scores from './scores/';

const rootReducer = combineReducers({
  counter,
  scores,
});

export default rootReducer;
