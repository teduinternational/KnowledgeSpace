/* eslint-disable @typescript-eslint/camelcase */
import { createUserManager } from 'redux-oidc';
import { UserManagerSettings } from 'oidc-client';

const userManagerConfig: UserManagerSettings = {
  client_id: 'react_admin',
  redirect_uri: 'http://localhost:3000/callback',
  response_type: 'code',
  scope:"openid profile api.knowledgespace",
  authority: 'https://localhost:5000',
  silent_redirect_uri: 'https://localhost:5000/silentRenew.html',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true
};

const userManager = createUserManager(userManagerConfig);

export default userManager;