'use client'
import React, { useState } from 'react';
import { GrAdd, GrSubtract } from 'react-icons/gr';

interface IconProps {
  Component: React.ComponentType<any>;
  onClick: () => void;
  label: string;
}
interface CounterProps {
  start: number;
}

const Icon: React.FC<IconProps> = ({ Component, onClick, label }) => (
    <button
      className="cursor-pointer hover:opacity-80 text-backGroundGreen"
      onClick={onClick}
      aria-label={label}
      type="button"
    >
      <Component />
    </button>
  );

const Counter: React.FC<CounterProps> = ({start}) => {
  const [counter, setCounter] = useState<number>(start);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Icon Component={GrSubtract} onClick={decrement} label="Decrease" />
      <div className="bg-backGroundGreen h-4 flex items-center w-8 justify-center rounded-sm text-white">
        <span className="text-xl">{counter}</span>
      </div>
      <Icon Component={GrAdd} onClick={increment} label="Increase" />
    </div>
  );
};

export default Counter;
