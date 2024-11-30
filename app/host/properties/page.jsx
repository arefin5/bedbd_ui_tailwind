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


  const fetchAuthorListBooking = async () => {
    try {
      const listData = await axiosInstance.get("/all-draft");
      setAuthorBookings(listData.data);
          // console.log(listData.data);
    } catch (error) {
      console.log("error",error)
      console.error("Error fetching author bookings:", error);
    }
  };
useEffect(()=>{
  fetchAuthorListBooking();
},[authorBookings])

// console.log(sampleData)
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
            authorBookings &&   authorBookings.length ?(
              authorBookings
              .map((booking, index)=><PropertyItem key={booking._id} data={booking} index={index} listView={listView}/>)
            ):(

              <p>You Have No Property yet </p>
            )
          }
          
        </div>
      </div>
    </div>
  )
}
