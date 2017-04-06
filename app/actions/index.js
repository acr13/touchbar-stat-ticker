import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,

  FETCH_SCORES_STARTED
} from './consts';

const action = (type, payload = null) => (payload) => ({ type, payload });

const appActions = {
  onIncrementClick: action(INCREMENT_COUNTER),
  onDecrementClick: action(DECREMENT_COUNTER),
  onRefreshScoresClick: action(FETCH_SCORES_STARTED),
};

export default appActions;
