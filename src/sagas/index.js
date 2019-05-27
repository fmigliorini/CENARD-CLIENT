import { all } from "redux-saga/effects";
import eventSaga from "./event.js";

export default function* rootSaga() {
  yield all([eventSaga()]);
}
