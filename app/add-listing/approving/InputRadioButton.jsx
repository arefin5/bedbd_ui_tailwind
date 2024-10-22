// 'use client';
// import { Circle, CircleCheckBig } from "lucide-react";
// import { useState, useEffect, useRef } from "react";

// export default function InputCheckBox({ inputId, inputName, parentId, onChange }) {
//     const [checked, setChecked] = useState(false);
//     const inputRef = useRef(null);

    

//     const onIconClickHandler = () => {
        
//         setChecked(prev => !prev);
//         inputRef.current.click();
//     };

//     useEffect(() => {
//           const onParentClickEvent = (e) => {
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
        
//         // Cleanup to avoid memory leaks
//         return () => {
//             parentElement.removeEventListener('click', onParentClickEvent);
//         };
//     }, [inputName, inputId, parentId]);

//     return (
//         checked
//             ? <CircleCheckBig className="icon" />
//             : <Circle onClick={onIconClickHandler} className="icon" />
//     );
// }

// InputRadioButton Component
"use client";
import { Circle, CircleCheckBig } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function InputRadioButton({ inputId, inputName, parentId, isChecked, onChange }) {
  const [checked, setChecked] = useState(isChecked);
  const inputRef = useRef(null);

  const onIconClickHandler = () => {
    setChecked((prev) => !prev);
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