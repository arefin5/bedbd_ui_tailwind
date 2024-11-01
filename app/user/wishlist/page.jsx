
"use client";
import axiosInstance from '@/redux/services/axiosInstance';
import PropertyGalleryItem from '/components/PropertyGallery/PropertyGalleryItem';
import { useEffect, useState } from 'react';

export default function Wishlist() {
  const [list, setList] = useState([]);

  const userFavorites = async () => {
    try {
      const response = await axiosInstance.get("/user-favorite-list");
      setList(response.data.user.favoritelist); 
      // console.log(response.data.user.favoritelist);
    } catch (error) {
      console.error("Failed to fetch user favorites:", error);
    }
  };

  useEffect(() => {
    userFavorites();
  }, [list]);

  return (
    <div className="relative">
      <h3 className="text-3xl text-primary-400 font-medium mt-10 ml-6">Wishlist</h3>
      <div className="grid grid-cols-3 gap-6 pl-14 mt-6">
        {list && list.length !== 0 ? (
          list.map((listing) => (
            <PropertyGalleryItem key={listing.id} data={listing}/> // Pass item props to component
          ))
        ) : (
          <p className="col-span-3 text-center">No items in your wishlist.</p> // Display message if empty
        )}
      </div>
    </div>
  );
}
