import { useState } from "react";
import './App.css'

function Counter() {

    let [x, setX] = useState(5);

    let increaseValue = () => {
        if (x < 15) {
            setX(x + 1);
        }
    }

    let decreaseValue = () => {
        if (x > 0) {
            setX(x - 1);
        }
    }

    return (
        <>
            <div className="box">
                <h1>Counter</h1>
                <p>Counter Value {x}</p>
                <div className="buttonCounter">
                    <button className="plus" onClick={increaseValue}>Increase Value</button>
                    <button className="minus" onClick={decreaseValue}>Decrease Value</button>
                </div>
            </div>
        </>
    )
}

export default Counter