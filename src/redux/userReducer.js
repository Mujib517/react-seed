import { USER_FETCH_IN_PROGRESS, USER_FETCH_FAILED, USER_FETCH_SUCCESS } from "./constants";

const initialState = { loading: false, hasError: false, users: [] };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_FETCH_IN_PROGRESS:
            return { loading: true, hasError: false, users: [] };
        case USER_FETCH_FAILED:
            return { loading: false, hasError: true, users: [] };
        case USER_FETCH_SUCCESS:
            return { loading: false, hasError: false, users: action.payload };

        default:
            return state;

    }
}

export default userReducer;
