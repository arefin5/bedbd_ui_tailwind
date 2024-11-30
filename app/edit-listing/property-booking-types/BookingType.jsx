// 'use client'
// import { useState } from 'react'
// import { Square, SquareCheckBig } from "lucide-react";

// export default function BookingType({data,setBookingType}) {
//     const [isChecked, setIsChecked] = useState()

//     function handleClick() {
//       document.getElementById(data['_id']).click()

//       setIsChecked(!isChecked)
//         setBookingType((prevState) => ({
//               ...prevState,
//               [data.title.toLowerCase().replace(/\s+/g, '')]: {
//                 name: data.title, 
//                 value: !isChecked  
//               }
//             }));
//     }
    
//   return (
//     <div 
//         onClick={handleClick}
//         className={`w-full py-4 pr-4 pl-14 rounded-10px cursor-pointer select-none relative border  
//                     hover:shadow hover:border-secondary-400 
//                     hover:shadow-secondary-400 
//                     ${isChecked
//                         ? 'shadow  border-secondary-400 shadow-secondary-400'
//                         : 'border-neutral-300' }
//                     `}>
//           {
//             isChecked
//               ? <SquareCheckBig className='icon absolute top-4 left-4'/>
//               : <Square className='icon absolute top-4 left-4'/>
//           }
//           <input  className="hidden" type="checkbox" id={data['_id']} name="property_booking_type" 
//           value={data['_id']}>

//           </input>
//           <h4 className='font-semibold text-xl text-neutral-500 mb-2'>{data['title']}</h4>
//           <p className='text-neutral-500 font-medium text-base'>{data['description']}</p>
//       </div>
//   )
// // }
// 'use client';
// import { useState, useEffect } from 'react';
// import { Square, SquareCheckBig } from 'lucide-react';

// export default function BookingType({ data, setBookingType, currentBookingType }) {
//   const key = data.title.toLowerCase().replace(/\s+/g, '');
//   const [isChecked, setIsChecked] = useState(false);

//   useEffect(() => {
//     if (currentBookingType[key]?.value) {
//       setIsChecked(true); // Set checkbox active based on the initial state
//     }
//   }, [currentBookingType, key]);

//   const handleClick = () => {
//     setIsChecked((prev) => !prev);
//     setBookingType((prevState) => ({
//       ...prevState,
//       [key]: {
//         name: data.title,
//         value: !isChecked,
//       },
//     }));
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className={`w-full py-4 pr-4 pl-14 rounded-10px cursor-pointer select-none relative border  
//                   hover:shadow hover:border-secondary-400 
//                   hover:shadow-secondary-400 
//                   ${isChecked
//                     ? 'shadow  border-secondary-400 shadow-secondary-400'
//                     : 'border-neutral-300'}
//                   `}
//     >
//       {isChecked ? (
//         <SquareCheckBig className="icon absolute top-4 left-4" />
//       ) : (
//         <Square className="icon absolute top-4 left-4" />
//       )}
//       <input
//         className="hidden"
//         type="checkbox"
//         id={data['_id']}
//         name="property_booking_type"
//         value={data['_id']}
//         checked={isChecked}
//         onChange={handleClick}
//       />
//       <h4 className="font-semibold text-xl text-neutral-500 mb-2">{data['title']}</h4>
//       <p className="text-neutral-500 font-medium text-base">{data['description']}</p>
//     </div>
//   );
// }
'use client';
import { useState, useEffect } from 'react';
import { Square, SquareCheckBig } from 'lucide-react';

export default function BookingType({ id, data, setBookingType, bookingtype }) {
  const [isChecked, setIsChecked] = useState(data.value || false);

  useEffect(() => {
    setIsChecked(data.value || false); // Initialize checkbox state based on `value`
  }, [data]);

  const handleClick = () => {
    const newState = !isChecked;
    setIsChecked(newState);

    // Update the parent `bookingtype` state
    setBookingType((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        value: newState,
      },
    }));
  };

  return (
    <div
      onClick={handleClick}
      className={`w-full py-4 pr-4 pl-14 rounded-10px cursor-pointer select-none relative border  
                  hover:shadow hover:border-secondary-400 
                  hover:shadow-secondary-400 
                  ${isChecked
                    ? 'shadow  border-secondary-400 shadow-secondary-400'
                    : 'border-neutral-300'}
                  `}
    >
      {isChecked ? (
        <SquareCheckBig className="icon absolute top-4 left-4" />
      ) : (
        <Square className="icon absolute top-4 left-4" />
      )}
      <input
        className="hidden"
        type="checkbox"
        id={id}
        name="property_booking_type"
        value={id}
        checked={isChecked}
        onChange={() => {}}
      />
      <h4 className="font-semibold text-xl text-neutral-500 mb-2">{data.name}</h4>
      <p className="text-neutral-500 font-medium text-base">{data.description || ''}</p>
    </div>
  );
}
