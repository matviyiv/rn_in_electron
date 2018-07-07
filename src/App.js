import React from "react";
import { Provider, connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { bindActionCreators } from 'redux';

import { navigationActions } from './Actions';
import Login from './Containers/Login';
import configureStore, { history } from './Store';
import MainScreen from './Containers/MainScreen';

const { store } = configureStore();

function RootComponent(props) {
  if (props.authenticated) {
    props.navigationActions.navigate('MainPage');
    return;
  }

  return <Login history={props.history} />
}
const RootComponentConnected = connect(
  (state) => ({ auth: state.auth }),
  (dispatch) => ({
    navigationActions: bindActionCreators(navigationActions, dispatch),
  }))(RootComponent);

const App = () => (
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="routes-container" >
          {window.location.pathname.includes('index.html') && <Redirect to="/" />}
          <Route exact={true} path="/" component={RootComponentConnected}/>
          <Route path="/main" component={MainScreen} />
        </div>
      </ConnectedRouter>
  </Provider>
);


export default App;
