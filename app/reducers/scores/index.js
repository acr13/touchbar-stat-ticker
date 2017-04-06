import R from 'ramda';

import {
  FETCH_SCORES_SUCCESS,
  FETCH_SCORES_ERRORED,
} from '../../actions/consts';

const initialState = {
  games: [],
};

export default (state = initialState, action) => {
  if (action.type === FETCH_SCORES_SUCCESS) {
    var games = action.payload.dates[0].games;
    return R.assoc('games', games, state);
  } else if (action.type === FETCH_SCORES_ERRORED) {
    return R.assoc('games', initialState.games, state);
  }

  return state;
};
