'use client'
import { useState, useEffect, useRef } from "react";
import { Square, SquareCheckBig } from "lucide-react";

export default function CheckBoxIcon({ inputId }) {
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
            ? <SquareCheckBig onClick={handleIconClick} size={24} className='icon inline' />
            : <Square onClick={handleIconClick} size={24} className='icon inline' />
    );
}