import { put, takeEvery } from 'redux-saga/effects';
import { push, goBack as back } from 'react-router-redux';
import { logActions } from '../../Actions/index';
import routeMapping from '../../Config/routeMapping';
import Constants from '../../constants';

const getRouteForComponent = (componentName) => {
  return routeMapping[componentName];
}

function* navigate(action) {
  try {
    const { data } = action;
    const route = getRouteForComponent(data.screenName);
    yield put(push(route));
  } catch (error) {
    yield put(logActions.logException(error, 'navigationSaga > navigate'));
  }
}

function* goBack(action) {
  try {
    yield put(back());
  } catch (error) {
    yield put(logActions.logException(error, 'navigationSaga > goBack'));
  }
}

export default function* navigationSaga() {
  yield takeEvery(Constants.NAVIGATION.NAVIGATE, navigate);
  yield takeEvery(Constants.NAVIGATION.GO_BACK, goBack);
}
