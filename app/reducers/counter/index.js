import R from 'ramda';

import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
} from '../../actions/consts';

const initialState = {
  value: 0,
};

export default (state = initialState, action) => {
  if (action.type === INCREMENT_COUNTER) {
    return R.assoc('value', state.value + 1, state);
  } else if (action.type === DECREMENT_COUNTER) {
    return R.assoc('value', state.value - 1, state);
  }

  return state;
};
