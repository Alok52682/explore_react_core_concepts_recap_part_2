/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handlereduse = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{ border: '2px solid coral', borderRadius: '10px' }}>
            <h3>counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handlereduse}>Reduce</button>
        </div>
    )
}