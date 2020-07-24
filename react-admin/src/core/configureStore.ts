import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import createOidcMiddleware from 'redux-oidc';
import {routerMiddleware} from 'connected-react-router';
import {History} from 'history';

import createRootReducer from './store';
import userManager from './userManager';

const configureStore = (history: History) => {
  userManager.events.addSilentRenewError(function(error) {
    console.error('error while renewing the access token', error);
  });

  const oidcMiddleware = createOidcMiddleware(userManager);
  const allReducers = createRootReducer(history);

  const store = createStore(allReducers, applyMiddleware(
    oidcMiddleware,
    thunkMiddleware,
    routerMiddleware(history),
    logger
  ));

  return store;
};

export default configureStore;