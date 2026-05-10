import React from "react";
import "./CurrencyConvertor.css"

function CurrencyConvertor() {

    return (
        <>
            <div className="main-container">
                <div className="card">
                    <form id="converter-form">
                        <div className="input-box">
                            <div className="input-section">
                                <label>From</label>
                                <input type="number" placeholder="Amount" value="0" />
                            </div>
                            <div className="select-section">
                                <p>Currency Type</p>
                                <select>
                                    <option value="usd">USD</option>
                                    <option value="inr">INR</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CurrencyConvertor