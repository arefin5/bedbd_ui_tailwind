"use client"
import axiosInstance from "@/redux/services/axiosInstance"
import Icon from "/components/Icon"
import Image from "next/image"
import PropertyItem from "./PropertyItem"
import { useState, useEffect } from "react";
import Link from "next/link"
import { sampleData  } from "./sampleData";
import { FilePen, Trash, EllipsisVertical, List, LayoutGrid } from "lucide-react"

export default function page() {
  const [listView, setListView] = useState(true)

  const [authorBookings, setAuthorBookings] = useState(sampleData);


//   const fetchAuthorListBooking = async () => {
//     try {
//       const listData = await axiosInstance.get("/all-draft");
//       setAuthorBookings(listData.data);
//     console.log(listData.data)
//     } catch (error) {
//       console.log("error",error)
//       console.error("Error fetching author bookings:", error);
//     }
//   };
// useEffect(()=>{
//   fetchAuthorListBooking();
// },[authorBookings])

console.log(sampleData)
  return(
    <div className=" w-full px-8 py-12">
      <div className="relative w-full h-full rounded-lg overflow-hidden bg-secondary-50 pt-16 px-6">
        <div className=" w-fit bg-white absolute top-4 right-24">
          <button disabled={listView} onClick={()=>setListView(true)} className={`rounded-lg p-2 ${listView ? 'bg-secondary-50': 'text-neutral-300 hover:text-neutral-900'}  `}><List size={24} className="icon"/></button>
          <button disabled={!listView} onClick={()=>setListView(false)}  className={`rounded-lg p-2 ${!listView ? 'bg-secondary-50': 'text-neutral-300 hover:text-neutral-900'} `} ><LayoutGrid size={24} className="icon"/> </button>
        </div>

        {/* tabel title */}
        { listView &&
          <div className=" w-full text-neutral-600 grid grid-cols-host-property bg-white border border-neutral-100  h-14  items-center rounded-lg font-medium text-base">
            <div className="text-center"> SI No. </div>
            <div className="text-center"> Property ID </div>
            <div> Property Name </div>
            <div className="text-center"> Action </div>
          </div>
        }
        
        <div className={`${listView ? 'grid space-y-4 mt-6' : 'w-full  flex justify-center flex-wrap gap-6'} text-neutral-400 `}>
          {
            authorBookings
              .map((booking, index)=><PropertyItem key={booking._id} data={booking} index={index} listView={listView}/>)
          }
          
        </div>
      </div>

      {/* {
        sampleData
          .map((booking, index)=>(<PropertyItem data={booking} index={index} listView={listView}/>))
      } */}

      {/* <div className="marker-class max-h-min">something</div> */}
    </div>
  )

  return (
    <div className={` ${listView ? 'grid space-y-4 text-center text-base py-4 text-neutral-400' : 'flex flex-wrap gap-6'} font-medium`}>
    {authorBookings.length === 0 
        ? ( <div className="text-center text-neutral-500">No bookings found.</div> ) 
        : (
      authorBookings.map((booking, index) => {
        return (
          <div key={booking._id} className={`bg-white ${listView ? 'rounded-md grid grid-cols-host-property py-1' : 'w-80 rounded-xl relative pb-6'}`}>
            {listView ? (
              <>
                <div className="py-2">{index + 1}</div>
                <div className="py-2 text-center text-secondary-400 hover:underline cursor-pointer">{_id}</div>
              </>
            ) : (
              <div className="w-80 h-48 flex flex-nowrap overflow-x-scroll no-scrollbar rounded-xl mb-4">
                <div className="relative h-full w-full flex">
                  {booking.images && booking.images.length > 0 ? (
                    booking.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="flex-shrink-0 w-full h-full">
                        <Image alt={`Property Image ${imgIndex + 1}`} className='object-cover' src={image.url} fill />
                      </div>
                    ))
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-300">No images available</div>
                  )}
                </div>
              </div>
            )}
            
            <div className={`${listView ? 'py-2 text-center' : 'text-primary-400 text-xl font-semibold px-4'}`}>
              {booking.propertyTitle}
            </div>
  
            {!listView && (
              <>
                <div className="text-neutral-300 text-base px-4 mb-6">
                  {booking.location.address || 'Unknown Location'}
                </div>
                <button className="btn btn-secondary max-w-28 absolute left-4 bottom-4">Preview</button>
              </>
            )}
  
            <div className="pr-4">
              <div className="w-40 float-right flex gap-4">
                <div className="p-2 rounded-xl hover:bg-green-50">
                  <Icon name="file-pen" className="icon" size={24} />
                </div>
                <div className="p-2 rounded-xl hover:bg-red-50">
                  <Icon name="trash" className="icon" size={24} />
                </div>
                <div className="p-2 rounded-xl hover:bg-blue-50">
                  <Icon name="ellipsis-vertical" className="icon" size={24} />
                </div>
              </div>
            </div>
          </div>
        );
      })
    )}
  </div>
  )
}
