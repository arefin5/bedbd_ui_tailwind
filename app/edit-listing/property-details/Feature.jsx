
//   "use client";

// import { useEffect, useState } from "react";
// import { SquareCheckBig, Square } from "lucide-react";

// import { removePropertyDetails } from '@/redux/list/editListSlice';
// import { useDispatch, useSelector } from "react-redux";

// export default function Feature({ data, id, setpropertyFeature, propertyFeature }) {
//   const [isChecked, setIsChecked] = useState(false);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     // Initialize the checked state based on incoming data
//     setIsChecked(data?.value || false);
//   }, [data]);

//   const handleClick = () => {
//     const newState = !isChecked;
//     setIsChecked(newState);

//     setpropertyFeature((prevState) => ({
//       ...prevState,
//       [id]: {
//         ...data,
//         value: newState,
//       },
//       dispatch(removePropertyDetails({ key: id }))
//     }));
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className={`w-full py-4 pr-4 pl-14 mb-4 rounded-10px cursor-pointer select-none relative border  
//                     hover:shadow hover:border-secondary-400 
//                     hover:shadow-secondary-400 
//                     ${isChecked ? "shadow border-secondary-400 shadow-secondary-400" : "border-neutral-300"}`}
//     >
//       {isChecked ? (
//         <SquareCheckBig className="icon absolute left-4" />
//       ) : (
//         <Square className="icon absolute left-4" />
//       )}
//       <h4 className="font-semibold text-xl text-neutral-500 mb-2">{data?.name}</h4>
//       <p className="text-neutral-500 font-medium text-base">
//         {data?.description ||data?.name || "No description provided"}
//       </p>
//     </div>
//   );
// }

"use client";

import { useEffect, useState, useCallback } from "react";
import { SquareCheckBig, Square } from "lucide-react";
import { removePropertyDetails,addPropertyDetails } from "@/redux/list/editListSlice";
import { useDispatch } from "react-redux";

export default function Feature({ data, id, setpropertyFeature, propertyFeature }) {
  const [isChecked, setIsChecked] = useState(data?.value || false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Sync the checked state with the incoming data
    setIsChecked(data?.value || false);
  }, [data]);

  const handleClick = useCallback(() => {
    const newState = !isChecked;
    setIsChecked(newState);

    // Update the propertyFeature state
    setpropertyFeature((prevState) => ({
      ...prevState,
      [id]: {
        ...data,
        value: newState,
      },
    }));

    // Dispatch action if unchecked
    if (!newState) {
      dispatch(removePropertyDetails({ key: id }));
    }else{
      console.log(data)
      dispatch(addPropertyDetails({ key: id, value: { ...data, value: newState } }));
      // dispatch(addPropertyDetails({ key: id }));

    }
  }, [isChecked, id, data, dispatch, setpropertyFeature]);

  return (
    <div
      onClick={handleClick}
      className={`w-full py-4 pr-4 pl-14 mb-4 rounded-10px cursor-pointer select-none relative border  
                    hover:shadow hover:border-secondary-400 
                    hover:shadow-secondary-400 
                    ${isChecked ? "shadow border-secondary-400 shadow-secondary-400" : "border-neutral-300"}`}
    >
      {isChecked ? (
        <SquareCheckBig className="icon absolute left-4" />
      ) : (
        <Square className="icon absolute left-4" />
      )}
      <h4 className="font-semibold text-xl text-neutral-500 mb-2">
        {data?.name || "Unnamed Feature"}
      </h4>
      <p className="text-neutral-500 font-medium text-base">
        {data?.description || data?.name || "No description provided"}
      </p>
    </div>
  );
}
