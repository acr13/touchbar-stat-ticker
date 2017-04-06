import  { fork } from 'redux-saga/effects';

import { scoreSaga } from './scores/';

function* rootSaga() {
  yield [
    fork(scoreSaga),
  ];
}

export default rootSaga;
