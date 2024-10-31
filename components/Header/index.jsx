'use client'
import Image from "next/image"
import Navbar from './Navbar'
import Link from "next/link"


export default function Header() {
  // inline-block
  // console.log("header test ... ") 
  return (
    <div className="p-4 header-shadow sticky top-0 relative z-100 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative w-16 h-8 object-contain">
          <Link href="/">
          <Image src={'/logo.png'} fill  />
          </Link>
        </div>
        <Navbar/>
      </div>
    </div>

  )
}
