// INSPO: https://codesandbox.io/s/react-redux-hook-by-indrek-lasn-utc6h?source=post_page-----5422a7ceae6e----------------------

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./rootReducer";

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
