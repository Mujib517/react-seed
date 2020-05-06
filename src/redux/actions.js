import { INC, DEC, USER_FETCH_IN_PROGRESS, USER_FETCH_SUCCESS, USER_FETCH_FAILED } from "./constants";
import Axios from "axios";

const increment = () => {
    return { type: INC };
}

const decrement = () => {
    return { type: DEC };
}

// action creator
const getUsers = () => {
    return function (dispatch) {
        dispatch({ type: USER_FETCH_IN_PROGRESS });
        Axios.get("https://api.github.com/users")
            .then(res => dispatch({ type: USER_FETCH_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: USER_FETCH_FAILED }));
    }
}

export { increment, decrement, getUsers };
