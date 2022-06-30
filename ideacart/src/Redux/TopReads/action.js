import axios from "axios";

export const actionTypes = {
  GET_BOOKS_DATA_REQUEST: "GET_BOOKS_DATA_REQUEST",
  GET_BOOKS_DATA_SUCCESS: "GET_BOOKS_DATA_SUCCESS",
  GET_BOOKS_DATA_FAILURE: "GET_BOOKS_DATA_FAILURE",
};

export const getBooksdataRequest = () => ({
  type: actionTypes.GET_BOOKS_DATA_REQUEST,
});

export const getBooksdataSucess = (payload) => ({
  type: actionTypes.GET_BOOKS_DATA_SUCCESS,
  payload,
});

export const getBooksdataFailure = (payload) => ({
  type: actionTypes.GET_BOOKS_DATA_FAILURE,
  payload,
});

export const getBooks = (params) => async (dispatch) => {
  let query;
  params === "" ? (query = "best") : (query = params);
  dispatch(getBooksdataRequest());
  return axios({
    url: `https://www.googleapis.com/books/v1/volumes?q=${query}+intitle`,
    method: "GET",
    params: {
      printType: "books",
      key: "AIzaSyCe48EJU9pjpgQqCZcTdhJCHJJWWEI1p0E",
    },
  })
    .then((res) => dispatch(getBooksdataSucess(res.data.items)))
    .catch((err) => dispatch(getBooksdataFailure(err.data)));
};
