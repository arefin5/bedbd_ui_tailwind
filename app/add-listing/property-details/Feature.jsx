'use client'
import { useState } from 'react'
import { SquareCheckBig, Square } from 'lucide-react'

export default function Feature({data}) {
    const [isChecked, setIsChecked] = useState(false)


    function handleClick() {
        document.getElementById(data['_id']).click()
        setIsChecked(!isChecked)
    }
  return (
    <div 
        onClick={handleClick}
        className={`w-full py-4 pr-4 pl-14 mb-4 rounded-10px cursor-pointer select-none relative border  
                    hover:shadow hover:border-secondary-400 
                    hover:shadow-secondary-400 
                    ${isChecked
                        ? 'shadow  border-secondary-400 shadow-secondary-400'
                        : 'border-neutral-300' }
                    `}>
          {
            isChecked
              ? <SquareCheckBig className='icon absolute left-4'/>
              : <Square className='icon absolute left-4'/>
          }
          <input  className="hidden" type="checkbox" id={data['_id']} name="property_feature" value={data['_id']}></input>
          <h4 className='font-semibold text-xl text-neutral-500 mb-2'>{data['title']}</h4>
          <p className='text-neutral-500 font-medium text-base'>{data['description']}</p>
      </div>
  )
}
