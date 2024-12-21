
// // 'use client';
// // import Image from "next/image";
// // import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
// // import PropertyLoadingSkeleton from "./PropertyLoadingSkeleton";
// // import { useState, useRef } from "react";
// // import { useSelector } from "react-redux";
// // import Link from 'next/link';
// // import AddFavorite from "../AddFavorite";

// // export default function PropertyGalleryItem({ data }) {
// //   const [images, setImages] = useState(data.images || []); // Use dynamic images from props
// //   const [image, setImage] = useState(images[0] || { url: '' });
// //   const imageContainerRef = useRef(null);
// //   const {selectedDate} = useSelector(state => state.search)
// //   console.log(selectedDate)
// //   const [buttonVisibility, setButtonVisibility] = useState({
// //     showLeftButton: false,
// //     showRightButton: true,
// //   });

// //   const updateButtonVisibility = (currentIndex) => {
// //     setButtonVisibility({
// //       showLeftButton: currentIndex > 0,
// //       showRightButton: currentIndex < images.length - 1,
// //     });
// //   };

// //   const leftButtonClick = () => {
// //     const currentImageIndex = images.findIndex(img => img.url === image.url);
// //     if (currentImageIndex > 0) {
// //       setImage(images[currentImageIndex - 1]);
// //       updateButtonVisibility(currentImageIndex - 1);
// //     }
// //   };

// //   const rightButtonClick = () => {
// //     const currentImageIndex = images.findIndex(img => img.url === image.url);
// //     if (currentImageIndex < images.length - 1) {
// //       setImage(images[currentImageIndex + 1]);
// //       updateButtonVisibility(currentImageIndex + 1);
// //     }
// //   };

// //   const { location, GroundPrice, reviews, availablecheck, createdAt } = data;

// //   // Calculate the total sum of ratings and the count of reviews
// //   const totalReviews = reviews.length;
// //   let averageRating = 0;

// //   if (totalReviews === 0) {
// //     // console.log('No reviews available.');
// //   } else {
// //     const totalRating = reviews.reduce((sum, review) => sum + review.avgRating, 0);
// //     averageRating = Math.floor(totalRating / totalReviews);
// //   }

// //   // Determine the availableDate
// //   let availableDate = 0;
// //   if (availablecheck.checkInStart === "asap") {
// //     availableDate = createdAt;
// //   } else {
// //     availableDate = availablecheck.checkInStart;
// //   }

// //   const formatDate = (dateStr) => {
// //     const date = new Date(dateStr);
// //     return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(2, '0')}/${String(date.getUTCDate()).padStart(2, '0')}`;
// //   };

// //   const formatToDDMMYYYY = (timestamp) => {
// //     const date = new Date(timestamp);
// //     const day = String(date.getDate()).padStart(2, '0');
// //     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
// //     const year = date.getFullYear();
// //     return `${day}-${month}-${year}`;
// //   };
  
// //   const checkIn = selectedDate[0] > 0 ? `checkIn=${formatToDDMMYYYY(selectedDate[0])}` : "";
// //   const checkOut = selectedDate[1] > 0 ? `&checkOut=${formatToDDMMYYYY(selectedDate[1])}` : "";
// //   const query = checkIn ? `?${checkIn}${checkOut}` : "";
// //   const targetUrl = `/listing/${data._id}${query}`;


// //   return (
// //     <div className="min-w-290px max-w-395px">
// //       <div ref={imageContainerRef} className="relative z-10 flex transition-transform duration-500 ease-in-out overflow-x-auto rounded-lg no-horizontal-scrollbar">
// //         <div className="z-0 relative flex-none w-full h-auto aspect-[145/89] min-h-178px max-h-242px max-w-395px object-cover items-center">
// //         {/* {{
// //     pathname: '/new-page',
// //     query: { value1: 10, value2: 20 },
// //   }} */}
// //   <Image alt="property image" src={image.url} fill className="object-cover" />
         
