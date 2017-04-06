import R from 'ramda';

export const getCounterValue = R.path(['counter', 'value']);

export const getGames = R.path(['scores', 'games']);
