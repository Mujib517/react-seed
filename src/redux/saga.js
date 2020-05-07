import { takeLatest, put, call, delay } from "redux-saga/effects";
import {
    USER_FETCH_IN_PROGRESS, USER_FETCH_SUCCESS,
    USER_FETCH_REQUEST, USER_FETCH_FAILED,
    USER_ADD_FAILED, USER_ADD_REQUEST, USER_ADD_SUCCESS
} from "./constants";
import Axios from "axios";
import 'regenerator-runtime/runtime'

function getUserData() {
    return Axios.get("https://api.github.com/users");
}

function addUser(user) {
    return Axios.post("https://api.github.com/users", user);
}

// listenerr saga
function* fetchUsers() {
    yield put({ type: USER_FETCH_IN_PROGRESS });
    try {
        yield delay(1000);
        const res = yield call(getUserData);
        yield put({ type: USER_FETCH_SUCCESS, payload: res.data });
    } catch (e) {
        yield put({ type: USER_FETCH_FAILED });
    }

}
// worker saga
function* addUserSaga() {
    try {
        yield call(addUser);
        yield put({ type: USER_ADD_SUCCESS });
    } catch (e) {
        yield put({ type: USER_ADD_FAILED });
    }
}

// watcher saga
function* appSaga() {
    yield takeLatest(USER_FETCH_REQUEST, fetchUsers);
    yield takeLatest(USER_ADD_REQUEST, addUserSaga);
}

export default appSaga;