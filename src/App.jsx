import React from 'react'
import './index.css'
import CurrencyConvetor from './components/CurrencyConvetor';

export const App = () => {
  return (
    <section className='flex justify-center items-center h-[100vh] bg-amber-300'>
          <CurrencyConvetor></CurrencyConvetor>

    </section>
  )
}
export default App;
