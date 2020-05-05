import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./redux/actions";


class Counter2 extends Component {

    inc = () => {
        this.props.incCount();
    }

    dec = () => {
        this.props.decCount();
    }

    render() {
        return <div>
            <h1>Counter 2 {this.props.count}</h1>
            <button onClick={this.inc}>++</button>
            <button onClick={this.dec}>--</button>
        </div>
    }
}

function mapState(state) {
    return { count: state.count };
}

const mapActions = dispatch => ({
    incCount: () => dispatch(increment()),
    decCount: () => dispatch(decrement())
});

export default connect(mapState, mapActions)(Counter2);