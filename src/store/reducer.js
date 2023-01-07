import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_AUTH
} from "../actions/actiontypes";

const initalState = {
  auth: !!localStorage.getItem("token"),
  loading: false,
  error: {
    value: false,
    message: ""
  },
  username: ""
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: true,
        error: {
          value: false,
          message: ""
        },
        username: action.username
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        auth: false,
        error: {
          value: true,
          message: action.message
        },
        username: ""
      };
    case SET_AUTH:
      return {
        ...state,
        auth: action.value
      };
    case LOGOUT:
      return {
        ...state,
        auth: false,
        loading: false,
        error: {
          value: false,
          message: ""
        },
        username: ""
      };
    default:
      return state;
  }
};

export default reducer;
