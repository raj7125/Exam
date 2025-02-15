import React, { useState } from 'react';
import CounterButton from './CounterButton';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <CounterButton count={count} onIncrement={incrementCount} />
    </div>
  );
};

export default App;