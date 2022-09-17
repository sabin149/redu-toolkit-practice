import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from './counterSlice'
const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count)

    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue=Number(incrementAmount) || 0

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset())
    }
    return (
        <section>
            <p>Count: {count}</p>
            <div>
                <button onClick={() => { dispatch(increment()) }}>+</button>
                <button onClick={() => { dispatch(decrement()) }}>-</button>
                <button onClick={resetAll}>reset</button>
                <button onClick={() => { dispatch(incrementByAmount(addValue)) }}>increment by number</button>
                <input type="number" value={incrementAmount} onChange={(e) => {
                    setIncrementAmount(e.target.valueAsNumber)
                }} />
            </div>
        </section>
    )
}

export default Counter