
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Counter({ name, value, onCountChange, maxCount = 10, minCount = 0 }) {
  const increment = () => {
    if (value < maxCount) {
      onCountChange(name, value + 1);
    }
  };

  const decrement = () => {
    if (value > minCount) {
      onCountChange(name, value - 1);
    }
  };

  return (
    <div className="flex gap-2">
      <Minus className="icon cursor-pointer" onClick={decrement} />
      <input
        readOnly
        className="text-center max-w-6"
        name={name}
        type="number"
        value={value}
      />
      <Plus className="icon cursor-pointer" onClick={increment} />
    </div>
  );
}
