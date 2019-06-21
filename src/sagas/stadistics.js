import { all, put, call, takeLatest } from "redux-saga/effects";

import axios from "axios";

import {
  STADISTICS_USER_GET_WATCHER,
  STADISTICS_USER_GET,
  STADISTICS_TOURNAMENT_GET,
  STADISTICS_TOURNAMENT_GET_WATCHER
} from "../constants/actionTypes";

import {
  getStadisticsByUser,
  getStadisticsTournament
} from "../actions/stadistics";

export function* getStadisticsByUserSagas(userId) {
  const res = yield call(getStadisticsByUser, userId);
  console.log(res);
  yield put({ type: STADISTICS_USER_GET, payload: res.data });
}

export function* getStadisticsTournamentSagas() {
  const res = yield call(getStadisticsTournament);
  console.log(res);
  yield put({ type: STADISTICS_TOURNAMENT_GET, payload: res.data });
}

export default function* stadisticSagas() {
  yield all([
    takeLatest(STADISTICS_USER_GET_WATCHER, getStadisticsByUserSagas),
    takeLatest(STADISTICS_TOURNAMENT_GET_WATCHER, getStadisticsByUserSagas)
  ]);
}
