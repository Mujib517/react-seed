import React, { useContext } from "react";

const ValContext = React.createContext();

const Home = () => <>
    <h1>Home Page</h1>
    <ValContext.Provider value={123}>
        <Parent />
    </ValContext.Provider>
</>


const Parent = () => <><Level1 /></>
const Level1 = () => <>Level 1 <Level2 /></>
const Level2 = () => <>Level2 <Level3 /></>
const Level3 = () => {
    const val = useContext(ValContext);

    return <>Level 3 {val}</>;
}

export default Home;

// React func, class 
// React w/o classes 
// React redux
// fake api: https://jsonplaceholder.typicode.com/todos