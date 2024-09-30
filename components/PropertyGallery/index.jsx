"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiData } from "@/redux/list/listSlice";

import PropertyGalleryItem from "./PropertyGalleryItem"

export default function PropertyGallery() {
  const dispatch = useDispatch();
  const { lists, isLoading, error } = useSelector((state) => state.listSlice);
  useEffect(() => {
    dispatch(apiData());
  }, [lists]);
  console.log(lists)
console.log("test")
  return (
    <div className="container mx-auto px-6 10 mb-10 mt-10">
        <h3 className="text-3xl font-semibold text-primary-400">Top Rated Properties</h3>
        <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-6">
            <PropertyGalleryItem/>
            <PropertyGalleryItem/>
            <PropertyGalleryItem/>
            <PropertyGalleryItem/>

            <PropertyGalleryItem/>
            <PropertyGalleryItem/>
            <PropertyGalleryItem/>
            <PropertyGalleryItem/>
            <PropertyGalleryItem/>
        </div>
    </div>
  )
}
