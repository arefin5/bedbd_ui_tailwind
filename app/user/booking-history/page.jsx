import React from 'react'

export default function page() {
  return (
    <div className='w-full h-full min-h-screen py-10 px-6 '>
        <h2 className='text-primary-400 text-3xl font-medium'>Booking History</h2>
        <div className='text-neutral-600 font-medium text-base'>
            <ul className='grid grid-cols-[192px_180px_256px_128px_136px_146px_192px] rounded-lg border border-neutral-100 py-4 mt-6 text-center text-neutral-600 text-base font-medium'>
                <li className=''>Name</li>
                <li className=''>Booking Date</li>
                <li className=''>Check-In-Out</li>
                <li className=''>txn Id</li>
                <li className=''>Total</li>
                <li className=''>Status</li>
                <li className=''>cancle</li>
            </ul>

            <div className='text-neutral-400 text-base font-medium mt-3 space-y-4'>
                {/* Booking Item  1*/}
                <ul className='grid grid-cols-[192px_180px_256px_128px_136px_146px_192px] py-3 border-b'>
                    <li className='pl-6'>Hotel Al Habib</li>
                    <li className='pl-6'>Nov 22, 24</li>
                    <li className='pl-10'>Nov 22, 24 - Nov 23, 24</li>
                    <li className='pl-8 text-secondary-400'>22456</li>
                    <li className='pl-8'>9584 tk</li>
                    <li className='pl-8'>Paid</li>
                    <li className='pl-6'>Cancel Booking</li>
                </ul>

                {/* Booking Item 2 */}
                <ul className='grid grid-cols-[192px_180px_256px_128px_136px_146px_192px] py-3 border-b'>
                    <li className='pl-6'>Hotel Al Habib</li>
                    <li className='pl-6'>Nov 22, 24</li>
                    <li className='pl-10'>Nov 22, 24 - Nov 23, 24</li>
                    <li className='pl-8 text-secondary-400'>22456</li>
                    <li className='pl-8'>9584 tk</li>
                    <li className='pl-8'>returned</li>
                    <li className='pl-6'>Cancelled</li>
                </ul>

                {/* Booking Item 3 */}
                <ul className='grid grid-cols-[192px_180px_256px_128px_136px_146px_192px] py-3 border-b'>
                    <li className='pl-6'>Hotel Al Habib</li>
                    <li className='pl-6'>Nov 22, 24</li>
                    <li className='pl-10'>Nov 22, 24 - Nov 23, 24</li>
                    <li className='pl-8 text-secondary-400'>22456</li>
                    <li className='pl-8'>9584 tk</li>
                    <li className='pl-8'>Completed</li>
                    <li className='pl-6 text-center'>-</li>
                </ul>

            </div>
        </div>
    </div>
  )
}
