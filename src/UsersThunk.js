import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "./redux/actions";


class UsersThunk extends Component {

    constructor(props) {
        super(props);


        props.fetch();
    }

    componentDidMount() {
        console.log(this.props, 'init state');
    }

    render() {
        return <div>
            {this.props.data.loading && <span>Loading....</span>}
            {this.props.data.hasError && <span>Error occured while fetching data</span>}
            {this.props.data.users.map(user => <div key={user.login}><h3>{user.login}</h3>
                <img src={user.avatar_url} width="150" height="150" />
            </div>)}
        </div>
    }

}

// props.data = {hasError:false,loading:true,users:[]}

const mapState = function (state) {
    return {
        data: state.user
    }
}

const mapActions = function (dispatch) {
    return {
        fetch: function () {
            dispatch(getUsers());
        }
    }
}

export default connect(mapState, mapActions)(UsersThunk);