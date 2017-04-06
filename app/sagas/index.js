import  { call, fork } from 'redux-saga/effects';

import { scoreSaga, scoreSagaInit } from './scores/';

function* rootSaga() {
  yield [
    fork(scoreSaga),

    // on app startup
    fork(scoreSagaInit),
  ];
}

export default rootSaga;
