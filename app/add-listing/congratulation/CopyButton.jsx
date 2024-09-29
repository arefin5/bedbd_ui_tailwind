'use client'
import { Copy } from "lucide-react"
import copyToClipboard from '@/app/lib/copyToClipboard'

export default function CopyButton({inputId}) {

    function onCopyBtnClickHandlar(e) {
        e.preventDefault()
        const inputElement = document.getElementById(inputId)
        copyToClipboard(inputElement.value)
    }

  return (
    <button onClick={onCopyBtnClickHandlar} className='absolute-y-center right-4 bg-transparent '>
        <Copy className='icon ' />
    </button>
  )
}
