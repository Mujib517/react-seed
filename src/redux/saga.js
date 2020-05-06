import { takeLatest, put, call } from "redux-saga/effects";
import {
    USER_FETCH_IN_PROGRESS, USER_FETCH_SUCCESS,
    USER_FETCH_REQUEST, USER_FETCH_FAILED
} from "./constants";
import Axios from "axios";
import 'regenerator-runtime/runtime'


function getUserData() {
    return Axios.get("http://api.github.com/users");
}

// worker saga
function* fetchUsers() {
    try {
        console.log("fetching users");
        put({ type: USER_FETCH_IN_PROGRESS });
        //make an api call
        const res = yield call(getUserData);
        console.log("got res", res);
        put({ type: USER_FETCH_SUCCESS, payload: res.data });
    } catch (e) {
        put({ type: USER_FETCH_FAILED });
    }
}

// watcher saga
function* appSaga() {
    // press: 3 
    takeLatest(USER_FETCH_REQUEST, fetchUsers);
}

export default appSaga;

// React with classes
// React with hooks
// React with redux 
// Unit testing