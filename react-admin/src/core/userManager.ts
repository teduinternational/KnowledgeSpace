/* eslint-disable @typescript-eslint/camelcase */
import { createUserManager } from "redux-oidc";

const userManagerConfig = {
  client_id: "react_admin",
  client_secret: "secret",
  redirect_uri: "http://localhost:3000/callback",
  post_logout_redirect_uri: "http://localhost:3000/",
  response_type: "code",
  scope: "openid profile api.knowledgespace",
  authority: "https://localhost:5000",
  silent_redirect_uri: "https://localhost:5000/silentRenew.html",
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true,
};

const userManager = createUserManager(userManagerConfig);

export default userManager;
