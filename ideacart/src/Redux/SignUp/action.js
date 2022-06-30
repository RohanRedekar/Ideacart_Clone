import axios from "axios";

export const actionTypes = {
  USER_SIGNUP_REQUEST: "USER_SIGNUP_REQUEST",
  USER_SIGNUP_SUCCESS: "USER_SIGNUP_SUCCESS",
  USER_SIGNUP_FAILURE: "USER_SIGNUP_FAILURE",
};

export const userSignupRequest = (payload) => ({
  type: actionTypes.USER_SIGNUP_REQUEST,
  payload,
});

export const userSignupSuccess = (payload) => ({
  type: actionTypes.USER_SIGNUP_SUCCESS,
  payload,
});

export const userSignupFailure = (payload) => ({
  type: actionTypes.USER_SIGNUP_FAILURE,
  payload,
});

export const Signup = (payload) => (dispatch) => {
  dispatch(userSignupRequest());
  return axios({
    url: "https://login-register-333.herokuapp.com/register",
    method: "POST",
    data: payload,
  })
    .then((res) => {
      if (res.statusText === "OK") {
        return dispatch(userSignupSuccess());
      } else {
        return dispatch(
          userSignupFailure("please enter valid email and password")
        );
      }
    })
    .catch((err) => dispatch(userSignupFailure(err.data)));
};
