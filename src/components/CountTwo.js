import React,{useState} from 'react'
import useCounter from '../hooks/useCounter'

function CountOne() {
    const [count, increment, decrement, reset] = useCounter(0,2)
  
    return (
        <div>
            Count - {count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CountOne
