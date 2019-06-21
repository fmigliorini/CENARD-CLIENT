import { all, put, call, takeLatest } from "redux-saga/effects";

import {
  SING_IN_WATCHER,
  SING_IN,
  GET_USER_WATCHER
} from "../constants/actionTypes";

import { login, getUserLogged, logOutAction } from "../actions/login";

import {
  saveUser,
  saveToken,
  getUserStorage
} from "../helper/localStorageUser";

export function* loginSagas(payload) {
  console.log("here");
  let res = yield call(login, {
    email: payload.email,
    password: payload.password
  });

  res = {
    data: {
      token: 'tokensarasa',
      idUser: '6',
    }
  };

  if (!res) {
    return yield put(logOutAction());
  }

  saveToken(res.data.token);
  saveUser(res.data.idUser);

  yield getUser();
}

export function* getUser() {
  const userId = getUserStorage();
  if (userId === null) {
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
