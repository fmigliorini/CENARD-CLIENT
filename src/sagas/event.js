import { all, put, call, takeLatest } from "redux-saga/effects";

import {
  GET_EVENT,
  GET_EVENT_WATCHER,
  GET_EVENTS_BY_USER_WATCHER,
  GET_EVENTS_BY_USER
} from "../constants/actionTypes";
import { getActiveEvents, getEventsByUser } from "../actions/event";

export function* getEventsSagas() {
  const res = yield call(getActiveEvents);
  console.log("getAllEvents", res);
  yield put({ type: GET_EVENT, payload: res.data });
}

export function* getEventsByUserSagas(userId) {
  const res = yield call(getEventsByUser, userId);
  console.log("getAllEvents", res);
  yield put({ type: GET_EVENT, payload: res.data });
}

export default function* eventSaga() {
  yield all([
    takeLatest(GET_EVENT_WATCHER, getEventsSagas),
    takeLatest(GET_EVENTS_BY_USER_WATCHER, getEventsByUserSagas)
  ]);
}
