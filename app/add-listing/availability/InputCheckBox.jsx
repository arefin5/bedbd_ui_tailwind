
// 'use client';
// import { Square, SquareCheckBig } from "lucide-react";
// import { useState, useEffect, useRef } from "react";

// export default function InputCheckBox({ inputId, inputName, parentId, onChange }) {
//     const [checked, setChecked] = useState(false);
//     const inputRef = useRef(null);

//     const onIconClickHandler = () => {
//         setChecked(prev => !prev);
//         inputRef.current.click(); // Trigger input change
//     };

//     useEffect(() => {
//         const onParentClickEvent = (e) => {
//             if (
//                 e.target.tagName.toLowerCase() === 'input' &&
//                 e.target.type.toLowerCase() === 'radio' &&
//                 e.target.name === inputName
//             ) {
//                 setChecked(e.target.id === inputId);
//             }
//         };
//         const parentElement = document.getElementById(parentId);
//         parentElement.addEventListener('click', onParentClickEvent);

//         return () => {
//             parentElement.removeEventListener('click', onParentClickEvent);
//         };
//     }, [inputId, inputName, parentId]);

//     useEffect(() => {
//         onChange(checked); // Notify parent component of the change
//     }, [checked, onChange]);

//     return (
//         <div onClick={onIconClickHandler}>
//             {checked
//                 ? <SquareCheckBig className="icon" />
//                 : <Square className="icon" />}
//             <input ref={inputRef} className="hidden" type='checkbox' name={inputName} id={inputId} value={inputId} checked={checked} readOnly />
//         </div>
//     );
// }
'use client';
import { Square, SquareCheckBig } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function InputCheckBox({ inputId, inputName, parentId, onChange }) {
    const [checked, setChecked] = useState(false);
    const inputRef = useRef(null);

    const onIconClickHandler = () => {
        setChecked(prev => !prev);
        inputRef.current.click(); // Trigger input change
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

        return () => {
            parentElement.removeEventListener('click', onParentClickEvent);
        };
    }, [inputId, inputName, parentId]);

    useEffect(() => {
        onChange(checked); // Notify parent component of the change
    }, [checked, onChange]);

    return (
        <div onClick={onIconClickHandler}>
            {checked
                ? <SquareCheckBig className="icon" />
                : <Square className="icon" />}
            <input ref={inputRef} className="hidden" type='checkbox' name={inputName} id={inputId} value={inputId} checked={checked} readOnly />
        </div>
    );
}
