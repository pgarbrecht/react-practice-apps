import {useState} from 'react';

const Counter = () => {
    //create state variable with useState hook
    const [count, setCount] = useState(
        0
    )

    //method to add count
    const addCount = () => {
        setCount(
            count + 1
        )
    }
    //method to subtract count
    const subtractCount = () => {
        setCount(
            count - 1
        )
    }

    return(
        <div>
            <h2>Counter App</h2>
            <p>The current count is {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
        </div>
    )
}

export default Counter;