"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiData } from "@/redux/list/listSlice";
import PropertyLoadingSkeleton from "./PropertyLoadingSkeleton";

import PropertyGalleryItem from "./PropertyGalleryItem"
import { useGetListingsQuery } from "@/redux/features/api/apiSlice"

export default function PropertyGallery() {

const { 
  data: listings , 
  isLoading, 
  isError, 
} = useGetListingsQuery()


  return (
    <div className="container mx-auto px-6 10 mb-10 mt-10">
        <h3 className="text-3xl font-semibold text-primary-400">Top Rated Properties</h3>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-6 relative z-0">
          {
            isError 
              ? <div>Error...</div>
              : isLoading 
                ? (<> 
                    <PropertyLoadingSkeleton/><PropertyLoadingSkeleton/><PropertyLoadingSkeleton/><PropertyLoadingSkeleton/><PropertyLoadingSkeleton/><PropertyLoadingSkeleton/>
                  </>)
                : listings.map(listing => <PropertyGalleryItem key={listing['_id']} data={listing} />)                      
          }
        </div>
    </div>
  )
}
