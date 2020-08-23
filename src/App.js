import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangeratesapi.io/latest'



function App() {

    const [currencyOptions, setCurrencyOptions] = useState([])
    const [fromCurrency, setFromCurrency] = useState()
    const [toCurrency, setToCurrency] = useState()

    useEffect (() => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            const sixthCurrency = Object.keys(data.rates)[5]
            setCurrencyOptions([data.base, ...Object.keys(data.rates)])
            setFromCurrency(data.base)
            setToCurrency(sixthCurrency)
        })
    }, [])
    return (
        <>
            <h1>Currency Converter</h1>
            <CurrencyRow 
              currencyOptions={currencyOptions}
              selectedCurrency={fromCurrency}
            />
            <div className="equals">=</div>
            <CurrencyRow
              currencyOptions={currencyOptions}
              selectedCurrency={toCurrency}
            />
        </>
    );
}

export default App;
