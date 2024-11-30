"use client"
import { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center h-[24px] w-[24px]">
      <button
        onClick={toggle}
        className={`border-2 bg-transparent relative w-6 h-4 ${
          isOn ? "border-[#FF621F]" : " border-[#0054B5]"
        } rounded-full transition duration-300`}
      >
        {/* -top-0.5 
        -left-0.5  */}
        <span
          className={`border-2 absolute top-1/2 -translate-y-1/2 left-[1px] w-2 h-2 bg-transparent rounded-full shadow-md transition-transform duration-300 ${
            isOn ? "translate-x-2.5 border-[#FF621F]" : " border-[#0054B5]"
          }`}
        ></span>
      </button>
    </div>
  );
}