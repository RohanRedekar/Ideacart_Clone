import { actionTypes } from "./action";

const initState = {
  loading: false,
  error: "",
  books: [],
};

export const booksReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_BOOKS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case actionTypes.GET_BOOKS_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        books: payload,
      };
    case actionTypes.GET_BOOKS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
