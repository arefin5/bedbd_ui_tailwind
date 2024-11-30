import { SquareArrowDownRight, Trash2 } from "lucide-react"
import ToggleButton from "./ToggleButton"


export default function page() {
  return (
    <div className="pt-10 px-8 pb-6 w-full ">
        <div className='bg-secondary-50 rounded-lg p-6 w-full h-full'>
            <div className='flex items-center justify-between'>
                <h3 className='text-neutral-600 text-2xl font-semibold'>Property List</h3>
                <div className='flex gap-6'>
                    <select className='px-6 py-2 border text-neutral-600 border-neutral-200 rounded-lg'>
                        <option disabled selected>City</option>
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                        <option>khulna</option>
                    </select>
                    <select  className='px-6 py-2 border text-neutral-600 border-neutral-200 rounded-lg'>
                        <option disabled selected>Country</option>
                        <option>Bangladesh</option>
                        <option>India</option>
                        <option>Nepal</option>

                    </select>
                </div>
            </div>

            <ul className='text-neutral-400 font-xl font-medium | flex gap-14 py-6'>
                <li>Pending</li>
                <li className='text-primary-400 underline'>Listed</li>
                <li>Rejected</li>
                <li>Inactive</li>
            </ul>

            <div>
                {/* <div>
                    <ul className='grid grid-cols-[104px_250px_200px_180px_162px_154px] | text-neutral-600 text-base font-medium bg-white rounded-lg border border-neutral-200 py-4'>
                        <li className='marker-class pl-6'>Owner</li>
                        <li className='marker-class pl-6'>Property Name</li>
                        <li className='marker-class pl-6 text-center'>City</li>
                        <li className='marker-class pl-6 text-center'>Revenue</li>
                        <li className='marker-class pl-6 text-center'>Files</li>
                        <li className='marker-class pl-6 text-center'>Action</li>
                    </ul>
                </div> */}
                <div className='text-neutral-400 text-base font-medium font-medium'>
                    <ul className='grid grid-cols-[100px_230px_200px_170px_140px_160px] |  font-medium bg-white rounded-lg border border-neutral-200 py-2'>
                        <li className='pl-6'>Owner</li>
                        <li className='pl-6'>Property Name</li>
                        <li className='pl-6 text-center'>City</li>
                        <li className='pl-6 text-center'>Revenue</li>
                        <li className='pl-6 text-center'>Files</li>
                        <li className='pl-6 text-center'>Action</li>
                    </ul>
                    <div className="space-y-2 mt-2">
                        <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent'>
                            <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
                            <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
                            <li className='pl-6 text-center'>Chattogram</li>
                            <li className='pl-6 text-center'>23/13,230</li>
                            <li className='pl-6 text-center'>
                                <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
                                    <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
                                </button>
                            </li>
                            <li className='pl-6 text-center flex items-center justify-center gap-6'>
                                <button className="py-2 px-2 rounded-lg bg-neutral-50">
                                    <ToggleButton/>
                                </button>
                                <button className="py-2 px-2 rounded-lg bg-[#F7E1E1]">
                                    <Trash2 className="icon text-[#FF4D4D]" size={24}/>
                                </button>
                            </li>
                        </ul>
                        <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent'>
                            <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
                            <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
                            <li className='pl-6 text-center'>Dhaka</li>
                            <li className='pl-6 text-center'>23/13,230</li>
                            <li className='pl-6 text-center'>
                                <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
                                    <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
                                </button>
                            </li>
                            <li className='pl-6 text-center flex items-center justify-center gap-6'>
                                <button className="py-2  px-2 rounded-lg bg-neutral-50">
                                    <ToggleButton/>
                                </button>
                                <button className="py-2  px-2 rounded-lg bg-[#F7E1E1]">
                                    <Trash2 className="icon text-[#FF4D4D]" size={24}/>
                                </button>
                            </li>
                        </ul>
                        <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent'>
                            <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
                            <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
                            <li className='pl-6 text-center'>Chattogram</li>
                            <li className='pl-6 text-center'>23/13,230</li>
                            <li className='pl-6 text-center'>
                                <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
                                    <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
                                </button>
                            </li>
                            <li className='pl-6 text-center flex items-center justify-center gap-6'>
                                <button className="py-2  px-2 rounded-lg bg-neutral-50">
                                    <ToggleButton/>
                                </button>
                                <button className="py-2  px-2 rounded-lg bg-[#F7E1E1]">
                                    <Trash2 className="icon text-[#FF4D4D]" size={24}/>
                                </button>
                            </li>
                        </ul>
                        <ul className='admin-property-list-table-item even:bg-white odd:bg-transparent'>
                            <li className='pl-6 text-secondary-400 hover:underline cursor-pointer'>45336</li>
                            <li className='pl-6'>Property A <span className='text-secondary-400 hover:underline cursor-pointer'>(45336)</span></li>
                            <li className='pl-6 text-center'>Chattogram</li>
                            <li className='pl-6 text-center'>23/13,230</li>
                            <li className='pl-6 text-center'>
                                <button className="rounded-lg mx-auto bg-[#E7EDFF] p-2 ">
                                    <SquareArrowDownRight className="icon text-[#45B500]" size={24}/>
                                </button>
                            </li>
                            <li className='pl-6 text-center flex items-center justify-center gap-6'>
                                <button className="py-2  px-2 rounded-lg bg-neutral-50">
                                    <ToggleButton/>
                                </button>
                                <button className="py-2  px-2 rounded-lg bg-[#F7E1E1]">
                                    <Trash2 className="icon text-[#FF4D4D]" size={24}/>
                                </button>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
