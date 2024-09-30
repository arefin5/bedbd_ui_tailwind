'use client'
import { useState } from 'react'
import { Square, SquareCheckBig } from "lucide-react";

export default function BookingType({data}) {
    const [isChecked, setIsChecked] = useState()

    function handleClick() {
        document.getElementById(data['_id']).click()
        setIsChecked(!isChecked)
    }
  return (
    <div 
        onClick={handleClick}
        className={`w-full py-4 pr-4 pl-14 rounded-10px cursor-pointer select-none relative border  
                    hover:shadow hover:border-secondary-400 
                    hover:shadow-secondary-400 
                    ${isChecked
                        ? 'shadow  border-secondary-400 shadow-secondary-400'
                        : 'border-neutral-300' }
                    `}>
          {
            isChecked
              ? <SquareCheckBig className='icon absolute top-4 left-4'/>
              : <Square className='icon absolute top-4 left-4'/>
          }
          <input  className="hidden" type="checkbox" id={data['_id']} name="property_booking_type" value={data['_id']}></input>
          <h4 className='font-semibold text-xl text-neutral-500 mb-2'>{data['title']}</h4>
          <p className='text-neutral-500 font-medium text-base'>{data['description']}</p>
      </div>
  )
}
