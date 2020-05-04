import React, { useState, useEffect } from "react";
import { getUsers } from "./UserService";


const UsersWithHooks = ({ }) => {
    const [error, setError] = useState(false);
    const [users, setUsers] = useState([]);

    // componentDidmount
    useEffect(() => {
        getUsers()
            .then(res => setUsers(res.data))
            .catch(err => setError(true));
    }, []);

    return <div>
        <h3>Users</h3>
        {error && <span>Error occured while fetching data</span>}
        {users.map(user => <h3 key={user.login}>{user.login}</h3>)}
    </div>
}


export default UsersWithHooks;
