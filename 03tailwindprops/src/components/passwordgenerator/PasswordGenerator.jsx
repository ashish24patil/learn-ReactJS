import React from "react";

import { useState, useCallback, useEffect, useRef } from "react";
import './PasswordGenerator.css'

function PasswordGenerator() {

    const [length, setLength] = useState(8);
    const [numAllow, setNumAllow] = useState(false);
    const [charAllow, setCharAllow] = useState(false);

    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numAllow) str += "0123456789";
        if (charAllow) str += "!@#$%^&*-_+=[]{}~";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);
    },
        [length, numAllow, charAllow, setPassword])

    useEffect(() => { passwordGenerator() },
        [length, numAllow, charAllow, passwordGenerator])

    const copyPassToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    },
        [password])

    return (
        <>
            <div className="container">
                <h1 className="title">Password Generator</h1>

                <div className="input-group">
                    <input type="text" id="password" value={password} readOnly placeholder="Password" className="password-field" ref={passwordRef} />
                    <button id="copy" onClick={copyPassToClipboard} className="copy-btn" >Copy</button>
                </div>

                <div className="controls">
                    <div className="range-wrapper">
                        <input type="range" id="length" min="6" max="15" value={length} onChange={(e) => setLength(e.target.value)} />
                        <label htmlFor="length">Length: <span id="length-val">{length}</span></label>
                    </div>

                    <div className="checkbox-wrapper">
                        <input type="checkbox" defaultChecked={numAllow} id="numbers" onChange={() => { setNumAllow((prev) => !prev); }} />
                        <label htmlFor="numbers">Numbers</label>
                    </div>

                    <div className="checkbox-wrapper">
                        <input type="checkbox" defaultChecked={charAllow} id="chars" onChange={() => { setCharAllow((prev) => !prev); }} />
                        <label htmlFor="chars">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerator