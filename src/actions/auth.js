import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_AUTH
} from "./actiontypes";

const loginStart = () => {
  return {
    type: LOGIN_START
  };
};

const loginSuccess = (username) => {
  return {
    type: LOGIN_SUCCESS,
    username: username
  };
};

const loginFailed = (message) => {
  return {
    type: LOGIN_FAILED,
    message: message
  };
};

export const setAuth = (value) => {
  return {
    type: SET_AUTH,
    value: value
  };
};

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(loginStart());
    axios
      .post("testurl.com/login", {
        username: username,
        password: password
      })
      .then((res) => {
        // localStorage.setItem("token", res.data);
        //dispatch(loginSuccess())
      })
      .catch((err) => {
        console.log(err);
        //dispatch(loginFailed());
      });
    setTimeout(() => {
      dispatch(loginSuccess(username));
    }, 800);
  };
};

export const logout = () => {
  console.log("hey");
  localStorage.removeItem("token");
  return {
    type: LOGOUT
  };
};
