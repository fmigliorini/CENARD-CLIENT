import { all, put, call, takeLatest } from "redux-saga/effects";

import { SING_IN_WATCHER, SING_IN } from "../constants/actionTypes";
import { login } from "../actions/login";

export function* loginSagas(payload) {
  console.log("SAGA: login", payload);
  const res = yield call(login(payload.username, payload.password));
  console.log("LOGIN FROM SAGAS", res);
  if (res) {
    yield put({ type: SING_IN, payload: { token: res.data.token, rol: res.data.rol } });
  }
}

export default function* loginSaga() {
  yield all([takeLatest(SING_IN_WATCHER, loginSagas)]);
}
