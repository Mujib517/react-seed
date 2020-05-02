import React, { Component } from "react";


class AddUser extends Component {

    constructor() {
        super();

        this.state = {
            error: false,
            user: { login: "", firstname: "", lastname: "" }
        }

        this.handleInput = this.handleInput.bind(this);
        // this.handleLogin = this.handleLogin.bind(this);
        // this.handleFirstname = this.handleFirstname.bind(this);
        // this.handleLastname = this.handleLastname.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    handleInput(e) {
        console.log(e.target.name);
        const oldState = this.state.user;
        const newState = { ...oldState, [e.target.name]: e.target.value };
        this.setState({ user: newState });
    }

    // handleLogin(e) {
    //     this.setState({ login: e.target.value });
    //     console.log(e.target.value);
    // }

    // handleFirstname(e) {
    //     this.setState({ firstname: e.target.value });
    // }

    // handleLastname(e) {
    //     this.setState({ lastname: e.target.value });
    // }

    render() {
        return <>
            <h1>Add User</h1>
            <div>
                <form onSubmit={this.submit}>
                    <div>
                        <input name="login" type="text"
                            placeholder="login" onChange={this.handleInput} />
                    </div>
                    <div>
                        <input name="firstname" type="text"
                            onChange={this.handleInput} placeholder="first name" />
                    </div>
                    <div>
                        <input name="lastname" type="text" onChange={this.handleInput}
                            placeholder="last name" />
                    </div>
                    <div>
                        <input type="submit" value="Save" />
                    </div>

                </form>
            </div>
        </>
    }

}


export default AddUser;