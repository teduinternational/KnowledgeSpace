import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { AppState } from "../store";
import { User } from "oidc-client";
import axios from "axios";
import { Dispatch } from "redux";
import CallbackPage from "../pages/CallbackPage";
import userManager from "../helpers/userManager";
import HomePage from "../../modules/dashboard/pages/HomePage";
import AppLayout from "./AppLayout";
import LoginPage from "../pages/LoginPage";

interface RoutesModuleProps {
  user: User;
  isLoadingUser: boolean;
  dispatch: Dispatch;
  location: any;
}
const Routes = (props: RoutesModuleProps) => {
  console.log(props);

  // wait for user to be loaded, and location is known
  if (props.isLoadingUser || !props.location) {
    return <div>Loading...</div>;
  }

  // if location is callback page, return only CallbackPage route to allow signin process
  // IdentityServer 'bug' with hash history: if callback page contains a '#' params are appended with no delimiter
  // eg. /callbacktoken_id=...
  const url = props.location.pathname.substring(0, 9);
  if (url === "/callback") {
    const rest = props.location.pathname.substring(9);
    return <CallbackPage {...props} signInParams={`${url}#${rest}`} />;
  }

  // check if user is signed in
  userManager.getUser().then((user) => {
    if (user && !user.expired) {
      // Set the authorization header for axios
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + user.access_token;
    }
  });

  const isConnected: boolean = !!props.user;

  return (
    <>
      {/* <Nav isConnected={isConnected} path={props.location.pathname} /> */}
      <Switch>
        <Route path="/login" component={LoginPage}></Route>
        <RouteWrapper
          isConnected={isConnected}
          path="/"
          component={HomePage}
          layout={AppLayout}
        />
      </Switch>
    </>
  );
};

function RouteWrapper({
  isConnected,
  component: Component,
  layout: Layout,
  ...rest
}: any) {
  return isConnected ? (
    <Route
      {...rest}
      render={(props: any) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  ) : (
    <Redirect to="/login" />
  );
}

function mapStateToProps(state: AppState) {
  return {
    user: state.oidc.user,
    isLoadingUser: state.oidc.isLoadingUser,
    location: state.router.location,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
