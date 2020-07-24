import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { AppState } from "../store";
import { User } from "oidc-client";
import axios from "axios";
import { Dispatch } from "redux";
import CallbackPage from "../pages/CallbackPage";
import HomePage from "../../modules/dashboard/pages/HomePage";
import AppLayout from "./AppLayout";
import LoginPage from "../pages/LoginPage";
import userManager from "../userManager";

interface RoutesModuleProps {
  user: User;
  isLoadingUser: boolean;
  dispatch: Dispatch;
  location: any;
}
const Routes = (props: RoutesModuleProps) => {

  if (props.isLoadingUser || !props.location) {
    return <div>Loading...</div>;
  }

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
        <Route path="/callback" component={CallbackPage}></Route>
        <RouteWrapper
          path="/"
          component={HomePage}
          layout={AppLayout}
        />
      </Switch>
    </>
  );
};

function RouteWrapper({
  component: Component,
  layout: Layout,
  ...rest
}: any) {
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
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
