import React, { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) {
    const amoutInputId = useId();
    return (
        <>
            <div className="main-container">
                <div className="card">
                    <form id="converter-form">
                        <div className="input-box">
                            <div className="input-section">
                                <label htmlFor={amoutInputId}>{label}</label>
                                <input id={amoutInputId} type="number" placeholder="Amount" disabled={amountDisable} value={amount}
                                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
                            </div>
                            <div className="select-section">
                                <p>Currency Type</p>
                                <select value={onCurrencyChange}
                                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                                    disabled={currencyDisable}>
                                    {currencyOptions.map((currency) => {
                                        <option key={currency} value={currency}>{currency}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default InputBox;