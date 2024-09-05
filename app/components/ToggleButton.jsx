'use client'
import { useState } from 'react';

export default function ToggleButton() {

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
      setIsOn(!isOn);
    };
  return (
    <div className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${isOn ? 'bg-primary-400' : 'bg-gray-300'}`}
      onClick={toggleSwitch}>
      <div className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-500 ease-in-out ${isOn ? 'translate-x-8' : ''}`}
      />
    </div>
  )
}
