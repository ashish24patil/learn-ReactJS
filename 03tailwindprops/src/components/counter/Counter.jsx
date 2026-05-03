import React from "react";

import { useState } from "react";

import "./Counter.css"

function Counter() {

    let [counter, setCounter] = useState(5);

    const increaseBtn = () => {
        if (counter < 10) setCounter(counter + 1);
    }

    const decreaseBtn = () => {
        if (counter > 0) setCounter(counter - 1)
    }
    return (
        <>
            <div className="container">
                <h1>Counter {counter}</h1>
                <div className="button-group">
                    <button onClick={increaseBtn}>+</button>
                    <button onClick={decreaseBtn}>-</button>
                </div>
            </div>
        </>
    )
}

export default Counter