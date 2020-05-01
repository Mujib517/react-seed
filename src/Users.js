import React, { Component } from "react";
import { getUsers } from "./UserService";


class Users extends Component {

    constructor() {
        super();

        this.state = { error: false, users: [] };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.render = this.render.bind(this);
    }

    componentDidMount() {
         getUsers()
            .then(res => {
                this.setState({ users: res.data })
            })
            .catch(e => this.setState({ error: true }));
    }

    render() {
        return <div>
            {this.state.error && <span>Error occured while fetching data</span>}
            {this.state.users.map(user => <h3 key={user.login}>{user.login}</h3>)}
        </div>
    }

}


export default Users;