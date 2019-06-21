import { all, put, call, takeLatest } from "redux-saga/effects";

import { GET_EVENT, GET_EVENT_WATCHER } from "../constants/actionTypes";
import { getActiveEvents } from '../actions/event';

export function* getEvents() {
  const res = yield call(getActiveEvents());
  console.log("getAllEvents", res );
  yield put({ type: GET_EVENT, payload: res.data });
}

export default function* eventSaga() {
  yield all([takeLatest(GET_EVENT_WATCHER, getEvents)]);
}
