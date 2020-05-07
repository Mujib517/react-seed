import React from "react";
import Home from "./Home";
import Counter2 from "./Counter2";
import UsersThunk from "./UsersThunk";
import UsersWithHooks from "./UsersHooks";
import UsersWithSaga from "./UsersWithSaga";
import AddUserSaga from "./AddUserSaga";


function App() {
    return <>
        <Counter2 />
        <AddUserSaga />
    </>
}

export default App;