// 'use client'

// import { useState } from "react"
// import { Plus, Square, SquareCheckBig } from 'lucide-react'


// export default function Amenity({data}) {
//     const [checked, setChecked] = useState()

//     function handleClick() {
//         document.getElementById(data['_id']).click()
//         setChecked(!checked)
//     }

//   return (
//     <div className='flex gap-x-2 mb-3 text-neutral-500 cursor-pointer select-none' onClick={handleClick}>
//         {
//             checked
//                 ? <SquareCheckBig className='icon '/>
//                 : <Square className='icon '/>
//         }
//         <input type='checkbox' className='hidden' name='amenity' id={data['_id']} value={data['_id']}/>
//         <div className='text-base font-medium'>{data['title']}</div>
//     </div>
//   )
// }
"use client"
import { useState } from "react";
import { Square, SquareCheckBig } from 'lucide-react';

export default function Amenity({ data, onCheckChange }) {
    const [checked, setChecked] = useState(data.checked || false);

    function handleClick() {
        const newChecked = !checked;
        setChecked(newChecked);
        onCheckChange(data['_id'], newChecked); // Update parent component's state with new value
    }

    return (
        <div 
            className='flex gap-x-2 mb-3 text-neutral-500 cursor-pointer select-none'
            onClick={handleClick}
        >
            {
                checked
                    ? <SquareCheckBig className='icon' />
                    : <Square className='icon' />
            }
            <input 
                type='checkbox' 
                className='hidden' 
                name='amenity' 
                id={data['_id']} 
                value={data['_id']} 
                checked={checked}
                readOnly
            />
            <div className='text-base font-medium'>{data['title']}</div>
        </div>
    );
}
