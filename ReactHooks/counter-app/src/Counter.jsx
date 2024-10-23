import React, { useState, useEffect } from 'react';

const Counter = () => {
    // State for the counter
    const [count, setCount] = useState(0);

    // useEffect hook to log the count whenever it changes
    useEffect(() => {
        console.log(`Count has been updated: ${count}`);
    }, [count]); // Dependency array to run effect when count changes

    // Function to increment the counter
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    // Function to decrement the counter
    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    // Function to reset the counter
    const reset = () => {
        setCount(0);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={increment} style={{ margin: '5px', padding: '10px 20px' }}>Increment</button>
            <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px' }}>Decrement</button>
            <button onClick={reset} style={{ margin: '5px', padding: '10px 20px' }}>Reset</button>
        </div>
    );
};

export default Counter;
