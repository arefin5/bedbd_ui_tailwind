'use client'
import PropertyGallery from "../PropertyGallery"
import { useGetListingsQuery } from "@/redux/features/api/apiSlice"


export default function index() {

    const { 
            data: listings , 
            isLoading, 
            isError, 
        } = useGetListingsQuery()


  if(!isLoading && !isError ){
    console.log(listings)
  }


  return (
    <PropertyGallery  />
  )
}
