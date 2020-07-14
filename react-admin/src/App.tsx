import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AppLayout from "./core/components/AppLayout";
import HomePage from "./modules/dashboard/pages/HomePage";

const App = (props: any): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper
          path="/"
          component={HomePage}
          layout={AppLayout}
        />
      </Switch>
    </BrowserRouter>
  );
};
function RouteWrapper({ component: Component, layout: Layout, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={(props: any) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default App;
