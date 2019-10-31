import { combineReducers } from "redux";
import categories from "./reducers/categoriesReducer";

const rootReducer = combineReducers({
  categories
});

export default rootReducer;
