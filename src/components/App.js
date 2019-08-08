import React, { Fragment } from "react";
import Dashboard from "./jokes/Dashboard";
import Header from "./layouts/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Dashboard />
    </Fragment>
  );
}

export default App;
