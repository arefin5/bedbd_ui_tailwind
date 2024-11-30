"use client";
import { Circle, CircleCheckBig } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function InputRadioButton({ inputId, inputName, value, isChecked, onChange }) {
  const [checked, setChecked] = useState(isChecked);
  const inputRef = useRef(null);

  const onIconClickHandler = () => {
    setChecked(true); // Only check this radio button
    inputRef.current.click();
  };

  useEffect(() => {
    setChecked(isChecked); // Sync checked state with props
  }, [isChecked]);

  return (
    <>
      <input
        className="hidden"
        ref={inputRef}
        type="radio"
        id={inputId}
        name={inputName}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {checked ? (
        <CircleCheckBig className="icon" onClick={onIconClickHandler} />
      ) : (
        <Circle onClick={onIconClickHandler} className="icon" />
      )}
    </>
  );
}
