import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_SCORES_STARTED,
  FETCH_SCORES_SUCCESS,
  FETCH_SCORES_ERRORED,
} from '../../actions/consts';
import { getScores } from '../../api/scores';

export function* scoreSideEffect(action) {
  try {
    const scores = yield call(getScores);

    yield put({ type: FETCH_SCORES_SUCCESS, payload: scores });
  } catch (e) {
    yield put({ type: FETCH_SCORES_ERRORED, message: e.message });
  }
}

export function* scoreSaga() {
  yield takeLatest(FETCH_SCORES_STARTED, scoreSideEffect);
}

// On app startup, dispatch event to fetch scores
export function* scoreSagaInit() {
  yield put({ type: FETCH_SCORES_STARTED });
}
