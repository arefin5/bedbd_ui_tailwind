
// import { Minus, Plus } from "lucide-react";
// import { useSelector } from "react-redux";

// export default function GuestCountInput({ gust, setGust }) {
//   const { isMapOpen } = useSelector((state) => state.search.location);

//   // Increment guest count
//   const handleIncrement = () => setGust(gust + 1);

//   // Decrement guest count (minimum 0)
//   const handleDecrement = () => {
//     if (gust > 0) {
//       setGust(gust - 1);
//     }
//   };

//   return (
//     <div
//       className={`${
//         isMapOpen
//           ? "w-full px-6 py-2.5 rounded-full shadow-search-input md:shadow-none md:rounded-none md:py-0 md:px-0"
//           : "relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4"
//       } relative`}
//     >
//       <label
//         className={`${
//           isMapOpen
//             ? "md:text-neutral-500 md:text-lg mb-2"
//             : "text-neutral-600 text-xs md:text-sm"
//         } font-semibold`}
//       >
//         Guest
//       </label>
//       <div className="flex items-center justify-between relative">
//         <Minus
//           className={`${
//             isMapOpen ? "cursor-pointer" : "cursor-pointer"
//           } absolute left-2 bottom-2.5`}
//           size={24}
//           onClick={handleDecrement}
//         />
//         <input
//           className={`${
//             isMapOpen
//               ? "block w-full md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md text-center"
//               : "block bg-transparent placeholder-medium placeholder-text-sm md:max-w-24"
//           }`}
//           placeholder={isMapOpen ? "0" : "Adult, infant 1"}
//           value={gust}
//           readOnly
//         />
//         <Plus
//           className={`${
//             isMapOpen ? "cursor-pointer" : "cursor-pointer"
//           } absolute right-2 bottom-2.5`}
//           size={24}
//           onClick={handleIncrement}
//         />
//       </div>
//     </div>
//   );
// }

// import { Minus, Plus } from "lucide-react";
// import { useSelector } from "react-redux";

// export default function GuestCountInput({ gust, setGust }) {
//   const { isMapOpen } = useSelector((state) => state.search.location);

//   // Increment guest count
//   const handleIncrement = () => setGust(gust + 1);

//   // Decrement guest count (minimum 0)
//   const handleDecrement = () => {
//     if (gust > 0) {
//       setGust(gust - 1);
//     }
//   };

//   return (
//     <div
//       className={`${
//         isMapOpen
//           ? "w-full px-6 py-2.5 rounded-full shadow-search-input md:shadow-none md:rounded-none md:py-0 md:px-0"
//           : "relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4"
//       } relative flex items-center justify-between`}
//     >
//       <label
//         className={`${
//           isMapOpen
//             ? "md:text-neutral-500 md:text-lg mb-2"
//             : "text-neutral-600 text-xs md:text-sm"
//         } font-semibold`}
//       >
//         Guest
//       </label>
//       <div className="flex items-center justify-center space-x-2 w-full">
//         <Minus
//           className={`${
//             isMapOpen ? "cursor-pointer" : "cursor-pointer"
//           }`}
//           size={24}
//           onClick={handleDecrement}
//         />
//         <input
//           className={`${
//             isMapOpen
//               ? "block w-16 md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md text-center"
//               : "block bg-transparent placeholder-medium placeholder-text-sm md:max-w-24"
//           }`}
//           placeholder={isMapOpen ? "0" : "Adult, infant 1"}
//           value={gust}
//           readOnly
//         />
//         <Plus
//           className={`${
//             isMapOpen ? "cursor-pointer" : "cursor-pointer"
//           }`}
//           size={24}
//           onClick={handleIncrement}
//         />
//       </div>
//     </div>
//   );
// }
import { Minus, Plus } from "lucide-react";
import { useSelector } from "react-redux";

export default function GuestCountInput({ gust, setGust }) {
  const { isMapOpen } = useSelector((state) => state.search.location);

  // Increment guest count
  const handleIncrement = () => setGust(gust + 1);

  // Decrement guest count (minimum 0)
  const handleDecrement = () => {
    if (gust > 0) {
      setGust(gust - 1);
    }
  };

  return (
    // <div
    //   className={`${
    //     isMapOpen
    //       ? "w-full px-6 py-2.5 rounded-full shadow-search-input md:shadow-none md:rounded-none md:py-0 md:px-0"
    //       : "relative px-6 py-2.5 block rounded-full shadow-search-input | md:shadow-none md:h-max md:rounded-none md:p-0 md:custom-left-line-150 md:ml-4"
    //   } relative`}
    // >
    //   <label
    //     className={`${
    //       isMapOpen
    //         ? "md:text-neutral-500 md:text-lg mb-2"
    //         : "text-neutral-600 text-xs md:text-sm"
    //     } font-semibold block mb-2`}
    //   >
    //     Guest
    //   </label>
    //   <div className="flex items-center justify-center space-x-2 w-full">
    //     <Minus
    //       className="cursor-pointer"
    //       size={24}
    //       onClick={handleDecrement}
    //     />
    //     <input
    //       className={`${
    //         isMapOpen
    //           ? "block w-16 md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md text-center"
    //           : "block bg-transparent placeholder-medium placeholder-text-sm md:max-w-24"
    //       }`}
    //       placeholder={isMapOpen ? "0" : "Adult, infant 1"}
    //       value={gust}
    //       readOnly
    //     />
    //     <Plus
    //       className="cursor-pointer"
    //       size={24}
    //       onClick={handleIncrement}
    //     />
    //   </div>
    // </div>
  //   <div className="flex items-center justify-center space-x-4 w-full">
  //   <Minus
  //     className="cursor-pointer"
  //     size={24}
  //     onClick={handleDecrement}
  //   />
  //   <input
  //     className={`${
  //       isMapOpen
  //         ? "block w-16 md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md text-center"
  //         : "block bg-transparent placeholder-medium placeholder-text-sm md:max-w-24"
  //     }`}
  //     placeholder={isMapOpen ? "0" : "Adult, infant 1"}
  //     value={gust}
  //     readOnly
  //   />
  //   <Plus
  //     className="cursor-pointer"
  //     size={24}
  //     onClick={handleIncrement}
  //   />
  // </div>
//   <div className="flex items-center justify-center w-full">
//   <Minus
//     className="cursor-pointer mr-4"
//     size={24}
//     onClick={handleDecrement}
//   />
//   <input
//     className={`${
//       isMapOpen
//         ? "block w-16 md:px-2.5 md:py-2 md:border md:border-neutral-300 md:rounded-md text-center"
//         : "block bg-transparent placeholder-medium placeholder-text-sm md:max-w-24"
//     }`}
//     placeholder={isMapOpen ? "0" : "Adult, infant 1"}
//     value={gust}
//     readOnly
//   />
//   <Plus
//     className="cursor-pointer ml-4"
//     size={24}
//     onClick={handleIncrement}
//   />
// </div>
<div className="flex items-center justify-center w-full">
  <Minus
    className="cursor-pointer mr-2"
    size={24}
    onClick={handleDecrement}
  />
  <input
    className={`${
      isMapOpen
        ? "block md:px-2 md:py-1.5 md:border md:border-neutral-300 md:rounded-md text-center"
        : "block bg-transparent text-center"
    }`}
    style={{ maxWidth: "1rem" }}
    placeholder={isMapOpen ? "0" : "Adult, infant 1"}
    value={gust}
    readOnly
  />
  <Plus
    className="cursor-pointer ml-2"
    size={24}
    onClick={handleIncrement}
  />
</div>

  );
}
