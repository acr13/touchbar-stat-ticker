import { createSelector } from 'reselect';

import { getGames } from './raw-selectors';

export const getScores = createSelector(
  [getGames],
  (games) => games
);
