import Constants from '../constants';

export function navigate(screenName, payload) {
  return {
    type: Constants.NAVIGATION.NAVIGATE,
    data: { screenName, payload },
  };
}

export function goBack(payload) {
  return {
    type: Constants.NAVIGATION.GO_BACK,
    data: { payload },
  };
}
