'use client'
import Image from "next/image"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import PropertyLoadingSkeleton from "./PropertyLoadingSkeleton"
import { useState, useRef, useEffect, useCallback } from "react"

// import sampleImage_0 from '/dummy/aa7ce09cc4e2e086c0a441a2bc6c3a41.jpeg'
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
export default function PropertyGalleryItem({data}) {

  const [images, setimages] = useState([
    {
      id:0,
      src:'https://s3-alpha-sig.figma.com/img/fa82/04ba/aa7ce09cc4e2e086c0a441a2bc6c3a41?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pE3jn0DKBBBrSWlZ1bPfXERbzypdRbPE6vlPcGkxSWh48AfDE8fq6MAUzMyPn-uRdyB9ctjkcJI-rgjKBhtIfoA0czIYitujQap2gkLZfxRBZn4EgIlDjFs6Sti9bu3vCx29zFmqbCnNVJPS7cq~K1YO7DWBlB4ITUrWGXvfkLhasIZg4y3X5doxY-UxO~rT76oulNoXNRBwIcog9zwTTXsgbC53yy-emzFpQtPsBA8~ktcSQUG3e5OScltrDiv8QJVYBwrNDOxnxRzt2WWPBsxtbEmNBhqhRrMGJ7GAgQ4rkLSCcbUQfbsNLIc5PPUDwL5gl2N3YcVWlTXQSj3BuA__',
    },
    {
      id:1,
      src:'https://s3-alpha-sig.figma.com/img/47d6/8395/bebcd1e57e3c88ef2f4b4e2f2bfc47f1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XB4oVLuvqPjv6Etwdt4Ew6rcI6Ss0Ai0ESDUOzLj4nyu3qCOBRfCD63UhenzWyH6tbfuCAmN6Ew3JbUhQouY7hWDTOJHylpayA5dfWgSVsfur~k4l0GK1YoqHrWWcrXNPwgMsmVREe~sxCcVtif7DOZWF4xKqv8HK05io2gG1OX7aENR5zp2MpH4X3B5Rkv0suXlLfezETdwVjdOnAJt-jb5hCOQKDQ~M09fswvChkFsJL-hW2qLhb6vsRaZqkbn0DtAhPEOOA7XTU86LkRUKynnp3eQTkz8xJll11IK3D7uh-CvoH05-WzsAF-DCXXw0z8i8umTSjxbBTRE3j5FyQ__',
    },
    {
      id:2,
      src:'https://s3-alpha-sig.figma.com/img/28de/5b2c/436c0b472b643abb58ba32973af9094b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p5i63AUxyv9c4xkF1uny2DWLnyMzdc7SNzXpZ4YCeI8QJXuS5JYhPFNqPlPiFXKNLahebkN6Iqc9T7dJSSVIZ8njVd1yXlt0oTbVVhGM6b7f30YH6JRJLBMKfZaxg-KxHUBEBXCotHoTV2H~u~ELPnrbs89cdJaFgKZDYxWH8U0k9zeX45818MLD4UFx~36VXONDhlDifWlQvARmpwmHUsHf2LL~InuVItVrY1k4Pz5NpUPoK5Tg0GnTF70r10P6rXTKG9BuWHwf~0XOp98tVAksCyTF1fRSqhEElcuZtBSCjASEK0pkJN9KijP0BN~4TXk-TigwQjhmsDWB~CIK2A__',
    },
    {
      id:3,
      src:'https://s3-alpha-sig.figma.com/img/8bd1/cbca/ff4537db926dfeb0067a37eecda96e8f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e3gNL6CnGY86vMD1ZRurlsEbk0ZHSUdGZO0QStWw37E3jGo048PLLa2pnV4Bbk2VK9e5nmJw6S3o9jawdyhvsIcYvGwMOKchaprS4PsNhnl-yxV7UGkXyu~ISrXNtjY4bKDe~2Y7da2-xe0Hjs3Ugk-GE8gi1cNfWKILh5~z5CUpcuk8N8AEDo~atcfVr9VAFenqXsnOi4crI0hONPwlFL-obxhQUfWa8WmwmNS9Tqahc6BMiKm5LFbHx1UUnmy-qa6ZLom1yBIvsq4bWPPYD6JnQe1CNBvXEr4D0LbCky41NbSk77PfSIlPvphXS7nYTlFjv~gd2p~FralajeXIKQ__',
    }
    
])

const [image, setImage] = useState(images[0])


  const imageContainerRef = useRef(null)
  const [buttonVisibility, setButtonVisibility] = useState({
    showLeftButton: false,
    showRightButton: true,
  });

  // useEffect(()=>{
    
  // }, [])

  function leftButtonClick() {
    const currentImageIndex = images.findIndex(img => img.id == image.id)
    if(currentImageIndex > 0 ){
      setImage(images[currentImageIndex - 1])
    }
    setButtonVisibility( { 
      showLeftButton: currentImageIndex > 1,
      showRightButton: (images.length > 1 && currentImageIndex < images.length ) 
    })
  }

  function rightButtonClick() {
    const currentImageIndex = images.findIndex(img => img.id == image.id)
    if(currentImageIndex < images.length-1 ){
      setImage(images[currentImageIndex + 1])
    }
    setButtonVisibility( { 
      showLeftButton: (images.length - 1) > 0,
      showRightButton: currentImageIndex !== (images.length - 2)
    })
  }



  // function handleScroll() {
  //   const container = imageContainerRef.current;
  //   if (!container) return;

  //   const { scrollLeft, scrollWidth, clientWidth } = container;
  //   setButtonVisibility({
  //     showLeftButton: scrollLeft > 0,
  //     showRightButton: scrollLeft < scrollWidth - clientWidth,
  //   });
  // }

  // function handleWheelScroll(event) {
  //   const container = imageContainerRef.current;
  //   if (!container || event.deltaY === 0) return;

  //   event.preventDefault();
  //   container.scrollLeft += event.deltaY;

  //   // Check if at the left or right end and scroll globally
  //   const { scrollLeft, scrollWidth, clientWidth } = container;
  //   if (scrollLeft === 0) {
  //     window.scrollBy({
  //       top: -100, // Adjust for smoother scrolling
  //       behavior: 'smooth'
  //     });
  //   } else if (scrollLeft >= scrollWidth - clientWidth) {
  //     window.scrollBy({
  //       top: 100, // Adjust for smoother scrolling
  //       behavior: 'smooth'
  //     });
  //   }

  //   // Update button visibility after scrolling
  //   handleScroll();
  // }

  // useEffect(() => {
  //   if (!imageContainerRef.current) return;
  
  //   const throttledHandleScroll = throttle(handleScroll, 100);
  //   const container = imageContainerRef.current;
  
  //   container.addEventListener('scroll', throttledHandleScroll);
  //   container.addEventListener('wheel', handleWheelScroll);
  
  //   // Cleanup on unmount
  //   return () => {
  //     container.removeEventListener('scroll', throttledHandleScroll);
  //     container.removeEventListener('wheel', handleWheelScroll);
  //   };
  // }, []);

  const {
      // images, 
      location, 
    price, serviceFee, tex, 
    avgRating,
    reviews } = data
  // console.log(data)

// return <PropertyLoadingSkeleton/>


return (
    <div className="min-w-290px max-w-395px">

        <div ref={imageContainerRef} className=" relative z-10 flex transition-transform duration-500 ease-in-out overflow-x-auto rounded-lg no-horizontal-scrollbar ">
          <div className="z-0 relative flex-none w-full h-auto aspect-[145/89]  min-h-178px  max-h-242px max-w-395px max-h-242px  object-cover items-center ">
            <Image alt="property sample image" src={image.src} fill className="object-cover"/>
          </div>
          {
            buttonVisibility['showLeftButton'] && 
            <button onClick={leftButtonClick} className="z-10 rounded bg-gray-900 group absolute-y-center p-1 left-3 bg-opacity-30 hover:bg-opacity-50">
              <ChevronLeft className="shadow-xl drop-shadow-xl opacity-50 group-hover:opacity-80" color="#ffffff" />
            </button>
          }

          {
            buttonVisibility['showRightButton'] && 
            <button onClick={rightButtonClick} className="z-10 rounded bg-gray-900 group absolute-y-center p-1 right-3 bg-opacity-30 hover:bg-opacity-50">
              <ChevronRight className="shadow-xl drop-shadow-xl opacity-50 group-hover:opacity-80" color="#ffffff" />
            </button>
          }

          <button className="z-10 rounded bg-gray-900 group p-1 absolute top-3 right-3 bg-opacity-30 hover:bg-opacity-50">
            <Heart className="shadow-xl drop-shadow-xl opacity-50 group-hover:opacity-80" color="#ffffff" />
          </button>         
        </div>
          


        
        <div className="mt-2">
          <div className="inline-block float-left h-fit mt-auto | text-xl text-neutral-500 font-semibold ">{location.streetAddress.replace(/^(.{10}).*$/, '$1...') +', '+ location.country }</div>
          <div className="pl-auto text-end | text-2xl text-primary-400 font-semibold">${price + serviceFee + tex}</div>
          <div className="inline-block float-left text-neutral-400 text-base font-medium">Available on 25.12.2023</div>
          <div className="text-end flex float-right items-center content-center justify-center text-base font-medium">
            <Image className="" src='/icons/star_gray.svg' height={24} width={24}/><span className="mt-auto text-neutral-600 "> 
              { avgRating } 
            </span><span className="mt-auto text-neutral-500">
            ( {reviews.length} )</span></div>
        </div>
    </div>
  )
}









