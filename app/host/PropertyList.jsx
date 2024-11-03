
// "use client";
import axiosInstance from "@/redux/services/axiosInstance";
import InputRadioIcon from "./InputRadioIcon";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Calendar from "./Calendar";

// export default function PropertyList() {
//   const [lists, setList] = useState([]);
//   const router = useRouter();
//   const [listSelect, setListSelect] = useState(null); // Keep single state for selected property

//   const fetchUserList = async () => {
//     try {
//       const listData = await axiosInstance.get("/all-draft");
//       console.log(listData);
//       setList(listData.data);
//     } catch (error) {
//       console.error("Error fetching property list:", error);
//     }
//   };

//   const handlePropertySelect = (item) => {
//     setListSelect(item); // Set selected property directly
//   };

//   useEffect(() => {
//     fetchUserList();
//   }, []);

//   return (
//     <div className="py-6 px-4 w-full max-w-sm bg-secondary-50 rounded-lg">
//       <div className="text-neutral-500 flex justify-between">
//         <span className="font-semibold">Property List ({lists?.length || 0})</span>
//         <button
//           onClick={() => router.push("/host/properties")}
//           className="border-none text-sm font-medium hover:underline hover:scale-110 transition ease-in-out delay-150"
//         >
//           See All
//         </button>
//       </div>
//       <ul className="space-y-5 mt-6 max-h-56 overflow-y-auto">
//         {lists.length > 0 ? (
//           lists.map((item, index) => (
//             <li key={index} className="flex gap-x-4">
//               <input
//                 type="radio"
//                 id={`host_property_${index}`}
//                 name="host_property" // Ensure the name is the same for radio buttons
//                 value={item.propertyTitle}
//                 checked={listSelect?._id === item._id}
//                 onChange={() => handlePropertySelect(item)}
//                 className="hidden"
//               />
//               <InputRadioIcon inputId={`host_property_${index}`} />
//               <label htmlFor={`host_property_${index}`}>
//                 <span className="block text-neutral-600 text-lg font-normal">
//                   {item.propertyTitle || "No Title"}
//                 </span>
//                 <span className="block text-neutral-500 text-base font-medium mt-2">
//                   {item.GroundPrice ? `$${item.GroundPrice}` : "Price Unavailable"}
//                 </span>
//               </label>
//             </li>
//           ))
//         ) : (
//           <p className="text-neutral-500">No properties available.</p>
//         )}
//       </ul>
//       {listSelect && <Calendar listSelect={listSelect} />}
//     </div>
//   );
// }
"use client"

export default function PropertyList() {
  const [lists, setList] = useState([]);
  const [listSelect, setListSelect] = useState(null);

  const fetchUserList = async () => {
    try {
      const listData = await axiosInstance.get("/all-draft");
      setList(listData.data);
    } catch (error) {
      console.error("Error fetching property list:", error);
    }
  };

  const handlePropertySelect = (item) => {
    setListSelect(item); // Updates selected property
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div className="py-6 px-4 w-full max-w-sm bg-secondary-50 rounded-lg">
      <div className="text-neutral-500 flex justify-between">
        <span className="font-semibold">Property List ({lists.length})</span>
        <button
          onClick={() => router.push("/host/properties")}
          className="border-none text-sm font-medium hover:underline hover:scale-110 transition ease-in-out delay-150"
        >
          See All
        </button>
      </div>
      <ul className="space-y-5 mt-6 max-h-56 overflow-y-auto">
        {lists.length > 0 ? (
          lists.map((item, index) => (
            <li key={index} className="flex gap-x-4">
              <input
                type="radio"
                id={`host_property_${index}`}
                name="host_property"
                checked={listSelect?._id === item._id}
                onChange={() => handlePropertySelect(item)}
                className="hidden"
              />
              <InputRadioIcon inputId={`host_property_${index}`} checked={listSelect?._id === item._id} />
              <label htmlFor={`host_property_${index}`}>
                <span className="block text-neutral-600 text-lg font-normal">
                  {item.propertyTitle || "No Title"}
                </span>
                <span className="block text-neutral-500 text-base font-medium mt-2">
                  {item.GroundPrice ? `$${item.GroundPrice}` : "Price Unavailable"}
                </span>
              </label>
            </li>
          ))
        ) : (
          <p className="text-neutral-500">No properties available.</p>
        )}
      </ul>
      {listSelect && <Calendar listSelect={listSelect} />}
    </div>
  );
}
