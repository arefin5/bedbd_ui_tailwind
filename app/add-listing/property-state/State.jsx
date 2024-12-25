
'use client';
import { Square, SquareCheckBig } from "lucide-react";

export default function State({ data, setPropertyCondition, selectedCondition }) {
  const isSelected = selectedCondition === data.title; // Determine if this item is the active one

  function handleClick() {
    if (!isSelected) {
      setPropertyCondition(data.title); // Update the selected condition
    }
  }

  return (
    <div
      className={`w-full py-4 pr-4 pl-14 cursor-pointer select-none relative border hover:shadow hover:border-secondary-400 hover:shadow-secondary-400 rounded-10px 
                    ${isSelected ? 'shadow border-secondary-400 shadow-secondary-400' : 'border-neutral-300'}`}
      onClick={handleClick}
    >
      {isSelected ? <SquareCheckBig className='icon absolute left-4' /> : <Square className='icon absolute left-4' />}
      <h4 className='font-semibold text-xl text-neutral-500 mb-2'>{data.title}</h4>
      <p className='text-neutral-500 font-medium text-base'>{data.description}</p>
    </div>
  );
}
