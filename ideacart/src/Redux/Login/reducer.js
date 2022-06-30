import { actionTypes } from "./action";

const initState = {
  loading: false,
  loggedIn: false,
  loggedInUser: localStorage.getItem("loggedInUser") || "",
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
        localStorage.removeItem("loggedInUser");
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
