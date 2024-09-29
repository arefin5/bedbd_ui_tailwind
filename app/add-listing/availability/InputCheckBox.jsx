'use client';
import { Square, SquareCheckBig } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function InputCheckBox({ inputId, inputName, parentId }) {
    const [checked, setChecked] = useState(false);
    const inputRef = useRef(null);

    

    const onIconClickHandler = () => {
        inputRef.current.click();
    };

    useEffect(() => {
          const onParentClickEvent = (e) => {
            if (
                e.target.tagName.toLowerCase() === 'input' &&
                e.target.type.toLowerCase() === 'radio' &&
                e.target.name === inputName
            ) {
                setChecked(e.target.id === inputId);
            }
        };
        const parentElement = document.getElementById(parentId);
        parentElement.addEventListener('click', onParentClickEvent);

        // Cleanup to avoid memory leaks
        return () => {
            parentElement.removeEventListener('click', onParentClickEvent);
        };
    }, [inputId, inputName, parentId]);

    return (
        checked
            ? <SquareCheckBig className="icon" />
            : <Square onClick={onIconClickHandler} className="icon" />
    );
}