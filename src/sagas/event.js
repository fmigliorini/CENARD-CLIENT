import { all, put, takeLatest } from "redux-saga/effects";

import { GET_EVENT, GET_EVENT_WATCHER } from "../constants/actionTypes";

export function* getEvents() {
  console.log("SAGA: events");
  // const res = yield axios.get()....
  // yield put({type: GET_EVENT, payload: data.res}); // dispatch example from saga
  console.log("GET EVENTS FROM SAGAS");
  yield put({ type: GET_EVENT, payload: [{}] });
}

export default function* eventSaga() {
  yield all([takeLatest(GET_EVENT_WATCHER, getEvents)]);
}
