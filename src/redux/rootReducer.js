import { combineReducers } from "redux";
import categories from "./reducers/categoriesReducer";
import userSession from "./reducers/userSessionReducer";

const rootReducer = combineReducers({
  categories,
  userSession
});

export default rootReducer;
