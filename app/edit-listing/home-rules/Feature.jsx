
// "use client";

// import { useState, useEffect } from "react";
// import { SquareCheckBig, Square } from "lucide-react";
// import { useSelector } from "react-redux";

// export default function Feature({ data, id, setpropertyFeature, propertyFeature,submiteProperty,setSubmiteProperty }) {
//   // Local state for checkboxfeatures setpropertyFeature propertyFeature
//   const [isChecked, setIsChecked] = useState(false);
//   const updateList=useSelector((state) => state.editForm.editlist?._id);
//   const currentFormDataProperty = useSelector((state) => state.editForm.editlist?.homerule || {});

//   // Sync `isChecked` with `data.value` when `data` changes
//   useEffect(() => {
//     setIsChecked(data?.value || false); // Initialize with `data.value`
//     console.log("Feature initialized:", { id, data, isChecked });
//     console.log("test",propertyFeature);
//     setSubmiteProperty(propertyFeature);
//     console.log("submiteProperty in components",submiteProperty)
//   }, [data]);

//   // Toggle checkbox and update parent state
//   const handleClick = () => {
//     const updatedValue = !isChecked; // Toggle current state
//     setIsChecked(updatedValue);

//     // Update parent state
//     setpropertyFeature((prev) => {
//       const updatedPropertyFeature = {
//         ...prev,
//         [id]: { ...data, value: updatedValue }, // Update specific feature
//       };
//       console.log("Updated propertyFeature:", updatedPropertyFeature);
//       return updatedPropertyFeature;
//     });
//     setSubmiteProperty((prev) => {
//       const updatedPropertyFeature = {
//         ...prev,
//         [id]: { ...data, value: updatedValue }, // Update specific feature
//       };
//       console.log("Updated propertyFeature:", updatedPropertyFeature);
//       return updatedPropertyFeature;
//     });
//   };

//   return (
//     <div onClick={handleClick} className="flex items-center cursor-pointer">
//       {/* Display checkbox based on isChecked */}
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
import { useDispatch, useSelector } from "react-redux";
// import { removeHomeRule } from "./list/editListSlice"; // Adjust path if needed
import { removeHomeRule } from '@/redux/list/editListSlice';

export default function Feature({
  data,
  id,
  setpropertyFeature,
  propertyFeature,
  submiteProperty,
  setSubmiteProperty,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();



  useEffect(() => {
    setIsChecked(data?.value || false); // Initialize with `data.value`
    setSubmiteProperty(propertyFeature);
  }, [data]);

  const handleClick = () => {
    const updatedValue = !isChecked; // Toggle current state
    setIsChecked(updatedValue);

    setpropertyFeature((prev) => {
      const updatedPropertyFeature = {
        ...prev,
        [id]: { ...data, value: updatedValue }, // Update specific feature
      };

      if (!updatedValue) {
        console.log("id",id)

        dispatch(removeHomeRule({ key: id }));

        // dispatch(removeHomeRule({  })); // Remove from homerule in Redux
      }

      return updatedPropertyFeature;
    });

    setSubmiteProperty((prev) => {
      const updatedPropertyFeature = {
        ...prev,
        [id]: { ...data, value: updatedValue }, // Update specific feature
      };
      return updatedPropertyFeature;
    });
  };

  return (
    <div onClick={handleClick} className="flex items-center cursor-pointer">
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
