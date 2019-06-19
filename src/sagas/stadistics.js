import { all, put, call, takeLatest } from "redux-saga/effects";

import axios from "axios";

import {
  STADISTICS_USER_GET_WATCHER,
  STADISTICS_USER_GET
} from "../constants/actionTypes";

import { getStadisticsByUser } from "../actions/stadistics";

export function* getStadisticsByUser(userId) {
  const res = yield call(getStadisticsByUser);
}

export default function* stadisticSagas() {
  yield all([takeLatest(STADISTICS_USER_GET_WATCHER, getStadisticsByUser)]);
}
