import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";

function index(props) {
  return (
    <Switch>
      <Route path="/" component={LoginPage} />
    </Switch>
  );
}

export default index;
