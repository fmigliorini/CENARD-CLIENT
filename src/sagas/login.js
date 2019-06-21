import { all, put, call, takeLatest } from "redux-saga/effects";

import {
  SING_IN_WATCHER,
  SING_IN,
  GET_USER_WATCHER
} from "../constants/actionTypes";

import { login, getUserLogged, logOutAction } from "../actions/login";

import { saveUser, saveToken, getUserStorage } from "../helper/localStorageUser";

export function* loginSagas(payload) {
  console.log('here');
  const res = yield call(login(payload.email, payload.password));

  if (!res) {
    yield put(logOutAction());
  }

  saveToken(res.data.token);
  saveUser(res.data.userId);
  
}

export function* getUser() {
  const userId = getUserStorage();
  if( userId === null ){
     yield put(logOutAction());
  } else {
    const res = yield call(getUserLogged, userId);

    if (res) {
      yield put({ type: SING_IN, payload: res.data });
    } else {
      yield put(logOutAction());
    }
  }
}

export default function* loginSaga() {
  yield all([
    takeLatest(SING_IN_WATCHER, loginSagas),
    takeLatest(GET_USER_WATCHER, getUser)
  ]);
}
