import { takeLatest, put, call, delay } from "redux-saga/effects";
import {
    USER_FETCH_IN_PROGRESS, USER_FETCH_SUCCESS,
    USER_FETCH_REQUEST, USER_FETCH_FAILED
} from "./constants";
import Axios from "axios";
import 'regenerator-runtime/runtime'

function getUserData() {
    return Axios.get("https://api.github.com/users1");
}

function* fetchUsers() {
    yield put({ type: USER_FETCH_IN_PROGRESS });
    delay(1000);
    try {
        const res = yield call(getUserData);
        yield put({ type: USER_FETCH_SUCCESS, payload: res.data });
    } catch (e) {
        yield put({ type: USER_FETCH_FAILED });
    }

}


function* appSaga() {
    yield takeLatest(USER_FETCH_REQUEST, fetchUsers);
}

export default appSaga;