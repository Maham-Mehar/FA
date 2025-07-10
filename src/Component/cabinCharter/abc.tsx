"use client";
import { useEffect, useState } from "react"

const Practice = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`the value is ${count}`)
    }, [count])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>increment:{count}</button>
        </div>
    )
}
export default Practice