import React from 'react'
import { ChevronLeft, Share2, Heart } from 'lucide-react'





export default function DetailImageGalleryHeader() {

  return (
    <div className='w-full pt-1 top-[82px] sticky relative z-90 bg-white'>
       <div className='container mx-auto px-5 pb-4'>
        <div className='mx-auto w-fit mt-4'>Images {'3/6'}</div>
        <div className='mt-4 w-full flex justify-between'>
            <button className=' flex gap-2  text-lg font-normal text-neutral-600'>
                <ChevronLeft size={24} className='icon'/> Back
            </button>

            <div className='flex gap-6'>
                <button className=' flex gap-2 text-lg font-normal text-neutral-600'>
                    <Share2 size={24} className='icon'/> Share
                </button>
                <button className=' flex gap-2 text-lg font-normal text-neutral-600'>
                    <Heart size={24} className='icon'/> Share
                </button>
            </div>
            
        </div>
       </div>
    </div>
  )
}
