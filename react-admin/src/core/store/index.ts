import {combineReducers} from 'redux';
import { User } from 'oidc-client';
import {RouterState, connectRouter} from 'connected-react-router';
import {History} from 'history';
import {reducer as oidcReducer} from 'redux-oidc';

interface OidcState {
  isLoadingUser: boolean;
  user: User;
}

export interface AppState {
  router: RouterState;
  oidc: OidcState;
}

const rootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  oidc: oidcReducer
});

export default rootReducer;