"use client"
import { useState,useEffect } from 'react';

import Icon from '@/components/Icon'
import { ChevronLeft, Plus } from 'lucide-react'

export default function page() {
    const [id,setId]=useState("")
      useEffect(() => {
    if (typeof window !== "undefined" && window.location.search) {
      const params = new URLSearchParams(window.location.search);
      setId(params.get("_id") || "");

    }
  }, []);
      console.log(id);
     
  return (
    <div className='w-full h-full min-h-screen'>
        <div className='w-full max-w-[648px] px-6 pt-14 pb-20 pb absolute-x-center'>
            <h3 className='text-primary-400 text-[34px] text-center font-medium mb-12'>Package Setup</h3>
            <form>
                <div className='space-y-4'>
                    <label className='text-neutral-600 text-[22px] font-medium w-full' htmlFor='package-name'>Package Name</label>
                    <p className='text-sm '>Lorem ipsum dolor sit amet consectetur. Gravida faucibus massa dignissim malesuada felis.</p>
                </div>
                <ul className='mt-[74px] space-y-4'>
                    <li className='space-y-2 pl-12 relative'>
                        <h2 className='text-[22px] font-semibold text-neutral-500'>Exclusive Accommodation:</h2>
                        <p className='text-neutral-700 font-normal text-lg'>Stay in premium sea-view rooms for a serene experience.</p>
                        {/* <Icon className='icon absolute top-[16px] left-0' name="plus" size={24} /> */}
                        <Plus className='icon absolute top-[16px] left-0' name="plus" size={24} />

                    </li>

                    <li className='space-y-2 pl-12 relative'>
                        <h2 className='text-[22px] font-semibold text-neutral-500'>Seamless Transportation</h2>
                        <p className='text-neutral-700 font-normal text-lg'>Comfortable round-trip via AC bus/train/aircraft.</p>
                        {/* <Icon className='icon absolute top-[16px] left-0' name="plus" size={24} /> */}
                        <Plus className='icon absolute top-[16px] left-0' name="plus" size={24} />

                    </li>

                    <li className='space-y-2 pl-12 relative'>
                        <h2 className='text-[22px] font-semibold text-neutral-500'>Family-Friendly Experience</h2>
                        <p className='text-neutral-700 font-normal text-lg'>Suitable for all ages, with curated activities for kids and adults.</p>
                        {/* <Icon className='icon absolute top-[16px] left-0' name="plus" size={24} /> */}
                        <Plus className='icon absolute top-[16px] left-0' name="plus" size={24} />

                    </li>

                    <li className='space-y-2 pl-12 relative'>
                        <h2 className='text-[22px] font-semibold text-neutral-500'>Unmatched Convenience</h2>
                        <p className='text-neutral-700 font-normal text-lg'>From meals to sightseeing, everything is arranged for you.</p>
                        <Plus className='icon absolute top-[16px] left-0' name="plus" size={24} />
                        {/* <Icon className='icon absolute top-[16px] left-0' name="plus" size={24} /> */}

                    </li>
                   
                </ul>
                <div className='flex flex-col md:flex-row gap-4 md:gap-8 my-28'>
                <button className='btn btn-secondary flex gap-4 md:max-w-[140px] items-center justify-center'> 
                    {/* <Icon name="chevron-left" size={24} /> */}
                    <ChevronLeft name="chevron-left" size={24} />
                    Back
                </button>

                <button className='btn btn-primary'> 
                    continue
                </button>
            </div>
            </form>
        </div>
    </div>
  )
}
