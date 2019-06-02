import { combineReducers } from "redux";

import todos from "./todos";
import repositories from "./repositories";

export default combineReducers({
  todos,
  repositories
});
