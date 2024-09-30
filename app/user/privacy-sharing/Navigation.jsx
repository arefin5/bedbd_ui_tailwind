'use client'
import { useRouter, usePathname } from 'next/navigation'

export default function Navigation() {
    const router = useRouter()
    const pathname = usePathname()


  return (
    <ul className='relative custom-btm-line-200 py-2 text-lg font-semibold'>
        <li className='inline text-neutral-800 '>
            <button 
                type="button" 
                onClick={() => router.push('/data')} 
                className='pr-2.5'>Data</button>
        </li>
        <li className='inline text-neutral-400'>
            <button 
                type="button" 
                onClick={() => router.push('/sharing')} 
                className='pr-2.5'>Sharing</button></li>
    </ul>
  )
}
