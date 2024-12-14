// "use client"
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { apiData } from "@/redux/list/listSlice";
// import PropertyLoadingSkeleton from "./PropertyLoadingSkeleton";

// import PropertyGalleryItem from "./PropertyGalleryItem"
// import { useGetListingsQuery } from "@/redux/features/api/apiSlice"

// export default function PropertyGallery() {

// const { 
//   data: listings , 
//   isLoading, 
//   isError, 
// } = useGetListingsQuery()


//   return (
//     <div className="container mx-auto px-6 10 mb-10 mt-10">
//         <h3 className="text-3xl font-semibold text-primary-400">Top Rated Properties</h3>
//         <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-6 relative z-0">
//           {
//             isError 
//               ? <div>Error...</div>
//               : isLoading 
//                 ? (<> 
//                     <PropertyLoadingSkeleton/><PropertyLoadingSkeleton/><PropertyLoadingSkeleton/><PropertyLoadingSkeleton/><PropertyLoadingSkeleton/><PropertyLoadingSkeleton/>
//                   </>)
//                 : listings.map(listing => <PropertyGalleryItem key={listing['_id']} data={listing} />)                      
//           }
//         </div>
//     </div>
//   )
// }
"use client";
import { useGetListingsQuery } from "@/redux/features/api/apiSlice";
import PropertyLoadingSkeleton from "./PropertyLoadingSkeleton";
import PropertyGalleryItem from "./PropertyGalleryItem";

export default function PropertyGallery() {
  const {
    data: listings,
    isLoading,
    isError,
  } = useGetListingsQuery();

  return (
    <div className="container mx-auto px-6 mb-10 mt-10">
      <h3 className="text-3xl font-semibold text-primary-400">
        Top Rated Properties
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-6 relative z-0">
        {isError && (
          <div className="text-red-500">
            Failed to fetch listings. Please try again later.
          </div>
        )}
        {isLoading ? (
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <PropertyLoadingSkeleton key={index} />
            ))}
          </>
        ) : listings && listings.length > 0 ? (
          listings.map((listing) => (
            <PropertyGalleryItem key={listing["_id"]} data={listing} />
          ))
        ) : (
          <div className="text-neutral-500">No listings available at the moment.</div>
        )}
      </div>
    </div>
  );
}
