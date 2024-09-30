'use client'
import { useEffect, useState } from 'react'
import { Square, SquareCheckBig } from 'lucide-react'

export default function InputCheckBox({inputId}) {
    const [checked, setChecked] = useState()

    

    function onIconClick() {
        document.getElementById(inputId).click()
    }

    useEffect(()=>{
        let ignore = false
        function onInputElementClick(e) {
            setChecked(e.target.checked)
        }
        if(!ignore){
            const inputElement = document.getElementById(inputId)
            inputElement.addEventListener('click',onInputElementClick )
        }        
        return ()=> ignore = true 
    }, [inputId])

  return (
    checked 
        ? <SquareCheckBig onClick={onIconClick} className='icon cursor-pointer' />
        : <Square onClick={onIconClick} className='icon cursor-pointer'/>
  )
}
