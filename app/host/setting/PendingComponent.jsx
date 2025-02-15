// import React from 'react';

// const PendingComponent = ({ data, onApprove, onReject }) => {
//   const formatDate = (date) => new Date(date).toLocaleDateString();
//   const nightCount = (checkin, checkout) =>
//     Math.ceil((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24));

//   return (
//     <div>
//       {data.length === 0 && <p>No pending bookings available.</p>}
//       {data.map((item) => (
//         <ul
//           key={item._id}
//           className="ml-10 text-base text-neutral-600 font-medium grid grid-cols-[174px_240px_110px_110px_100px_190px] place-items-center bg-white rounded-lg py-3"
//         >
//           <li>{item.property.propertyTitle}</li>
//           <li>
//             {item.guest}, {nightCount(item.checkinDate, item.checkoutDate)} days
//           </li>
//           <li>{formatDate(item.checkinDate)}</li>
//           <li>{formatDate(item.checkoutDate)}</li>
//           <li>{item.basePrice}</li>
//           <li className="text-sm font-medium space-x-2">
//             <button
//               className="py-[6px] px-3 border border-[#F63F1F] rounded-md text-[#F63F1F]"
//               onClick={() => onReject(item._id)}
//             >
//               Cancel
//             </button>
//             <button
//               className="py-[8px] px-3 text-white bg-primary-400 rounded-md"
//               onClick={() => onApprove(item._id)}
//             >
//               Approve
//             </button>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );
// };

// export default PendingComponent;
// import React from 'react';

// const PendingComponent = ({ data, onApprove, onReject }) => {
//   const formatDate = (date) => new Date(date).toLocaleDateString();
//   const nightCount = (checkin, checkout) =>
//     Math.ceil((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24));

//   return (
//     <div>
//       {/* {data.length === 0 && <p>No pending bookings available.</p>} */}
     
//         <ul
//          className="ml-10 text-base text-neutral-600 font-medium grid grid-cols-[174px_240px_110px_110px_100px_190px] place-items-center bg-white rounded-lg py-3"
//         >
//           <li>close Booking Time</li>
//           <li>
//            Add Property
//           </li>
//           <li>Cancellation policy</li>
//           <li>Message Settings</li>
//           <li>Notification Settings</li>
//           <li>Instant Approved</li>

//         </ul>
  
//     </div>
//   );
// };

// export default PendingComponent;
// import React from 'react';

// const PendingComponent = ({ data, onApprove, onReject }) => {
//   const formatDate = (date) => new Date(date).toLocaleDateString();
//   const nightCount = (checkin, checkout) =>
//     Math.ceil((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24));

//   return (
//     <div>
//       {/* {data.length === 0 && <p>No pending bookings available.</p>} */}
     
//       <ul className="ml-10 text-base text-neutral-600 font-medium bg-white rounded-lg py-3">
//         <div className="flex justify-between w-full">
//           <li className="flex-1">Close Booking Time</li>
//           <li className="flex-1">Add Property</li>
//         </div>
//         <div className="grid grid-cols-4 gap-4 place-items-center">
//           <li>Cancellation Policy</li>
//           <li>Message Settings</li>
//           <li>Notification Settings</li>
//           <li>Instant Approved</li>
//         </div>
//       </ul>
  
//     </div>
//   );
// };

// export default PendingComponent;

import React from 'react';

const PendingComponent = ({ data, onApprove, onReject }) => {
  const formatDate = (date) => new Date(date).toLocaleDateString();
  const nightCount = (checkin, checkout) =>
    Math.ceil((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24));

  return (
    <div>
      {/* {data.length === 0 && <p>No pending bookings available.</p>} */}
     
      <ul className="ml-10 text-base text-neutral-600 font-medium bg-white rounded-lg py-3">
        <div className="flex justify-between w-full">
          <li className="flex-1">Close Booking Time</li>
          <li className="flex-1">Add Property</li>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <li>Cancellation Policy</li>
          <li>Message Settings</li>
          <li>Notification Settings</li>
          <li>Instant Approved</li>
        </div>
      </ul>
  
    </div>
  );
};

export default PendingComponent;