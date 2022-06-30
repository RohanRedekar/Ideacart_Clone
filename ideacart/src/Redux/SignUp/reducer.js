import { actionTypes } from "./action";

const initState = {
  loading: false,
  signedUp: false,
  error: "",
};

export const signUpReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        signedUp: false,
        error: "",
      };
    case actionTypes.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        signedUp: true,
        error: "",
      };
    case actionTypes.USER_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        signedUp: false,
        error: payload,
      };
    default:
      return state;
  }
};
