import { all } from 'redux-saga/effects';

import logSaga from './log-saga';
// export logSaga from './log-saga';
import navigationSaga from './navigation-saga';

/*
 * The entry point for all the sagas used in this application.
 */
export default function* rootSaga() {
  yield all([
    logSaga(),
    navigationSaga(),
  ]);
}
