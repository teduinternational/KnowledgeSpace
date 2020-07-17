import React, { FunctionComponent, ReactElement } from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import Routes from "./core/components/Routes";
import { createHashHistory } from "history";
import configureStore from "./core/configureStore";
import { hot } from "react-hot-loader/root";

const history = createHashHistory();
const store = configureStore(history);

const App: FunctionComponent<{}> = (): ReactElement => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default hot(App);
