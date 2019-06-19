import { all } from "redux-saga/effects";
import eventSaga from "./event.js";
import login from "./login";

export default function* rootSaga() {
  yield all([eventSaga(), login()]);
}
