import React, { useState, useEffect } from "react";

const CounterWithHooks = ({ }) => {

    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    // componentDidMount
    useEffect(function () {
        document.title = `Clicked ${count} times`;
        return () => {
            // clean up
        }
    }, [count])

    const inc = () => {
        setCount(count + 1);
    }

    const dec = () => {
        setCount(count - 1);
    }

    return <>
        <h1>Counter with Hooks</h1>
        <h3>{count}</h3>
        <button onClick={inc}>++</button>
        <button onClick={dec}>--</button>
    </>
};


export default CounterWithHooks;
