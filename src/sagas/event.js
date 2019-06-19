import { all, put, call, takeLatest } from "redux-saga/effects";

import { GET_EVENT, GET_EVENT_WATCHER } from "../constants/actionTypes";
import { getAllEvents } from '../actions/event';

export function* getEvents() {
  const res = yield call(getAllEvents());
  console.log("getAllEvents", res );
  yield put({ type: GET_EVENT, payload: res.data });
}

export default function* eventSaga() {
  yield all([takeLatest(GET_EVENT_WATCHER, getEvents)]);
}
