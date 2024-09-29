'use client'
import { useState } from "react"
// import Icon from "@/app/components/Icon"
import { Plus, Minus } from "lucide-react"

export default function Counter({name, maxCount=10, minCount=0}) {
    const [count, setCount] = useState(0)

    

    function increment() {
        if(count < maxCount){
            setCount(()=>count+1)
        }
    }
    function decrement() {
        if(count > minCount){
            setCount(count-1)
        }
    }

  return (
    <div className='flex gap-2'>
        <Minus className='icon cursor-pointer' onClick={decrement}/>
        {/* <Icon name="minus" className='icon cursor-pointer' onClick={decrement}/> */}
        <input readOnly className='text-center max-w-6' name={name} type='number' value={count}/> 
        {/* <Icon name="plus"  className='icon cursor-pointer' onClick={increment}/> */}
        <Plus  className='icon cursor-pointer' onClick={increment}/>
    </div>
  )
}
