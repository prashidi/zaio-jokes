import React, { Fragment } from "react";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import store from "../store";

import Dashboard from "./jokes/Dashboard";
import Header from "./layouts/Header";
import Login from "./accounts/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/joke" component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
