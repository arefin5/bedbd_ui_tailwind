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