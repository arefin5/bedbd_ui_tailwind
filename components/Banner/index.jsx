import React from 'react'

export default function Banner() {

  return (
    <div className='bg-primary-400 w-full h-auto pt-20 pb-16'>
        <div className='container mx-auto px-24 flex items-center'>
            <div className='max-w-sm'>
                <h3 className='font-bold text-4xl text-white max-w-72'>
                    Be a bedbd host
                </h3>
                <p className='text-base text-neutral-50 font-normal mt-3'>Earn extra just by renting your property...</p>
                <button className='banner-btn mt-8'>Host Registration</button>
            </div>  
            <div className='ml-auto hidden lg:block'>
                <h3 className='font-extrabold text-8xl text-white'>
                    BANNER
                </h3>
            </div>           
        </div>
    </div>
  )
}
