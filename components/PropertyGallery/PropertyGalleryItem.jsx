
'use client';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useRef, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import Link from 'next/link';
import AddFavorite from "../AddFavorite";

const  PropertyGalleryItem=({ data })=> {
  const images = useMemo(() => data.images || [], [data.images]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageContainerRef = useRef(null);
  const { selectedDate } = useSelector(state => state.search);

  const image = images[currentImageIndex] || { url: '' };

  const buttonVisibility = useMemo(() => ({
    showLeftButton: currentImageIndex > 0,
    showRightButton: currentImageIndex < images.length - 1,
  }), [currentImageIndex, images.length]);

  const leftButtonClick = useCallback(() => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }, [currentImageIndex]);

  const rightButtonClick = useCallback(() => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }, [currentImageIndex, images.length]);

  const averageRating = useMemo(() => {
    if (data.reviews.length === 0) return 0;
    const totalRating = data.reviews.reduce((sum, review) => sum + review.avgRating, 0);
    return Math.floor(totalRating / data.reviews.length);
  }, [data.reviews]);

  const availableDate = useMemo(() => {
    return data.availablecheck?.checkInStart === "asap"
      ? data.createdAt
      : data.availablecheck?.checkInStart;
  }, [data.availablecheck, data.createdAt]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(2, '0')}/${String(date.getUTCDate()).padStart(2, '0')}`;
  };

  const formatToDDMMYYYY = (timestamp) => {
    const date = new Date(timestamp);
    return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
  };

  const checkIn = selectedDate[0] > 0 ? `checkIn=${formatToDDMMYYYY(selectedDate[0])}` : "";
  const checkOut = selectedDate[1] > 0 ? `&checkOut=${formatToDDMMYYYY(selectedDate[1])}` : "";
  const query = checkIn ? `?${checkIn}${checkOut}` : "";
  const targetUrl = `/listing/${data._id}${query}`;

  return (
    <div className="min-w-290px max-w-395px">
      <div ref={imageContainerRef} className="relative z-10 flex transition-transform duration-500 ease-in-out overflow-x-auto rounded-lg no-horizontal-scrollbar">
        
          <div className="z-0 relative flex-none w-full h-auto aspect-[145/89] min-h-178px max-h-242px max-w-395px object-cover items-center">
            <Link href={targetUrl} target="_blank" rel="noopener noreferrer">
              <Image alt="property image" src={image.url} fill className="object-cover" />
            </Link>
          </div>
        
        {buttonVisibility.showLeftButton &&
          <button onClick={leftButtonClick} className="z-20 rounded bg-gray-900 group absolute-y-center p-1 left-3 bg-opacity-30 hover:bg-opacity-50">
            <ChevronLeft className="shadow-xl drop-shadow-xl opacity-50 group-hover:opacity-80" color="#ffffff" />
          </button>
        }
        {buttonVisibility.showRightButton &&
          <button onClick={rightButtonClick} className="z-20 rounded bg-gray-900 group absolute-y-center p-1 right-3 bg-opacity-30 hover:bg-opacity-50">
            <ChevronRight className="shadow-xl drop-shadow-xl opacity-50 group-hover:opacity-80" color="#ffffff" />
          </button>
        }
        
        <AddFavorite data={data} />
        
      </div>
      <Link href={targetUrl} target="_blank" rel="noopener noreferrer">
        <div className="mt-2">
          <div className="inline-block float-left h-fit mt-auto text-xl text-neutral-500 font-semibold ">
            {data.location?.streetAddress.replace(/^(.{10}).*$/, '$1...') + ', ' + data.location?.country}
          </div>
          <div className="pl-auto text-end text-2xl text-primary-400 font-semibold">${data.GroundPrice}</div>
          <div className="inline-block float-left text-neutral-400 text-base font-medium">
          Available on {formatDate(availableDate)}</div>
          <div className="text-end flex float-right items-center justify-center text-base font-medium">
            <Image alt="rating icon" className="" src='/icons/star_gray.svg' height={24} width={24} />
            <span className="mt-auto text-neutral-600">{averageRating}</span>
            <span className="mt-auto text-neutral-500">({data.reviews.length})</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default React.memo(PropertyGalleryItem);