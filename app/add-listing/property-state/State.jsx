'use client'
import { Square, SquareCheckBig } from "lucide-react";
import { useState } from 'react'

export default function State({data}) {
    const [isChecked, setIsChecked] = useState(false)
    function handleClick() {
        document.getElementById(data['_id']).click()
        setIsChecked(!isChecked)
        
    }
  return (
    <div className={`w-full py-4 pr-4 pl-14  cursor-pointer select-none relative border  hover:shadow hover:border-secondary-400 hover:shadow-secondary-400 rounded-10px 
                        ${
                            isChecked
                                ? 'shadow  border-secondary-400 shadow-secondary-400'
                                : 'border-neutral-300' }`} 
            onClick={handleClick}>
          {
            isChecked
              ? <SquareCheckBig className='icon absolute left-4'/>
              : <Square className='icon absolute left-4'/>
          }
          <input className="hidden" type="checkbox" id={data['_id']} name="property_state" value={data['_id']}></input>
          <h4 className='font-semibold text-xl text-neutral-500 mb-2'>{data['title']}</h4>
          <p className='text-neutral-500 font-medium text-base'>{data['description']}</p>
      </div>
  )
}
