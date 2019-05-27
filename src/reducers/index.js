import { combineReducers } from "redux";
import rootReducer from "./root";
import eventReducer from "./events";

export default combineReducers({
  root: rootReducer,
  events: eventReducer
});
