import React from 'react';

interface CounterButtonProps {
  count: number;
  onIncrement: () => void;
}

const CounterButton: React.FC<CounterButtonProps> = ({ count, onIncrement }) => {
  return (
    <button onClick={onIncrement}>
      Increment Count (Current: {count})
    </button>
  );
};

export default CounterButton;