"use client"
import { useState } from "react"

export default function page() {
const [pageState, setPageState] =useState("pending")
  return (
    <div className='marker-class w-full p-6'>
        <div className='py-8 px-6 bg-secondary-50 rounded-lg'>

          <div className="flex justify-between items-center">
            {/* Filter */}
            <div className='flex gap-6 text-neutral-400 font-medium text-base'>
              <select className='w-[250px] px-6 py-2 border  border-neutral-200 rounded-lg'>
                  <option >All Property</option>
                  <option>a type property</option>
                  <option>B type propterty </option>
                  <option>C location property </option>
              </select>
              <select  className='w-[200px] px-6 py-2 border  border-neutral-200 rounded-lg'>
                  <option>last 15 days</option>
                  <option > last 7 days</option>
                  <option>last 30 days</option>
                  <option>last 1 month</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              {/* <p className="w-max text-sm text-neutral-400 font-medium">Available Balance:  <span className="text-neutral-700 text-lg font-semibold">1,500.00</span></p> */}
              <p className="w-max text-sm text-neutral-400 font-medium flex items-center whitespace-nowrap">
                Available Balance: <span className="text-neutral-700 text-lg font-semibold ml-1">1,500.00</span>
              </p>
              <button className="btn btn-primary max-w-[180px] px-8 w-max whitespace-nowrap">Withdraw Now</button>
            </div>
          </div>

        

            <div className='w-full h-full mt-5'>
                <ul className='text-base text-neutral-600 font-medium grid grid-cols-[178px_250px_300px_100px_200px] place-items-center bg-white rounded-lg py-4 border border-neutral-100'>
                    <li>Date</li>
                    <li>Property Name</li>
                    <li>Detail</li>
                    <li>Amount</li>
                    <li>Status</li>
                </ul>
                <div className='space-y-6 mt-6'>
                    <ul className='text-base text-neutral-400 font-medium grid grid-cols-[178px_250px_300px_100px_200px] place-items-center bg-white rounded-lg py-3   '>
                        <li>3 Jan, 2023</li>
                        
                        <li>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>45336</span></li>
                        <li>Book for 2 night</li>
                        <li className="text-primary-400">+600</li>
                        <li>8 Jan, 2024*</li>
                    </ul>
                    <ul className='text-base text-neutral-400 font-medium grid grid-cols-[178px_250px_300px_100px_200px] place-items-center bg-white rounded-lg py-3   '>
                        <li>3 Jan, 2023</li>
                        
                        <li>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>45336</span></li>
                        <li>Book for 2 night</li>
                        <li className="text-[#FF5A26]">-600</li>
                        <li>8 Jan, 2024*</li>
                    </ul>
                    <ul className='text-base text-neutral-400 font-medium grid grid-cols-[178px_250px_300px_100px_200px] place-items-center bg-white rounded-lg py-3   '>
                        <li>3 Jan, 2023</li>
                        
                        <li>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>45336</span></li>
                        <li>Book for 2 night</li>
                        <li className="text-primary-400">+600</li>
                        <li>8 Jan, 2024*</li>
                    </ul>
                    <ul className='text-base text-neutral-400 font-medium grid grid-cols-[178px_250px_300px_100px_200px] place-items-center bg-white rounded-lg py-3   '>
                        <li>3 Jan, 2023</li>
                        
                        <li>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>45336</span></li>
                        <li>Book for 2 night</li>
                        <li className="text-[#FF5A26]">-600</li>
                        <li>8 Jan, 2024*</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
  )
}
