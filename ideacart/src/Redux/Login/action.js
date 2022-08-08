import axios from "axios";
import Cookies from "js-cookie";
export const actionTypes = {
  USER_LOGIN_REQUEST: "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAILURE: "USER_LOGIN_FAILURE",
  USER_LOGOUT_SUCCESS: "USER_LOGOUT_SUCCESS",
  LOGGEDIN_AUTH: "LOGGEDIN_AUTH",
};

export const userLoginRequest = (payload) => ({
  type: actionTypes.USER_LOGIN_REQUEST,
  payload,
});

export const userLoginSuccess = (payload) => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  payload,
});

export const userLoginFailure = (payload) => ({
  type: actionTypes.USER_LOGIN_FAILURE,
  payload,
});

export const Login = (payload) => (dispatch) => {
  dispatch(userLoginRequest());
  return axios({
    url: "https://login-register-333.herokuapp.com/login",
    method: "POST",
    data: payload,
  })
    .then((res) => {
      if (res.statusText === "OK") {
        Cookies.set("accessToken", res.data.token);
        return dispatch(userLoginSuccess(res.data.user.name));
      } else {
        return dispatch(
          userLoginFailure("please enter valid email and password")
        );
      }
    })
    .catch((err) => dispatch(userLoginFailure(err.data)));
};

export const userLogoutSuccess = () => ({
  type: actionTypes.USER_LOGOUT_SUCCESS,
});

export const loggedInAuth = () => ({
  type: actionTypes.LOGGEDIN_AUTH,
});

export const authenticate = (token) => (dispatch) => {
  return axios({
    mathod: "POST",
    url: "https://login-register-333.herokuapp.com/authenticate",
    headers: {
      authentication: `Bearer ${token}`,
    },
  }).then((res) => dispatch(userLoginSuccess(res.data.user.name)));
};
