import axios from "axios";
export const actionTypes = {
  USER_LOGIN_REQUEST: "USER_LOGIN_REQUEST",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAILURE: "USER_LOGIN_FAILURE",
  USER_LOGOUT_SUCCESS: "USER_LOGOUT_SUCCESS",
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
        localStorage.setItem("loggedInUser", res.data.user.name);
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
