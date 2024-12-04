
// // "use client";

// // import { useState, useEffect } from "react";
// // import { SquareCheckBig, Square } from "lucide-react";

// // export default function Feature({ data, id, setpropertyFeature, propertyFeature }) {
// //   const [isChecked, setIsChecked] = useState(false);
// // console.log("data",data);
// // console.log("key",id)
// //   useEffect(() => {
// //     setIsChecked(data?.value || false); 

// //     console.log("propertyFeature in State ",propertyFeature)
// //   }, [data]);

// //   const handleClick = () => {
// //     // Toggle the checkbox state
// //     const updatedFeature = { ...data, value: !isChecked };
// //     setIsChecked(!isChecked);
// //     console.log("updatedFeature",updatedFeature)
// //     // Update the propertyFeature state with the new checked state
// //     setpropertyFeature((prev) => ({
// //       ...prev,
// //       [id]: updatedFeature,
// //       // may be here are issues 
// //     }));
// //   };

// //   return (
// //     <div onClick={handleClick} className="flex items-center cursor-pointer">
// //       {isChecked ? (
// //         <SquareCheckBig className="text-primary-400" />
// //       ) : (
// //         <Square className="text-neutral-500" />
// //       )}
// //       <div className="ml-4">
// //         <p>{data?.name}</p>
// //         <p className="text-neutral-500">{data?.description}</p>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import { SquareCheckBig, Square } from "lucide-react";

// export default function Feature({ data, id, setpropertyFeature, propertyFeature }) {
//   const [isChecked, setIsChecked] = useState(false);

//   // Log initial props and state
//   useEffect(() => {
//     console.log("Initial data:", data);
//     console.log("Feature ID:", id);
//     console.log("Initial propertyFeature:", propertyFeature);
//     setIsChecked(data?.value || false);
//   }, [data, id, propertyFeature]); // Track changes for better debugging

//   const handleClick = () => {
//     const updatedFeature = { ...data, value: !isChecked };
//     setIsChecked(!isChecked);

//     // Update parent state
//     setpropertyFeature((prev) => {
//       const updated = {
//         ...prev,
//         [id]: updatedFeature,
//       };
//       console.log("Updated propertyFeature:", updated); // Log updated state
//       return updated;
//     });
//   };

//   return (
//     <div onClick={handleClick} className="flex items-center cursor-pointer">
//       {isChecked ? (
//         <SquareCheckBig className="text-primary-400" />
//       ) : (
//         <Square className="text-neutral-500" />
//       )}
//       <div className="ml-4">
//         <p>{data?.name}</p>
//         <p className="text-neutral-500">{data?.description}</p>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { SquareCheckBig, Square } from "lucide-react";

export default function Feature({ data, id, setpropertyFeature, propertyFeature,submiteProperty,setSubmiteProperty }) {
  // Local state for checkboxfeatures setpropertyFeature propertyFeature
  const [isChecked, setIsChecked] = useState(false);

  // Sync `isChecked` with `data.value` when `data` changes
  useEffect(() => {
    setIsChecked(data?.value || false); // Initialize with `data.value`
    console.log("Feature initialized:", { id, data, isChecked });
    console.log("test",propertyFeature);
    setSubmiteProperty(propertyFeature);
    console.log("submiteProperty in components",submiteProperty)
  }, [data]);

  // Toggle checkbox and update parent state
  const handleClick = () => {
    const updatedValue = !isChecked; // Toggle current state
    setIsChecked(updatedValue);

    // Update parent state
    setpropertyFeature((prev) => {
      const updatedPropertyFeature = {
        ...prev,
        [id]: { ...data, value: updatedValue }, // Update specific feature
      };
      console.log("Updated propertyFeature:", updatedPropertyFeature);
      return updatedPropertyFeature;
    });
    setSubmiteProperty((prev) => {
      const updatedPropertyFeature = {
        ...prev,
        [id]: { ...data, value: updatedValue }, // Update specific feature
      };
      console.log("Updated propertyFeature:", updatedPropertyFeature);
      return updatedPropertyFeature;
    });
  };

  return (
    <div onClick={handleClick} className="flex items-center cursor-pointer">
      {/* Display checkbox based on isChecked */}
      {isChecked ? (
        <SquareCheckBig className="text-primary-400" />
      ) : (
        <Square className="text-neutral-500" />
      )}
      <div className="ml-4">
        <p>{data?.name}</p>
        <p className="text-neutral-500">{data?.description}</p>
      </div>
    </div>
  );
}
