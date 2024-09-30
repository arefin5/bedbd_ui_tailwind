'use client'
// import Icon from '/components/Icon'
import { useState, useEffect, useRef } from 'react'
import { Circle, CircleCheckBig } from 'lucide-react';

export default function InputRadioIcon({inputId}) {

const [checked, setChecked] = useState(false);
const inputRef = useRef(null);

    useEffect(() => {
        const inputElement = document.getElementById(inputId);
        inputRef.current = inputElement;

        const handleClick = (e) => {
            setChecked(e.target.checked);
        };

        inputElement.addEventListener('click', handleClick);

        return () => {
            inputElement.removeEventListener('click', handleClick);
        };
    }, [inputId]);

    const handleIconClick = () => {
        inputRef.current.click();
    };

  return (
    checked 
        ? <CircleCheckBig onClick={handleIconClick}/>
        : <Circle onClick={handleIconClick}/>
  )
}
