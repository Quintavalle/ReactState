import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';

const Counter = ({ initialValue, decrementAmount }) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - decrementAmount);
  const reset = () => setCounter(initialValue);

  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
