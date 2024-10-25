import Image from "next/image"
import MoreButton from "./MoreButton"
import React from 'react'
import ImagesDetailsGallery from "./ImagesDetailsGallery"


export default function ImageGallery({data}) {
  return (
  <>
    <div className=" w-full grid md:grid-cols-2 gap-4 relative">
      {
        data.slice(0,4)
            .map(img => ( <div key={img['_id']} className="relative w-full h-auto aspect-[31/22] w-342 h-242 rounded-lg overflow-hidden  object-cover "> 
                            <Image alt="..." src={img['url']} fill/>
                          </div>))
      }
      {data.length > 4 && <MoreButton data={data}/>}
    </div>
    <ImagesDetailsGallery data={data}/>
  </>
    

  )
}
