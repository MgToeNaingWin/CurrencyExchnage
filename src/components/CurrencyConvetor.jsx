import React, { useEffect, useState } from 'react'
import useCurrencyRate from '../hook/useCurrencyRates';
import CurrencySeletor from './CurrencySeletor';

function CurrencyConvetor() {
    const [amount , setAmount] = useState(1);
    const [fromCurrency ,setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("MMK"); 
    const [converted, setConverted] = useState(null);
    const {rates,loading, error } = useCurrencyRate(fromCurrency);
    const converCurrency = ()=>{
      if(!rates[toCurrency]){
        setConverted("N/A");
        return;
      }
      setConverted((amount * rates[toCurrency]).toFixed(2))
    }
    useEffect(()=>{
      setConverted(null)
    },[amount]
  )
  return (
    
    <div className='max-w-md mx-auto bg-amber-50 p-9 rounded-md'>
        <h1 className='text-2xl font-bold flex justify-center items-center'>Currency Convetor</h1>
        <div className='mt-10  mb-4 flex p-8  justify-center items-center'>
            <label htmlFor="amount" className='w-full text-2xl'>Amount:</label>
            <input type="number" className='border ms-3 p-2 text-center rounded-md '
            value={amount}
            onChange={(val)=>{
              setAmount(val.target.value)
            }}/>
        </div>
        <div className="flex">
          <CurrencySeletor label={"From:"} currencies={Object.keys(rates)} CurSelected= {fromCurrency} SelectedChanger={setFromCurrency}></CurrencySeletor>
          <CurrencySeletor label={"To:"} currencies={Object.keys(rates)} CurSelected={toCurrency} SelectedChanger={setToCurrency}></CurrencySeletor>
        </div> 
        <button className='my-6 p-2 w-full bg-amber-300 rounded-md hover:bg-amber-500 cursor-pointer duration-300' onClick={converCurrency} >Convert</button>
        <div className="div">
  {loading && <p className='text-gray-500'>Loading...</p>}
  {error && <p className='text-red-500'>{error}</p>}
  {converted === null &&(
    <p className='text-gray-400 text-center'>Click convert to see results.</p>
  )}
  {!loading && !error && converted && (
    <p className='text-xl font-semibold mt-4 text-emerald-700 text-center '>
      {amount} {fromCurrency} = <span className='text-2xl font-bold'>{converted}</span> {toCurrency}
    </p>
  )} 
</div>

    </div>
  )
}
export default CurrencyConvetor ;