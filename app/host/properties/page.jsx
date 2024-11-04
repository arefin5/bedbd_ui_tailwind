"use client"
import axiosInstance from "@/redux/services/axiosInstance"
import Icon from "/components/Icon"
import Image from "next/image"
import { useState, useEffect } from "react";

export default function page() {
  const listView = false

  
  const [authorBookings, setAuthorBookings] = useState([]);

  const fetchAuthorListBooking = async () => {
    try {
      const listData = await axiosInstance.get("/all-draft");
      setAuthorBookings(listData.data);
    console.log(listData.data)
    } catch (error) {
      console.log("error",error)
      console.error("Error fetching author bookings:", error);
    }
  };
useEffect(()=>{
  fetchAuthorListBooking();
},[authorBookings])
  return (
    <div className={` ${listView ? 'grid space-y-4 text-center text-base py-4 text-neutral-400' : 'flex flex-wrap gap-6'} font-medium`}>
    {authorBookings.length === 0 ? (
      <div className="text-center text-neutral-500">No bookings found.</div>
    ) : (
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
