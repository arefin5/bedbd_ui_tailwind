import React from 'react'
import { SquareCheckBig, Square } from 'lucide-react'
import Image from 'next/image'

export default function AttachedDocument() {
  return (
    // top-0 left-1/2 -translate-x-1/2
    <div className='w-full  z-[999] bg-white py-24 h-max'>
        <div className='px-4  w-[960px] h-max relative left-1/2 -translate-x-1/2'>
            <h2 className='text-2xl  font-semibold text-neutral-700'>Attached Documents</h2>
            <div className='divide-y space-y-12 px-32'>
                <div className=' pt-12'>
                    <h3 className='text-neutral-600 font-semibold text-2xl '>Information</h3>
                    <div className='grid grid-cols-[192px_400px] gap-y-8 mt-6 text-neutral-500 text-base '>
                        <>
                            <div>Id number </div>
                            <div>: 39730293723</div>
                        </>
                        <>
                            <div>Name </div>
                            <div>: Sample Name</div>
                        </>
                        <>
                            <div>Father' Name </div>
                            <div>: Sample Name</div>
                        </>
                        <>
                            <div>Date of birth</div>
                            <div>: Sample Name</div>
                        </>
                        <>
                            <div>Present Address</div>
                            <div>: 1456 Veltri Drive, Anchorage, AK 99502</div>
                        </>
                        <>
                            <div>Permanent Address</div>
                            <div>: 4093 Overlook Drive, Richmond, IN 47374</div>
                        </>
                    </div>
                    <div className='w-full flex items-center justify-center mt-10 gap-x-12 child:flex child:gap-4 child:items-center'>
                        <div>
                            <SquareCheckBig size={32} className='text-green-600'/>
                            <button className='bg-green-600 text-white py-3 px-8 rounded-md'>Approve</button>
                        </div>
                        <div>
                            <Square size={32} className='text-red-600'/>
                            <button className='border border-red-600 text-red-600 py-3 px-8 rounded-md'>Decline</button>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-max pt-12'>
                    <h4 className='text-neutral-600 text-xl font-semibold mb-6'>NID</h4>
                    <div className='w-[645px] h-[366px] mx-auto relative '>
                        <Image src="/id_card_sample.png" className='object-contain' fill/>
                    </div>
                    <div className='w-full flex items-center justify-center mt-10 gap-x-12 child:flex child:gap-4 child:items-center'>
                        <div>
                            <SquareCheckBig size={32} className='text-green-600'/>
                            <button className='bg-green-600 text-white py-3 px-8 rounded-md'>Approve</button>
                        </div>
                        <div>
                            <Square size={32} className='text-red-600'/>
                            <button className='border border-red-600 text-red-600 py-3 px-8 rounded-md'>Decline</button>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-max pt-12 '>
                    <h4 className='text-neutral-600 text-xl font-semibold mb-6'>Driving License</h4>
                    <div className='w-[645px] h-[366px] mx-auto relative '>
                        <Image src="/driving_licence_sample.png" className='object-contain' fill/>
                    </div>
                    <div className='w-full flex items-center justify-center mt-10 gap-x-12 child:flex child:gap-4 child:items-center'>
                        <div>
                            <SquareCheckBig size={32} className='text-green-600'/>
                            <button className='bg-green-600 text-white py-3 px-8 rounded-md'>Approve</button>
                        </div>
                        <div>
                            <Square size={32} className='text-red-600'/>
                            <button className='border border-red-600 text-red-600 py-3 px-8 rounded-md'>Decline</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex items-center justify-center mt-10 gap-x-12 child:flex child:gap-4 child:items-center'>
                {/* <div> */}
                    {/* <SquareCheckBig size={32} className='text-green-600'/> */}
                    <button className='bg-green-600 border border-green-600  text-white py-3 px-8 rounded-md'>Mark as Approved</button>
                {/* </div> */}
                {/* <div> */}
                    {/* <Square size={32} className='text-red-600'/> */}
                    <button className='border bg-red-600 text-white py-3 px-8 rounded-md'>Mark as reject</button>
                {/* </div> */}
            </div>
            
        </div>
    </div>
  )
}
