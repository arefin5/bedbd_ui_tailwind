"use client"
import { useState } from "react"

export default function page() {
const [pageState, setPageState] =useState("pending")
  return (
    <div className=' w-full p-6'>
        <div className='py-8 px-6 bg-secondary-50 rounded-lg h-full'>
            <h4 className='text-neutral-700 text-[28px] font-semibold'>Manage Booking</h4>
            <ul className='text-neutral-400 font-medium text-[22px] flex items-center p-6 space-x-24'>
                <li className={`${pageState === "pending" && "text-primary-400 font-semibold"} hover:underline`}
                    onClick={()=>setPageState("pending")}>Pending</li>
                <li className={`${pageState === "upcoming" && "text-primary-400 font-semibold"} hover:underline`}
                    onClick={()=>setPageState("upcoming")}>Upcoming</li>
                <li className={`${pageState === "rejected" && "text-primary-400 font-semibold"} hover:underline`}
                    onClick={()=>setPageState("rejected")}>Rejected</li>
                <li className={`${pageState === "completed" && "text-primary-400 font-semibold"} hover:underline`}
                    onClick={()=>setPageState("completed")}>Completed</li>
            </ul>
            <div className='w-full h-full '>
                <ul className='text-base text-neutral-600 font-medium grid grid-cols-[174px_240px_110px_110px_100px_190px] place-items-center bg-white rounded-lg py-4 border border-neutral-100'>
                    <li>Property</li>
                    <li>Details</li>
                    <li>Check-In</li>
                    <li>Check-Out</li>
                    <li>Price</li>
                    <li>Action</li>
                </ul>
                <div className='space-y-6 mt-6'>
                    <ul className='text-base text-neutral-400 font-medium grid grid-cols-[174px_240px_110px_110px_100px_190px] place-items-center bg-white rounded-lg py-3   '>
                        <li>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>45336</span></li>
                        <li>3 Adults, 1 child, 3 days</li>
                        <li>3 Jan, 24</li>
                        <li>3 Jan, 24</li>
                        <li>3500</li>
                        {
                            pageState === "pending" 
                            &&  <li className='text-sm font-medium space-x-2'>
                                    <button className='py-[6px] px-3 border border-[#F63F1F] rounded-md text-[#F63F1F]'>Decline</button>
                                    <button className='py-[8px] px-3 text-white bg-primary-400 rounded-md'>Approve</button>
                                </li>
                        }
                        {
                            pageState === "upcoming" 
                            &&  <li className='text-sm font-medium space-x-2'>
                                    <button className='py-[6px] px-3 border border-primary-400 rounded-md text-[#F63F1F]'>Cancle</button>
                                </li>
                        }  
                    </ul>
                    <ul className='text-base text-neutral-400 font-medium grid grid-cols-[174px_240px_110px_110px_100px_190px] place-items-center bg-white rounded-lg py-3 '>
                        <li>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>45336</span></li>
                        <li>3 Adults, 1 child, 3 days</li>
                        <li>3 Jan, 24</li>
                        <li>3 Jan, 24</li>
                        <li>3500</li>
                        {
                            pageState === "pending" 
                            &&  <li className='text-sm font-medium space-x-2'>
                                    <button className='py-[6px] px-3 border border-[#F63F1F] rounded-md text-[#F63F1F]'>Decline</button>
                                    <button className='py-[8px] px-3 text-white bg-primary-400 rounded-md'>Approve</button>
                                </li>
                        }
                        {
                            pageState === "upcoming" 
                            &&  <li className='text-sm font-medium space-x-2'>
                                    <button className='py-[6px] px-3 border border-primary-400 rounded-md text-[#F63F1F]'>Cancle</button>
                                </li>
                        } 
                    </ul>
                    <ul className='text-base text-neutral-400 font-medium grid grid-cols-[174px_240px_110px_110px_100px_190px] place-items-center bg-white rounded-lg py-3'>
                        <li>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>45336</span></li>
                        <li>3 Adults, 1 child, 3 days</li>
                        <li>3 Jan, 24</li>
                        <li>3 Jan, 24</li>
                        <li>3500</li>
                        {
                            pageState === "pending" 
                            &&  <li className='text-sm font-medium space-x-2'>
                                    <button className='py-[6px] px-3 border border-[#F63F1F] rounded-md text-[#F63F1F]'>Decline</button>
                                    <button className='py-[8px] px-3 text-white bg-primary-400 rounded-md'>Approve</button>
                                </li>
                        }
                        {
                            pageState === "upcoming" 
                            &&  <li className='text-sm font-medium space-x-2'>
                                    <button className='py-[6px] px-3 border border-primary-400 rounded-md text-[#F63F1F]'>Cancle</button>
                                </li>
                        } 
                    </ul>
                    <ul className='text-base text-neutral-400 font-medium grid grid-cols-[174px_240px_110px_110px_100px_190px] place-items-center bg-white rounded-lg py-3'>
                        <li>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>45336</span></li>
                        <li>3 Adults, 1 child, 3 days</li>
                        <li>3 Jan, 24</li>
                        <li>3 Jan, 24</li>
                        <li>3500</li>
                        {
                            pageState === "pending" 
                            &&  <li className='text-sm font-medium space-x-2'>
                                    <button className='py-[6px] px-3 border border-[#F63F1F] rounded-md text-[#F63F1F]'>Decline</button>
                                    <button className='py-[8px] px-3 text-white bg-primary-400 rounded-md'>Approve</button>
                                </li>
                        }
                        {
                            pageState === "upcoming" 
                            &&  <li className='text-sm font-medium space-x-2'>
                                    <button className='py-[8px] px-3 text-white bg-primary-400 rounded-md'>Cancle</button>
                                </li>
                        }    
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}
