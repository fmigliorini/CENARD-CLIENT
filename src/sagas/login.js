import { all, put, takeLastest } from "redux-saga/effects";

import {
    SING_IN_WATCHER,
    SING_IN
} from '../constants/actionTypes';

export function* login() {
    console.log("SAGA: login");
    // const res = yield axios.get()....
    // yield put({type: LOGIN_SUBMIT, payload: data.res}); // dispatch example from saga
    console.log("LOGIN FROM SAGAS");
    yield put({type: SING_IN, payload: { token:'sarsa', rol: 'admin'} });
}

export default function* loginSaga() {
    yield all([takeLastest(SING_IN_WATCHER, login)]);
}