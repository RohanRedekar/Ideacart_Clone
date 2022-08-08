import { actionTypes } from "./action";
import Cookies from "js-cookie";

const initState = {
  loading: false,
  loggedIn: false,
  loggedInUser: "",
  error: "",
};

export const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loggedIn: false,
        loggedInUser: "",
        error: "",
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        loggedInUser: payload,
        error: "",
      };
    case actionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        loggedInUser: "",
        error: payload,
      };
    case actionTypes.USER_LOGOUT_SUCCESS:
      Cookies.remove("accessToken");
      return {
        ...state,
        loading: false,
        loggedIn: false,
        loggedInUser: "",
        error: "",
      };
    default:
      return state;
  }
};
