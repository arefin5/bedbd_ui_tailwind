'use client'
import Image from "next/image"
import Navbar from './Navbar'


export default function Header() {
  // inline-block 
  return (
    <div className="p-4 header-shadow z-10 sticky top-0 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative w-16 h-8 object-contain">
          <Image src={'/logo.png'} fill  />
        </div>
        <Navbar/>
      </div>
    </div>

  )
}
