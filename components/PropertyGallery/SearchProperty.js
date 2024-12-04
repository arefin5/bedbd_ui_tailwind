"use client"
import PropertyLoadingSkeleton from "./PropertyLoadingSkeleton";
import PropertyGalleryItem from "./PropertyGalleryItem"

export default function SearchProperty({listings}) {
console.log("listings",listings)

  return (
    <div className="container mx-auto px-6 10 mb-10 mt-10">
        <h3 className="text-3xl font-semibold text-primary-400">Search  Properties</h3>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-6 relative z-0">
          {
            listings.map(listing => <PropertyGalleryItem key={listing['_id']} data={listing} />  )                   
          }
        </div>
        <div className="result">
          
        </div>
    </div>
  )
}
// import { useState, useEffect } from "react";
// import PropertyLoadingSkeleton from "./PropertyLoadingSkeleton";
// import PropertyGalleryItem from "./PropertyGalleryItem";

// export default function SearchProperty({ listing }) {
//   // States to manage loading and error
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [listings, setListings] = useState([]);

//   useEffect(() => {
//     // Simulating loading delay and error handling
//     if (listing?.length) {
//       setTimeout(() => {
//         setListings(listing);
//         setIsLoading(false);
//         setIsError(false);
//       }, 500); // Simulated delay
//     } else {
//       setIsError(true);
//       setIsLoading(false);
//     }
//   }, [listing]);

//   return (
//     <div className="container mx-auto px-6 mb-10 mt-10">
//       <h3 className="text-3xl font-semibold text-primary-400">Search  Properties</h3>
//       <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-6 relative z-0">
//         {isError ? (
//           <div className="col-span-full text-center text-red-500">
//             Error loading properties. Please try again later.
//           </div>
//         ) : isLoading ? (
//           <>
//             {Array.from({ length: 8 }).map((_, index) => (
//               <PropertyLoadingSkeleton key={index} />
//             ))}
//           </>
//         ) : (
//           // Render property items
//           listings.map((listing) => (
//             <PropertyGalleryItem key={listing["_id"]} data={listing} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
