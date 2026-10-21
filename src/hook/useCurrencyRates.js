import { useState, useEffect } from "react";
const useCurrencyRate = (baseCurrency)=>{
    const [rates , setRates] = useState({});
    const [error , setError] = useState(false);
    const [loading , setLoading] = useState(false);
    useEffect(
        ()=>{
            const fetchRate = async ()=>{
                setLoading(true);
                try{
                    const response = await fetch(`https://v6.exchangerate-api.com/v6/ba529cdfcd2561800e00a26a/latest/${baseCurrency}`);
                    const data =await response.json();
                    setRates(data.conversion_rates );
                    
                }catch(error){
                    setError("Error on fetching API");
                }finally{
                    setLoading(false);
                }
            };
            fetchRate()
        },[baseCurrency] 
    );
    return {rates,error,loading};
}

export default useCurrencyRate;