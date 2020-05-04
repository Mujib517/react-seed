import React, { Component } from "react";


class Counter extends Component {

    constructor() {
        super();

        this.state = { count: 0 }

        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
    }

    inc() {
        this.setState({ count: this.state.count + 1 });
    }

    dec() {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return <>
            <h1>{this.state.count}</h1>
            <button onClick={this.inc}>++</button>
            <button onClick={this.dec}>--</button>
        </>
    }

}


export default Counter;