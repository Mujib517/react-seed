import React, { useState, useEffect } from "react";


const TimerWithHooks = ({ }) => {

    const res = useState(0);
    const count = res[0];
    const setCount = res[1];

    // componentDidmount load
    // componentDidUpdate
    // componentWillUnmount

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("incrementing...");
            setCount(count + 1);
        }, 1000);

        // clean up
        return () => clearInterval(interval);

    }, [count]);

    return <>
        <h3>Timer With Hooks</h3>
        <h4>{count}</h4>
    </>
}


export default TimerWithHooks;
