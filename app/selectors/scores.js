import R from 'ramda';
import { createSelector } from 'reselect';

import { getGames } from './raw-selectors';

export const getScores = createSelector(
  [getGames],
  (games) => games.map(game => 
    const home = R.path(['teams', 'home', 'team', 'name'], game);
    const homeScore = R.path(['teams', 'home', 'score'], game);
    const away = R.path(['teams', 'away', 'team', 'name'], game);
    const awayScore = R.path(['teams', 'away', 'score'], game);

    return {
      label: `${home} ${homeScore} - ${away} ${awayScore}`
    };
  })
);
