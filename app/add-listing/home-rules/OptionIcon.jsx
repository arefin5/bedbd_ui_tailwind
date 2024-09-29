'use client'
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function OptionIcon({selectId}) {
    const [open, setOpen] = useState(false)

    function onClickHandlar() {
       const select =  document.getElementById(selectId)
       select.click()
    }
  return (
    open
        ? <ChevronUp className="icon absolute-y-center right-4 -z-10" onClick={onClickHandlar}/>
        : <ChevronDown className="icon absolute-y-center right-4 -z-10" onClick={onClickHandlar}/>
  )
}
