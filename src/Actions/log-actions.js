import _ from 'lodash';
import Constants from '../constants';

export function enable(enabled) {
  return {
    type: Constants.LOG.ENABLE,
    data: { enabled },
  };
}

export function logInfo(info, origin, time) {
  return {
    type: Constants.LOG.TYPE.INFO,
    data: {
      message: info,
      origin,
      time: time || new Date().getTime(),
    },
  };
}

export function logWarning(warning, origin, time) {
  return {
    type: Constants.LOG.TYPE.WARNING,
    data: {
      message: warning,
      origin,
      time: time || new Date().getTime(),
    },
  };
}

export function logException(exception, origin, time) {
  /**
   * The reason why we are converting string-errors into Error instances
   * here in the action, is because this will give us a proper stack-trace.
   * If we instead did this in the saga, we would not be able to see where
   * the Error came from, due to the async nature of sagas.
   */
  let _exception = exception;
  if (_.isString(_exception)) {
    _exception = new Error(_exception);
  }
  return {
    type: Constants.LOG.TYPE.EXCEPTION,
    data: {
      message: _exception,
      origin,
      time: time || new Date().getTime(),
    },
  };
}

export function clear() {
  return {
    type: Constants.LOG.CLEAR,
  };
}
