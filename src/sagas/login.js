import { all, put, call, takeLatest } from "redux-saga/effects";

import { SING_IN_WATCHER, SING_IN } from "../constants/actionTypes";
import { login, getUserLogged } from "../actions/login";

export function* loginSagas(payload) {
  
  const res = yield call(login(payload.username, payload.password));

  if (res) {
    yield put({ type: SING_IN, payload: { token: res.data.token, rol: res.data.rol } });
  }
}

export function* getUser(payload) {
  const res = yield call(getUserLogged(payload.userId));
  if( res ) {
    yield put({ type: SING_IN, payload: { } });
  }
}

export default function* loginSaga() {
  yield all([takeLatest(SING_IN_WATCHER, loginSagas)]);
}
