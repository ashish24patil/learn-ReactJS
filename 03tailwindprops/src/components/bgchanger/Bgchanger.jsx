import React from "react";
import { useState } from "react";
import "./Bgchanger.css"


function BGChange() {

    const [color, setColor] = useState("Olive");
    return (
        <>
            <div className="bg-color" style={{ backgroundColor: color }}>
                <div className="btn-group">
                    <button onClick={() => setColor("green")} className="btn" style={{ backgroundColor: "green" }}>Green</button>
                    <button onClick={() => setColor("red")} className="btn" style={{ backgroundColor: "red" }}>Red</button>
                    <button onClick={() => setColor("orange")} className="btn" style={{ backgroundColor: "orange" }}>Orange</button>
                    <button onClick={() => setColor("yellow")} className="btn" style={{ backgroundColor: "yellow" }}>Yellow</button>
                    <button onClick={() => setColor("plum")} className="btn" style={{ backgroundColor: "plum" }}>plum</button>
                    <button onClick={() => setColor("blue")} className="btn" style={{ backgroundColor: "blue" }}>Blue</button>
                    <button onClick={() => setColor("black")} className="btn" style={{ backgroundColor: "black" }}>Black</button>
                </div>
            </div>
        </>
    )
}

export default BGChange