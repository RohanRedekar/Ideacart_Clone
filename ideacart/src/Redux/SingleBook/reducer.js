import { actionTypes } from "./action";

const initState = {
  loading: false,
  error: "",
  book: {},
};

export const singleBookReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_SINGLE_BOOK_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case actionTypes.GET_SINGLE_BOOK_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        book: payload,
      };
    case actionTypes.GET_SINGLE_BOOK_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
