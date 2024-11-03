

// "use client";
// import axiosInstance from "@/redux/services/axiosInstance";
// import InputRadioIcon from "./InputRadioIcon";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function PropertyList({ listSelect, setListSelect }) {
//     const [lists, setList] = useState([]);
//     const router = useRouter();

//     const fetchUserList = async () => {
//         try {
//             const listData = await axiosInstance.get("/all-draft");
//             console.log(listData.data);
//             setList(listData.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     const handlePropertySelect = (item) => {
//         if (listSelect?.propertyTitle === item.propertyTitle) {
//             setListSelect(null); // Deselect if already selected
//         } else {
//             setListSelect(item); // Select the full item object
//         }
//     };
//     useEffect(() => {
//         fetchUserList();
       
//     }, []);

//     const goToProperty = () => {
//         router.push("/host/properties");
//     };

   

//     return (
//         <div className="py-6 px-4 w-full max-w-sm bg-secondary-50 rounded-lg">
//             <div className="text-neutral-500 flex justify-between">
//                 <span className="font-semibold">
//                     Property List ({lists?.length || 0})
//                 </span>
//                 <button
//                     onClick={goToProperty} 
//                     className="border-none text-sm font-medium hover:underline hover:scale-110 transition ease-in-out delay-150">
//                     see all
//                 </button>
//             </div>
//             <ul className="space-y-5 mt-6 max-h-56 overflow-y-auto">
//                 {lists && lists.length > 0 ? (
//                     lists.map((item, index) => (
//                         <li key={index} className="flex gap-x-4">
//                             <input
//                                 type="checkbox"
//                                 id={`host_property_${index}`}
//                                 name="host_property"
//                                 value={item.propertyTitle}
//                                 checked={listSelect?.propertyTitle === item.propertyTitle}
//                                 onChange={() => handlePropertySelect(item)}
//                                 className="hidden"
//                             />
//                             <InputRadioIcon inputId={`host_property_${index}`} />
//                             <label htmlFor={`host_property_${index}`} className="">
//                                 <span className="block text-neutral-600 text-lg font-normal">
//                                     {item.propertyTitle || "No Title"}
//                                 </span>
//                                 <span className="block text-neutral-500 text-base font-medium mt-2">
//                                     {item.GroundPrice ? `$${item.GroundPrice}` : "Price Unavailable"}
//                                 </span>
//                             </label>
//                         </li>
//                     ))
//                 ) : (
//                     <p className="text-neutral-500">No properties available.</p>
//                 )}
//             </ul>
//         </div>
//     );
// }

"use client";
import axiosInstance from "@/redux/services/axiosInstance";
import InputRadioIcon from "./InputRadioIcon";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PropertyList({ listSelect, setListSelect }) {
  const [lists, setList] = useState([]);
  const router = useRouter();

  const fetchUserList = async () => {
    try {
      const listData = await axiosInstance.get("/all-draft");
      setList(listData.data);
    } catch (error) {
      console.error("Error fetching property list:", error);
    }
  };

  const handlePropertySelect = (item) => {
    setListSelect((prev) =>
      prev?._id === item._id ? null : item // Deselect if already selected
    );
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <div className="py-6 px-4 w-full max-w-sm bg-secondary-50 rounded-lg">
      <div className="text-neutral-500 flex justify-between">
        <span className="font-semibold">Property List ({lists?.length || 0})</span>
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
                type="checkbox"
                id={`host_property_${index}`}
                name="host_property"
                value={item.propertyTitle}
                checked={listSelect?._id === item._id}
                onChange={() => handlePropertySelect(item)}
                className="hidden"
              />
              <InputRadioIcon inputId={`host_property_${index}`} />
              <label htmlFor={`host_property_${index}`} className="">
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
    </div>
  );
}
