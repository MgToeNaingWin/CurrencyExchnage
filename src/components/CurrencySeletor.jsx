import React from 'react'

const CurrencySeletor = ({label, currencies, CurSelected, SelectedChanger} ) => {
  return (
    <div className='w-full'>
      <label className='text-xl'>{label}</label>
    <select name="" id="" className='font-bold text-xl border rounded ms-3' value={CurSelected} onChange={(e)=> SelectedChanger(e.target.value)}>
      {
        currencies.map(
        (currency, index)=>{
          return <option value={currency} key={index} >
            {currency} 
          </option>
        }
        )
      }
    </select>
      </div>
  )
}

export default CurrencySeletor