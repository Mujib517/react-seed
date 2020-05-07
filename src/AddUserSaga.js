import React from "react";
import { useDispatch } from "react-redux";
import { USER_ADD_REQUEST } from "./redux/constants";


const AddUserSaga = ({ }) => {

    const dispatch = useDispatch();

    const onSave = () => {
        dispatch({ type: USER_ADD_REQUEST, payload: { username: 'abc', password: 'akfkadf' } });
    }

    return <>
        <button onClick={onSave}>Add User</button>
    </>
}


export default AddUserSaga;