import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools as compose } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/lib/constants';
import createActionBuffer from 'redux-action-buffer';
import reducers from './reducers';
import sagas from './sagas';

export const history = createHistory();

function configureStore(onComplete: ?() => void) {
  const sagaMiddleware = createSagaMiddleware();
  const reactRouterMiddleware = routerMiddleware(history);
  const enhancer = compose(
    autoRehydrate({ log: true }),
    applyMiddleware(
      sagaMiddleware,
      reactRouterMiddleware,
      createActionBuffer(REHYDRATE),
    ),
  );
  const store = createStore(reducers, enhancer);
  sagaMiddleware.run(sagas);

  const persistor = persistStore(store, {}, onComplete)//.purge();
  return { store, persistor };
}

export default configureStore;
