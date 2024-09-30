'use client'

import { useState } from "react"
import { Plus, Square, SquareCheckBig } from 'lucide-react'


export default function Amenity({data}) {
    const [checked, setChecked] = useState()

    function handleClick() {
        document.getElementById(data['_id']).click()
        setChecked(!checked)
    }

  return (
    <div className='flex gap-x-2 mb-3 text-neutral-500 cursor-pointer select-none' onClick={handleClick}>
        {
            checked
                ? <SquareCheckBig className='icon '/>
                : <Square className='icon '/>
        }
        <input type='checkbox' className='hidden' name='amenity' id={data['_id']} value={data['_id']}/>
        <div className='text-base font-medium'>{data['title']}</div>
    </div>
  )
}
