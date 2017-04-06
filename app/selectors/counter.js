import { createStructuredSelector } from 'reselect';

import {
  getCounterValue
} from './raw-selectors';

const counterConnector = createStructuredSelector({
  counterValue: getCounterValue,
});

export default counterConnector;
