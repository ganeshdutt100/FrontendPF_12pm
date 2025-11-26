import React, { useState, useEffect } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("timer running")
        }, 1000);
        return () => {
            clearInterval(timer)
            console.log("Component unmount go gya hai , timer stopped")
        }
    }, [])


    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )

}

export default UseEffect

// syntax
// useEffect(() => {
//     console.log('now i am in useEffect');
// }, [])