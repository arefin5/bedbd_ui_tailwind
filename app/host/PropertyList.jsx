

// "use client";
// import { useRouter } from "next/navigation";
// import InputRadioIcon from "./InputRadioIcon"; // Assuming this is your checkbox component
// import Calendar from "./Calendar";
// import usePropertyList from "./usePropertyList";

// export default function PropertyList() {
//   const { lists, selectedProperty, selectProperty } = usePropertyList();
//   const router = useRouter();

//   return (
//     <div className="py-6 px-4 w-full max-w-sm bg-secondary-50 rounded-lg flex">
//       <div className="text-neutral-500  justify-between">
//         <span className="font-semibold">Property List ({lists.length})</span>
//         <button
//           onClick={() => router.push("/host/properties")}
//           className="border-none text-sm font-medium hover:underline hover:scale-110 transition ease-in-out delay-150"
//         >
//           See All
//         </button>
//       </div>
//      <div className="flex"
//      >
//         <ul className="space-y-5 mt-6 max-h-56 overflow-y-auto">
//         {lists.length > 0 ? (
//           lists.map((item, index) => (
//             <li key={index} className="flex gap-x-4 items-center">
//               <input
//                 type="radio"
//                 id={`host_property_${index}`}
//                 name="host_property"
//                 checked={selectedProperty?._id === item._id}
//                 onChange={() => selectProperty(item)}
//                 className="hidden"
//               />
//               {/* Show the checkbox always */}
//               <InputRadioIcon 
//                 inputId={`host_property_${index}`} 
//                 checked={selectedProperty?._id === item._id} 
//               />
//               <label 
//                 htmlFor={`host_property_${index}`} 
//                 onClick={() => selectProperty(item)} 
//                 className="cursor-pointer"
//               >
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
//       <div className="clndr">
//       {selectedProperty && <Calendar listSelect={selectedProperty} />}<div>
//      </div>
//     </div>
//   );
// }
"use client";
import Chart from './Chart';
import RevenueChart from './RevenueChart';
import axiosInstance from '@/redux/services/axiosInstance';
import { useRouter } from "next/navigation";
import InputRadioIcon from "./InputRadioIcon"; // Assuming this is your checkbox component
import Calendar from "./Calendar";
import usePropertyList from "./usePropertyList";
import { useEffect, useState } from 'react';
import HostNotification from "./HostNotification"

export default function PropertyList() {
  const { lists, selectedProperty, selectProperty } = usePropertyList();
  const router = useRouter();
   const canPayment=300
   const sPayment=2000;
  const [authorBookings, setAuthorBookings] = useState([]);
 const fetchAuthorListBooking = async () => {
    try {
      const listData = await axiosInstance.get("/all-bookind-by-author");
      setAuthorBookings(listData.data);
    } catch (error) {
      console.error("Error fetching author bookings:", error);
    }
  };
  useEffect(() => {
    fetchAuthorListBooking();
  }, []);

  return (
    <div>
      
    
    <div className="py-6 px-4 w-full  rounded-lg flex flex-col lg:flex-row gap-6">
      {/* Property List Section */}
      <div className="w-full max-w-sm bg-secondary-50 rounded-md">
        <div className="text-neutral-500 flex justify-between mt-6 ">
          <span className="font-semibold ml-3">Property List ({lists.length})</span>
          <button
            onClick={() => router.push("/host/properties")}
            className="mr-4 border-none text-sm font-medium hover:underline hover:scale-110 transition ease-in-out delay-150"
          >
            See All
          </button>
        </div>
        <ul className="ml-3 space-y-5 mt-6 max-h-56 overflow-y-auto">
          {lists.length > 0 ? (
            lists.map((item, index) => (
              <li key={index} className="flex gap-x-4 items-center">
                <input
                  type="radio"
                  id={`host_property_${index}`}
                  name="host_property"
                  checked={selectedProperty?._id === item._id}
                  onChange={() => selectProperty(item)}
                  className="hidden"
                />
                {/* Show the checkbox always */}
                <InputRadioIcon
                  inputId={`host_property_${index}`}
                  checked={selectedProperty?._id === item._id}
                />
                <label
                  htmlFor={`host_property_${index}`}
                  onClick={() => selectProperty(item)}
                  className="cursor-pointer"
                >
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

      {/* Calendar Section */}
      {selectedProperty && (
        <div className="flex-grow bg-secondary-50">
          <Calendar listSelect={selectedProperty} />
        </div>
        
      )}
     {selectedProperty && (
        
         <div className="flex-grow bg-secondary-50 mt-6s rounded-lg">
           <Chart data={[{ value: sPayment, title: 'Booked' },
         { value: canPayment||0, title: 'Canceled' }]} title="Booked & Canceled" totalValue={sPayment+canPayment ||0} />
        </div>
      )}
      
    </div>
    <div className="py-6 px-4 w-full  flex flex-col lg:flex-row gap-6">
      
   {selectedProperty && (
    <div className="w-full max-w-sm bg-secondary-50 rounded-lg">
<div>
     <div className="text-neutral-500 flex justify-between mt-6 mt-4 mb-4">
          <span className="font-semibold ml-3">Property List ({lists.length})</span>
          <button
            onClick={() => router.push("/host/properties")}
            className="mr-4 border-none text-sm font-medium hover:underline hover:scale-110 transition ease-in-out delay-150"
          >
            See All
          </button>
        </div>
  <HostNotification selectedProperty={selectedProperty}/>
</div>
    </div>
    )}
    {selectedProperty && (
        
         <div className="flex-grow bg-secondary-50 mt-6s rounded-md">
         <RevenueChart bookings={authorBookings} />
        </div>
      )}
 </div>
    </div>
  );
}
