import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,

  FETCH_SCORES_STARTED
} from './consts';

const action = (type, payload = null) => (payload) => ({ type, payload });

export const counterActions = {
  onIncrementClick: action(INCREMENT_COUNTER),
  onDecrementClick: action(DECREMENT_COUNTER),
  onAPIClick: action(FETCH_SCORES_STARTED),
};
