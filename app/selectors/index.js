import { createStructuredSelector } from 'reselect';

import {
  getCounterValue
} from './raw-selectors';
import { getScores } from './scores';

const appConnector = createStructuredSelector({
  counterValue: getCounterValue,
  scores: getScores,
});

export default appConnector;