// //         </div>
// //         {buttonVisibility.showLeftButton &&
// //           <button onClick={leftButtonClick} className="z-20 rounded bg-gray-900 group absolute-y-center p-1 left-3 bg-opacity-30 hover:bg-opacity-50">
// //             <ChevronLeft className="shadow-xl drop-shadow-xl opacity-50 group-hover:opacity-80" color="#ffffff" />
// //           </button>
// //         }
// //         {buttonVisibility.showRightButton &&
// //           <button onClick={rightButtonClick} className="z-20 rounded bg-gray-900 group absolute-y-center p-1 right-3 bg-opacity-30 hover:bg-opacity-50">
// //             <ChevronRight className="shadow-xl drop-shadow-xl opacity-50 group-hover:opacity-80" color="#ffffff" />
// //           </button>
// //         }
// //         <button className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
// //           {/* <Heart className="shadow-xl drop-shadow-xl opacity-50 group-hover:opacity-80" color="#ffffff" /> */}
// //           <AddFavorite data={data}/>
// //         </button>
// //       </div>
// //       <Link href={targetUrl}
// //             // href={`/listing/${data._id}?checkIn=10&value2=20`}
// //             // href={{pathname:`/listing/${data._id}`, query: { value1: 10, value2: 20 }}} 
// //             target="_blank" rel="noopener noreferrer">
             
         
// //       <div className="mt-2">
// //         <Link href={targetUrl} target="_blank" rel="noopener noreferrer">
// //           <div className="inline-block float-left h-fit mt-auto text-xl text-neutral-500 font-semibold ">
// //             {location.streetAddress.replace(/^(.{10}).*$/, '$1...') + ', ' + location.country}
// //           </div>
// //         </Link>
// //         <div className="pl-auto text-end text-2xl text-primary-400 font-semibold">${GroundPrice}</div>
// //         <Link href={targetUrl} target="_blank" rel="noopener noreferrer">
// //           <div className="inline-block float-left text-neutral-400 text-base font-medium">Available on {
// //             formatDate(availableDate)
// //           }</div>
// //         </Link>
// //         <div className="text-end flex float-right items-center justify-center text-base font-medium">
// //           <Image alt="rating icon" className="" src='/icons/star_gray.svg' height={24} width={24} />
// //           <span className="mt-auto text-neutral-600">{averageRating}</span>
// //           <span className="mt-auto text-neutral-500">({totalReviews})</span>
// //         </div>
// //       </div>
// //       </Link>
// //     </div>
// //   );
// // }
// // "use client"
// // import React, { useState, useEffect, useCallback, useMemo } from 'react';
// // import { useSelector, shallowEqual } from 'react-redux';
// // import AddFavorite from '../AddFavorite';
// // // import AddFavorite from './AddFavorite';

// // const PropertyGalleryItem = ({ data }) => {
// //   // State
// //   const [images, setImages] = useState(data.images || []);
// //   const [image, setImage] = useState(data.images?.[0] || { url: '' });
// //   const [buttonVisibility, setButtonVisibility] = useState({ left: false, right: images.length > 1 });

// //   // Redux state
// //   const selectedDate = useSelector(state => state.search.selectedDate, shallowEqual);

// //   // Update images state if data.images changes
// //   useEffect(() => {
// //     setImages(data.images || []);
// //     setImage(data.images?.[0] || { url: '' });
// //     setButtonVisibility({ left: false, right: (data.images?.length || 0) > 1 });
// //   }, []);

// //   // Memoized average rating calculation
// //   const averageRating = useMemo(() => {
// //     if (data.reviews.length === 0) return 0;
// //     const totalRating = data.reviews.reduce((sum, review) => sum + review.avgRating, 0);
// //     return Math.floor(totalRating / data.reviews.length);
// //   }, [data.reviews]);

// //   // Button visibility updater
// //   const updateButtonVisibility = useCallback((currentIndex) => {
// //     setButtonVisibility({
// //       left: currentIndex > 0,
// //       right: currentIndex < images.length - 1,
// //     });
// //   }, [images.length]);

// //   // Left button click handler
// //   const leftButtonClick = useCallback(() => {
// //     const currentImageIndex = images.findIndex(img => img.url === image.url);
// //     if (currentImageIndex > 0) {
// //       setImage(images[currentImageIndex - 1]);
// //       updateButtonVisibility(currentImageIndex - 1);
// //     }
// //   }, [images, image, updateButtonVisibility]);

// //   // Right button click handler
// //   const rightButtonClick = useCallback(() => {
// //     const currentImageIndex = images.findIndex(img => img.url === image.url);
// //     if (currentImageIndex < images.length - 1) {
// //       setImage(images[currentImageIndex + 1]);
// //       updateButtonVisibility(currentImageIndex + 1);
// //     }
// //   }, [images, image, updateButtonVisibility]);

