import { combineReducers } from "redux";
import rootReducer from "./root";
import eventReducer from "./events";
import authReducer from './auth';

export default combineReducers({
  root: rootReducer,
  events: eventReducer,
  auth: authReducer,
});
