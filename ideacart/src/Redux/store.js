import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  // compose,
} from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";
import { signUpReducer } from "./SignUp/reducer";
import { singleBookReducer } from "./SingleBook/reducer";
import { booksReducer } from "./TopReads/reducer";

const rootReducer = combineReducers({
  books: booksReducer,
  singleBook: singleBookReducer,
  signUp: signUpReducer,
  login: loginReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // compose(
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);