// //   useEffect(() => {
// //     console.log('Selected Date:', selectedDate);
// //   }, [selectedDate]);

// //   // Component rendering
// //   return (
// //     <div className="property-gallery-item">
// //       <h2>{data.title}</h2>
// //       <p>Average Rating: {averageRating}</p>
// //       <div className="image-gallery">
// //         <button 
// //           onClick={leftButtonClick} 
// //           disabled={!buttonVisibility.left}>
// //           Left
// //         </button>
// //         <img src={image.url} alt="Gallery Item" />
// //         <button 
// //           onClick={rightButtonClick} 
// //           disabled={!buttonVisibility.right}>
// //           Right
// //         </button>
// //       </div>
// //       <AddFavorite data={data} />
// //     </div>
// //   );
// // };

// // // export default React.memo(PropertyGalleryItem);
// // 'use client';
// // import Image from "next/image";
// // import { ChevronLeft, ChevronRight } from "lucide-react";
// // import { useState, useRef } from "react";
// // import { useSelector } from "react-redux";
// // import Link from 'next/link';
// // import AddFavorite from "../AddFavorite";

// // export default function PropertyGalleryItem({ data }) {
// //   const [images, setImages] = useState(data.images || []); // Use dynamic images from props
// //   const [image, setImage] = useState(images[0] || { url: '' });
// //   const imageContainerRef = useRef(null);
// //   const { selectedDate } = useSelector(state => state.search);

// //   const [buttonVisibility, setButtonVisibility] = useState({
// //     showLeftButton: false,
// //     showRightButton: images.length > 1,
// //   });

// //   const updateButtonVisibility = (currentIndex) => {
// //     setButtonVisibility({
// //       showLeftButton: currentIndex > 0,
// //       showRightButton: currentIndex < images.length - 1,
// //     });
// //   };

// //   const navigateImage = (direction) => {
// //     const currentImageIndex = images.findIndex(img => img.url === image.url);
// //     const newIndex = direction === "left" 
// //       ? Math.max(0, currentImageIndex - 1) 
// //       : Math.min(images.length - 1, currentImageIndex + 1);
// //     setImage(images[newIndex]);
// //     updateButtonVisibility(newIndex);
// //   };

// //   const { location, GroundPrice, reviews, availablecheck, createdAt } = data;

// //   const totalReviews = reviews.length;
// //   const averageRating = totalReviews > 0
// //     ? Math.floor(reviews.reduce((sum, review) => sum + review.avgRating, 0) / totalReviews)
// //     : 0;

// //   const availableDate = availablecheck.checkInStart === "asap" 
// //     ? createdAt 
// //     : availablecheck.checkInStart;

// //   const formatDate = (dateStr) => {
// //     const date = new Date(dateStr);
// //     return `${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(2, '0')}/${String(date.getUTCDate()).padStart(2, '0')}`;
// //   };

// //   const formatToDDMMYYYY = (timestamp) => {
// //     const date = new Date(timestamp);
// //     return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
// //   };

// //   const checkIn = selectedDate[0] ? `checkIn=${formatToDDMMYYYY(selectedDate[0])}` : "";
// //   const checkOut = selectedDate[1] ? `&checkOut=${formatToDDMMYYYY(selectedDate[1])}` : "";
// //   const query = checkIn ? `?${checkIn}${checkOut}` : "";
// //   const targetUrl = `/listing/${data._id}${query}`;

