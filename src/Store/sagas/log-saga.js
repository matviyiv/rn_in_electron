import { select, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';

import Constants from '../../constants';

const isDebug = true;// __DEV__

export function* logAllActions(action) {
  const state = yield select();
  console.group ? console.groupCollapsed(`Action Dispatch: ${action.type}`) : console.debug('-------------------');
  console.debug('Action:', action);
  console.debug('New State:', state);
  console.groupEnd && console.groupEnd();
}

export function* logEvent(action) {
  const { data } = action;
  if (data.message) {
    const state = yield select();
    if (state.log.enabled) {
      const _message = _.isString(data.message) ? data.message : JSON.stringify(data.message);
      console.group ? console.groupCollapsed('Internal Log: ') : console.debug('-------------------');
      console.debug('Type:', action.type);
      console.debug('Origin:', data.origin);
      console.debug('Message:', _message);
      console.groupEnd && console.groupEnd();
    }
  }
}

export async function sendException(action) {
  const { data } = action;

  if (data.message && _.isError(data.message)) {
    if (data.origin) {
      data.message.message = `${data.origin} - ${data.message.message}`;
    }
  }
}

export default function* logSaga() {
  if (isDebug) {
    yield takeEvery('*', logAllActions);
    yield takeEvery(
      [Constants.LOG.TYPE.INFO, Constants.LOG.TYPE.WARNING, Constants.LOG.TYPE.EXCEPTION],
      logEvent,
    );
  }
  yield takeEvery(Constants.LOG.TYPE.EXCEPTION, sendException);
}
