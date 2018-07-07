import _ from 'lodash';
import Constants from '../../constants';
import InitialState from '../initial-state';

export default (currentstate = InitialState.log, action) => {
  const { data } = action;
  switch (action.type) {
    case Constants.LOG.ENABLE:
      return {
        ...currentstate,
        enabled: data.enabled,
      };

    case Constants.LOG.TYPE.INFO:
    case Constants.LOG.TYPE.WARNING:
    case Constants.LOG.TYPE.EXCEPTION: {
      if (!currentstate.enabled) {
        return { ...currentstate };
      }
      const events = _.isArray(currentstate.events) ? currentstate.events : [];
      const message = _.isString(data.message) ? data.message : JSON.stringify(data.message, Object.getOwnPropertyNames(data.message));
      events.push({
        time: data.time,
        type: action.type,
        origin: data.origin,
        message,
      });
      return {
        ...currentstate,
        events,
      };
    }

    case Constants.LOG.CLEAR:
      return {
        ...currentstate,
        events: [],
      };

    case Constants.APP.RESET:
      return InitialState.log;

    default:
      return currentstate;
  }
};
