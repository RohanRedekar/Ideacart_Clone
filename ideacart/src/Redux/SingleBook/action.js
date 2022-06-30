import axios from "axios";

export const actionTypes = {
  GET_SINGLE_BOOK_DETAILS_REQUEST: "GET_SINGLE_BOOK_DETAILS_REQUEST",
  GET_SINGLE_BOOK_DETAILS_SUCCESS: "GET_SINGLE_BOOK_DETAILS_SUCCESS",
  GET_SINGLE_BOOK_DETAILS_FAILURE: "GET_SINGLE_BOOK_DETAILS_FAILURE",
};

export const getSingleBookDetailsRequest = () => ({
  type: actionTypes.GET_SINGLE_BOOK_DETAILS_REQUEST,
});

export const getSingleBookDetailsSuccess = (payload) => ({
  type: actionTypes.GET_SINGLE_BOOK_DETAILS_SUCCESS,
  payload,
});

export const getSingleBookDetailsFailure = (payload) => ({
  type: actionTypes.GET_SINGLE_BOOK_DETAILS_FAILURE,
  payload,
});

export const getSingleBook = (id) => async (dispatch) => {
  dispatch(getSingleBookDetailsRequest());
  return axios({
    url: `https://www.googleapis.com/books/v1/volumes/${id}?key=AIzaSyCe48EJU9pjpgQqCZcTdhJCHJJWWEI1p0E`,
  })
    .then((res) => dispatch(getSingleBookDetailsSuccess(res)))
    .catch((err) => dispatch(getSingleBookDetailsFailure(err.data)));
};
