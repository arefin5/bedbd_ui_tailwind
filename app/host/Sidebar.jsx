"use client"
import Icon from "/components/Icon"

import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
export default function Sidebar() {
  const [name,setName]=useState("")
  const { user, token } = useSelector((state) => state.auth);
  const router=useRouter();


  useEffect(() => {
    if (user?.fname && user?.lname) {
      setName(`${user.fname} ${user.lname}`);
    } else {
      // Handle case when fname or lname is missing or empty
      setName(""); // or setName("Unknown") or handle as needed
    }
  }, [user, token]);
  const LogOut = async (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "/";
    }
  return (
    <div className="min-h-screen bg-secondary-400 text-white px-4 pt-12 w-fit xl:w-64 flex grid justify-between" >
        <ul className="space-y-6 ">
          <li className="hidden">
            <Icon name="circle-chevron-right" className="icon"/>
          </li>
          <Link
                href="/host">
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="layout-dashboard" className="icon" />
            <span className="hidden xl:block">Dashboard</span> 
          </li>
          </Link>
          <Link href="/host/profile">
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="user-cog" className="icon" /> 
            <span className="hidden xl:block">Profile </span> 
          </li>
          </Link>
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="mail" className="icon" />
            <span className="hidden xl:block">Message (2)</span> 
          </li>
          <Link href="/host/properties">

         
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="home" className="icon" /> 
            <span className="hidden xl:block">Property</span> 
          </li>
          </Link>
          <Link href="/">

          
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="arrow-right-left" className="icon" />
            <span className="hidden xl:block">Transaction</span> 
          </li>
          </Link>
          
          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="settings" className="icon" /> 
            <span className="hidden xl:block">Setting</span> 
          </li>

          <li className="flex items-center gap-x-2 px-4 py-3 hover:bg-white font-medium hover:font-semibold hover:text-secondary-400 rounded-lg">
            <Icon name="history" className="icon" /> 
            <span className="hidden xl:block">History</span> 
          </li>
        </ul>

        <span className="rounded-lg ml-auto mr-auto bg-white  bg-opacity-20 h-fit w-full text-center py-4">
          {name}
        </span>

        <button className="mb-16 px-4 py-0 rounded-lg ml-auto mr-auto">
          <Icon name="log-out" className="icon text-white inline mr-2.5"/>
          <span className="" onClick={LogOut}>Log out</span>
        </button>
      </div>
  )
}
