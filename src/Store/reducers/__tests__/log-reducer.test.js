import logReducer from '../log-reducer';
import { logActions, appActions } from '../../../Actions';

describe('logReducer', () => {
  it('should return initial state if state is undefined', () => {
    expect(logReducer(undefined, {})).toMatchSnapshot();
  });

  it('should set enabled to true', () => {
    const action = logActions.enable(true);
    expect(logReducer(undefined, action)).toMatchSnapshot();
  });

  it('should set a new object in events if enabled=true', () => {
    const action = logActions.logInfo('my message', 'some origin', 12345);
    const actual = logReducer({ enabled: true }, action);
    expect(actual).toMatchSnapshot();
    expect(actual.events.length).toBe(1);
  });

  it('should not set a new object in events if enabled=false', () => {
    const action = logActions.logInfo('my message', 'some origin', 12345);
    const actual = logReducer(undefined, action);
    expect(actual.events.length).toBe(0);
  });

  it('JSON stringifies non-strings before adding to the events list', () => {
    const error = new Error('My error');
    const action = logActions.logException(error, 'some error function');
    const actual = logReducer({ enabled: true }, action);
    expect(actual.events.length).toBe(1);
    expect(JSON.parse(actual.events[0].message).message).toBe('My error');
  });

  it('should set events to empty object', () => {
    const action = logActions.clear();
    const actual = logReducer(
      {
        enabled: true,
        events: [{ foo: 'bar' }, { foo: 'bar' }, { foo: 'bar' }],
      },
      action,
    );
    expect(actual).toMatchSnapshot();
    expect(actual.events.length).toBe(0);
  });
});
