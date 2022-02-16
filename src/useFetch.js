import { useState, useEffect } from 'react';

const useFetch = (url)=> {
    const [data, setData] = useState([]);
    const [isLoading, setIsLOading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        const aborting = new AbortController()
        
        fetch(url, {signal: aborting.signal})
        .then(res => {
            if(!res.ok){
                throw Error('failed to fetch')
            }
            return res.json();
        })
        .then(data => {
            setData(data)
            setIsLOading(false)
            setError(null)
        })
        .catch((err)=>{
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }else{
                setIsLOading(false)
                setError(err.message)
            }           
        })

        return ()=>aborting.abort() 
      },[url]);


      return{data, isLoading, error}
}


export default useFetch;