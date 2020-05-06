import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER_FETCH_REQUEST } from "./redux/constants";


const UsersWithSaga = ({ }) => {

    const data = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: USER_FETCH_REQUEST });
    }, []);


    return <div>
        {data.loading && <span>Loading....</span>}
        {data.hasError && <span>Error occured while fetching data</span>}
        {data.users.map(user => <div key={user.login}><h3>{user.login}</h3>
            <img src={user.avatar_url} width="150" height="150" />
        </div>)}
    </div>
}


export default UsersWithSaga;