import React, { useId } from 'react'

function InputBox({ label, amount, onAmountChange, onCurrencyChange, currencyOptions = [],
    selectCurrency, amountDisable = false, currencyDisable = false, className = "" }) {

    const amountInputId = useId()
    return (
        <div className=" container">
            <div className="row">
                <div className={`bg-white p-3 rounded-3  d-flex ${className}`}>
                    <div className=" w-50">
                        <label htmlFor={amountInputId} className=" text-black-50 mb-2 inline-block">
                            {label}
                        </label>
                        <input
                            className="w-100 bg-transparent py-2 form-control"
                            type="number"
                            placeholder="Amount"
                            id={amountInputId}
                            disabled={amountDisable}
                            value={amount}
                            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        />
                    </div>
                    <div className="w-50 d-flex flex-wrap justify-content-end text-start">
                        <p className="text-black-50 mb-0 w-100">Currency Type</p>
                        <select className=" form-select rounded-lg px-1 py-1 bg-secondary-subtle"
                            value={selectCurrency}
                            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                            disabled={currencyDisable}
                        >
                            {currencyOptions && currencyOptions.map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputBox