
'use client';
import { Circle, CircleCheckBig } from 'lucide-react';

export default function InputRadioIcon({ inputId, checked }) {
  const handleIconClick = () => {
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    checked 
      ? <CircleCheckBig onClick={handleIconClick} />
      : <Circle onClick={handleIconClick} />
  );
}
