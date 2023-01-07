import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";

function index(props) {
  return (
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default index;
