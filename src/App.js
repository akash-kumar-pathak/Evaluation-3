import React from "react";
import { connect } from "react-redux";
import Login from "./pages/login";
import Secure from "./pages/secure";
import "antd/dist/antd.css";

const App = (props) => {
  const Routes = props.auth ? Secure : Login;
  return <Routes />;
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
