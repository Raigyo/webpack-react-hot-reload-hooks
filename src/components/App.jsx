import { hot } from 'react-hot-loader/root';
import React, { useState } from "react";
const App = () => {
    const [counter, setCounter] = useState(0)//state var

    function increment() {
        setCounter(counter + 1)
    }

    return (
        <>
            <div>{`Counter:  ${counter}`}</div>
            <button onClick={increment}>Increment Now</button>
        </>
    );
}
export default hot(App);