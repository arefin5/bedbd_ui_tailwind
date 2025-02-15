'use client'
import Image from "next/image"
import Navbar from './Navbar'
import Link from "next/link"


export default function Header() {
  // inline-block 
  // const GotoHome = async (e) => {
  //   e.preventDefault();
  //   window.location.href = "/";
  // };
  return (
    <div className="p-4 header-shadow z-10 sticky top-0 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative w-16 h-8 object-contain">
        <Link
        href="/">
          <Image src={'/logo.png'} fill alt="logo" />

        </Link>
        </div>
        <Navbar/>
      </div>
    </div>

  )
}
