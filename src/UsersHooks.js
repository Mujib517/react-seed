import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./redux/actions";


const UsersWithHooks = ({ }) => {

    const data = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, []);


    return <div>
        {data.loading && <span>Loading....</span>}
        {data.hasError && <span>Error occured while fetching data</span>}
        {data.users.map(user => <div key={user.login}><h3>{user.login}</h3>
            <img src={user.avatar_url} width="150" height="150" />
        </div>)}
    </div>
}


export default UsersWithHooks;