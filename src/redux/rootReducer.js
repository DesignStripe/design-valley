import { combineReducers } from "redux";
import categories from "./reducers/categoriesReducer";
import userSession from "./reducers/userSessionReducer";
import votes from "./reducers/votesReducer";

const rootReducer = combineReducers({
  categories,
  userSession,
  votes
});

export default rootReducer;
