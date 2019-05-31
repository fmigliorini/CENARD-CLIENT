import { all, put, takeLastest } from "redux-saga/effects";

import {
    LOGIN_SUBMIT,
    LOGIN_SUBMIT_WATCHER
} from '../constants/actionTypes';

export function* login() {
    console.log("SAGA: login");
    // const res = yield axios.get()....
    // yield put({type: LOGIN_SUBMIT, payload: data.res}); // dispatch example from saga
    console.log("LOGIN FROM SAGAS");
    yield put({type: LOGIN_SUBMIT, payload: 'iamatokenfortestindev'});
}

export default function* loginSaga() {
    yield all([takeLastest(LOGIN_SUBMIT_WATCHER, login)]);
}