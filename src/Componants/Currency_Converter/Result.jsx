import React from 'react'
import InputBox from '../../../../react-project/src/Component/InputBox';
import { useState } from 'react';
import useCurrencyInfo from '../../../../react-project/src/Hooks/useCurrencyInfo';

const Result = () => {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);
    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    };

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
        <>
            <div
                className="w-100 d-flex flex-wrap justify-content-center align-items-center"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/3591557/pexels-photo-3591557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
                    height: "100dvh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="">
                    <div className="w-100 mx-auto border border-secondary-subtle rounded-4 p-5 bg-whiteS">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                convert();
                            }}>
                            <div className="w-100 mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOptions={options}
                                    onAmountChange={(amount) => setAmount(amount)}
                                    selectCurrency={from}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                />
                            </div>
                            <div className="position-relative w-100 h-50">
                                <button
                                    type="button"
                                    className=" position-absolute start-50 translate-middle border border-2 border-white rounded-3 bg-primary text-white px-2 py-1"
                                    onClick={swap}
                                >
                                    swap
                                </button>
                            </div>

                            <div className="w-100 mb-4">
                                <InputBox
                                    label="To"
                                    amount={convertedAmount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={to}
                                    amountDisable
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-100 btn btn-success border-0 px-4 py-3"
                            >
                                Convert {from.toUpperCase()} to {to.toUpperCase()}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Result