// //   return (
// //     <div className="min-w-290px max-w-395px">
// //       <div ref={imageContainerRef} className="relative z-10 flex transition-transform duration-500 ease-in-out overflow-x-auto rounded-lg no-horizontal-scrollbar">
// //         <div className="z-0 relative flex-none w-full h-auto aspect-[145/89] min-h-178px max-h-242px max-w-395px object-cover items-center">
// //           <Image alt="property image" src={image.url} fill className="object-cover" />
// //         </div>
// //         {buttonVisibility.showLeftButton &&
// //           <button onClick={() => navigateImage("left")} className="z-20 rounded bg-gray-900 group absolute-y-center p-1 left-3 bg-opacity-30 hover:bg-opacity-50">
// //             <ChevronLeft className="shadow-xl drop-shadow-xl opacity-50 group-hover:opacity-80" color="#ffffff" />
// //           </button>
// //         }
// //         {buttonVisibility.showRightButton &&
// //           <button onClick={() => navigateImage("right")} className="z-20 rounded bg-gray-900 group absolute-y-center p-1 right-3 bg-opacity-30 hover:bg-opacity-50">
// //             <ChevronRight className="shadow-xl drop-shadow-xl opacity-50 group-hover:opacity-80" color="#ffffff" />
// //           </button>
// //         }
// //         <button className="z-20 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
// //           <AddFavorite data={data} />
// //         </button>
// //       </div>
// //       <Link href={targetUrl} target="_blank" rel="noopener noreferrer">
// //         <div className="mt-2">
// //           <div className="inline-block float-left h-fit mt-auto text-xl text-neutral-500 font-semibold">
// //             {`${location.streetAddress.slice(0, 10)}..., ${location.country}`}
// //           </div>
// //           <div className="pl-auto text-end text-2xl text-primary-400 font-semibold">${GroundPrice}</div>
// //           <div className="inline-block float-left text-neutral-400 text-base font-medium">
// //             Available on {formatDate(availableDate)}
// //           </div>
// //           <div className="text-end flex float-right items-center justify-center text-base font-medium">
// //             <Image alt="rating icon" src='/icons/star_gray.svg' height={24} width={24} />
// //             <span className="mt-auto text-neutral-600">{averageRating}</span>
// //             <span className="mt-auto text-neutral-500">({totalReviews})</span>
// //           </div>
// //         </div>
// //       </Link>
// //     </div>
// //   );
// // }
// "use client"
// import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import { useSelector, shallowEqual } from 'react-redux';
// import AddFavorite from '../AddFavorite';

// const PropertyGalleryItem = ({ data }) => {
//   // State
//   const [images, setImages] = useState(data.images || []);
//   const [image, setImage] = useState(data.images?.[0] || { url: '' });
//   const [buttonVisibility, setButtonVisibility] = useState({ left: false, right: images.length > 1 });

//   // Redux state
//   const selectedDate = useSelector(state => state.search.selectedDate, shallowEqual);

//   // Update images and button visibility when data.images changes
//   useEffect(() => {
//     if (!data.images) return;
//     setImages(data.images);
//     setImage(data.images[0] || { url: '' });
//     setButtonVisibility({ left: false, right: data.images.length > 1 });
//   }, [data.images]);

//   // Memoized average rating calculation
//   const averageRating = useMemo(() => {
//     if (!data.reviews?.length) return 0;
//     const totalRating = data.reviews.reduce((sum, review) => sum + review.avgRating, 0);
//     return Math.floor(totalRating / data.reviews.length);
//   }, [data.reviews]);

//   // Update button visibility
//   const updateButtonVisibility = useCallback((currentIndex) => {
//     setButtonVisibility({
//       left: currentIndex > 0,
//       right: currentIndex < images.length - 1,
//     });
//   }, [images]);

//   // Handlers for image navigation
//   const navigateImage = useCallback(
//     (direction) => {
//       const currentIndex = images.findIndex(img => img.url === image.url);
//       const newIndex = direction === 'left'
//         ? Math.max(0, currentIndex - 1)
//         : Math.min(images.length - 1, currentIndex + 1);

//       if (newIndex !== currentIndex) {
//         setImage(images[newIndex]);
//         updateButtonVisibility(newIndex);
//       }
//     },
//     [images, image, updateButtonVisibility]
//   );

//   return (
//     <div className="property-gallery-item">
//       <h2>{data.title}</h2>
//       <p>Average Rating: {averageRating}</p>
//       <div className="image-gallery">
//         <button 
//           onClick={() => navigateImage('left')} 
//           disabled={!buttonVisibility.left}>
//           Left
//         </button>
//         <img src={image.url} alt="Gallery Item" />
//         <button 
//           onClick={() => navigateImage('right')} 
//           disabled={!buttonVisibility.right}>
//           Right
//         </button>
//       </div>
//       <AddFavorite data={data} />
//     </div>
//   );
// };

// export default React.memo(PropertyGalleryItem);
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
            {data.location.streetAddress.replace(/^(.{10}).*$/, '$1...') + ', ' + data.location.country}
          </div>
          <div className="pl-auto text-end text-2xl text-primary-400 font-semibold">${data.GroundPrice}</div>
          <div className="inline-block float-left text-neutral-400 text-base font-medium">Available on {formatDate(availableDate)}</div>
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