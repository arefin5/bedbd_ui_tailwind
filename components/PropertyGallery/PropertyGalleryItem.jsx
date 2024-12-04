
'use client';
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import PropertyLoadingSkeleton from "./PropertyLoadingSkeleton";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Link from 'next/link';

export default function PropertyGalleryItem({ data }) {
  const [images, setImages] = useState(data.images || []); // Use dynamic images from props
  const [image, setImage] = useState(images[0] || { url: '' });
  const imageContainerRef = useRef(null);
  const {selectedDate} = useSelector(state => state.search)
  console.log(selectedDate)
  const [buttonVisibility, setButtonVisibility] = useState({
    showLeftButton: false,
    showRightButton: true,
  });

  const updateButtonVisibility = (currentIndex) => {
    setButtonVisibility({
      showLeftButton: currentIndex > 0,
      showRightButton: currentIndex < images.length - 1,
    });
  };

  const leftButtonClick = () => {
    const currentImageIndex = images.findIndex(img => img.url === image.url);
    if (currentImageIndex > 0) {
      setImage(images[currentImageIndex - 1]);
      updateButtonVisibility(currentImageIndex - 1);
    }
  };

  const rightButtonClick = () => {
    const currentImageIndex = images.findIndex(img => img.url === image.url);
    if (currentImageIndex < images.length - 1) {
      setImage(images[currentImageIndex + 1]);
      updateButtonVisibility(currentImageIndex + 1);
    }
  };

  const { location, GroundPrice, reviews, availablecheck, createdAt } = data;

  // Calculate the total sum of ratings and the count of reviews
  const totalReviews = reviews.length;
  let averageRating = 0;

  if (totalReviews === 0) {
    console.log('No reviews available.');
  } else {
    const totalRating = reviews.reduce((sum, review) => sum + review.avgRating, 0);
    averageRating = Math.floor(totalRating / totalReviews);
  }

  // Determine the availableDate
  let availableDate = 0;
  if (availablecheck.checkInStart === "asap") {
    availableDate = createdAt;
  } else {
    availableDate = availablecheck.checkInStart;
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(2, '0')}/${String(date.getUTCDate()).padStart(2, '0')}`;
  };

  const formatToDDMMYYYY = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  
  const checkIn = selectedDate[0] > 0 ? `checkIn=${formatToDDMMYYYY(selectedDate[0])}` : "";
  const checkOut = selectedDate[1] > 0 ? `&checkOut=${formatToDDMMYYYY(selectedDate[1])}` : "";
  const query = checkIn ? `?${checkIn}${checkOut}` : "";
  const targetUrl = `/listing/${data._id}${query}`;

  return (
    <div className="min-w-290px max-w-395px">
      <div ref={imageContainerRef} className="relative z-10 flex transition-transform duration-500 ease-in-out overflow-x-auto rounded-lg no-horizontal-scrollbar">
        <div className="z-0 relative flex-none w-full h-auto aspect-[145/89] min-h-178px max-h-242px max-w-395px object-cover items-center">
        {/* {{
    pathname: '/new-page',
    query: { value1: 10, value2: 20 },
  }} */}

          <Link href={targetUrl}
            // href={`/listing/${data._id}?checkIn=10&value2=20`}
            // href={{pathname:`/listing/${data._id}`, query: { value1: 10, value2: 20 }}} 
            target="_blank" rel="noopener noreferrer">
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
        <button className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
          <Heart className="shadow-xl drop-shadow-xl opacity-50 group-hover:opacity-80" color="#ffffff" />
        </button>
      </div>
      <div className="mt-2">
        <Link href={`/listing/${data._id}`} target="_blank" rel="noopener noreferrer">
          <div className="inline-block float-left h-fit mt-auto text-xl text-neutral-500 font-semibold ">
            {location.streetAddress.replace(/^(.{10}).*$/, '$1...') + ', ' + location.country}
          </div>
        </Link>
        <div className="pl-auto text-end text-2xl text-primary-400 font-semibold">${GroundPrice}</div>
        <Link href={`/listing/${data._id}`} target="_blank" rel="noopener noreferrer">
          <div className="inline-block float-left text-neutral-400 text-base font-medium">Available on {
            formatDate(availableDate)
          }</div>
        </Link>
        <div className="text-end flex float-right items-center justify-center text-base font-medium">
          <Image alt="rating icon" className="" src='/icons/star_gray.svg' height={24} width={24} />
          <span className="mt-auto text-neutral-600">{averageRating}</span>
          <span className="mt-auto text-neutral-500">({totalReviews})</span>
        </div>
      </div>
    </div>
  );
}
