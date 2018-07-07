import expect from 'expect.js';

import Constants from '../../constants';
import { logActions } from '../';

describe('logActions', () => {
  describe('enable', () => {
    it('should return an object with new bool value', () => {
      const actual = logActions.enable(true);
      expect(actual.type).to.be.a('string');
      expect(actual.data.enabled).to.be(true);
    });
  });

  describe('logInfo', () => {
    it('should return an object with type "info"', () => {
      const actual = logActions.logInfo('message');
      expect(actual.type).to.be(Constants.LOG.TYPE.INFO);
      expect(actual.data.message).to.be('message');
    });
  });

  describe('logWarning', () => {
    it('should return an object with type "warning"', () => {
      const actual = logActions.logWarning('message');
      expect(actual.type).to.be(Constants.LOG.TYPE.WARNING);
      expect(actual.data.message).to.be('message');
    });
  });

  describe('logException', () => {
    it('should return an object with type "exception"', () => {
      const actual = logActions.logException('message');
      expect(actual.type).to.be(Constants.LOG.TYPE.EXCEPTION);
    });

    it('should convert string-errors to Error object', () => {
      const actual = logActions.logException('message');
      expect(actual.type).to.be(Constants.LOG.TYPE.EXCEPTION);
      expect(actual.data.message).to.be.a(Error);
      expect(actual.data.message.message).to.be('message');
    });

    it('should pass Error thru as is', () => {
      const assertError = new Error('message');
      const actual = logActions.logException(assertError);
      expect(actual.type).to.be(Constants.LOG.TYPE.EXCEPTION);
      expect(actual.data.message).to.be.a(Error);
      expect(actual.data.message).to.be(assertError);
    });

    it('should return status for authMiddleware', () => {
      const actual = logActions.logException({ message: 'message', status: 401 });
      expect(actual.data.message.status).to.be(401);
    });
  });

  describe('clear', () => {
    it('should return an object with type set', () => {
      const actual = logActions.clear();
      expect(actual.type).to.be.a('string');
      expect(actual.data).to.be(undefined);
    });
  });
});
