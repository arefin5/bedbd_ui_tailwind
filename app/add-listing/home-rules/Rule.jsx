'use client'
import React, { useState } from 'react'
import { Square, SquareCheckBig } from 'lucide-react'

export default function HomeRule({data}) {
    const [checked, setChecked] = useState(false)
    function handleClick() {
            document.getElementById(data['_id']).click();
            setChecked(!checked)  
    }

  return (
    <div 
      className={`border border-neutral-300 rounded py-4 px-6 relative cursor-pointer select-none
      hover:shadow  hover:border-secondary-400 hover:shadow-secondary-400
      ${
        checked
            ? 'shadow  border-secondary-400 shadow-secondary-400'
            : 'border-neutral-300' }
      `} 
      onClick={handleClick}>
        <label className='text-base font-medium cursor-pointer'>{data['title']}</label>
        <input className='hidden' type='checkbox' name='home-rules' id={data['_id']} value={data['_id']}/>
        {
            checked
                ? <SquareCheckBig className='icon absolute-y-center right-6'/>
                : <Square className='icon absolute-y-center right-6'/>
        }
    </div>
  )
}
