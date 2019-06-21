import { all, put, call, takeLatest } from "redux-saga/effects";

import {
  SING_IN_WATCHER,
  SING_IN,
  GET_USER_WATCHER
} from "../constants/actionTypes";

import { login, getUserLogged, logOutAction } from "../actions/login";

import { saveUser, saveToken } from "../helper/localStorageUser";

export function* loginSagas(payload) {
  const res = yield call(login(payload.username, payload.password));

  if (!res) {
    yield put(logOutAction());
  }

  saveToken(res.data.token);
  saveUser(res.data.userId);
  yield getUser({ userId: getUser() });

}

export function* getUser(payload) {
  const res = yield call(getUserLogged(payload.userId));
  if (res) {
    yield put({ type: SING_IN, payload: res.data });
  }
}

export default function* loginSaga() {
  yield all([
    takeLatest(SING_IN_WATCHER, loginSagas),
    takeLatest(GET_USER_WATCHER, getUser)
  ]);
}
