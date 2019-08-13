import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import store from "../store";

import PrivateRoute from "./common/PrivateRoute";
import Dashboard from "./jokes/Dashboard";
import Header from "./layouts/Header";
import Login from "./accounts/Login";
import Joke from "./jokes/Joke";
import { loadUser } from "../actions/auth";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/joke" component={Joke} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
