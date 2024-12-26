import Icon from "@/components/Icon"
import { Plus, ChevronLeft, CirclePlus } from "lucide-react"
export default function page() {
  return (
    <div className='w-full h-full min-h-screen'>
        <div className='w-full max-w-[648px] absolute-x-center top-16 px-3 md:px-6'>
            <h3 className='text-primary-400 text-[34px] text-center font-medium mb-12'>Place & Time</h3>
            <div className="">
                <div className='space-y-4'>
                    <h3 className='text-[22px] font-medium text-neutral-600'>Day 1: Departure and Arrival</h3>
                    <p className='text-sm font-normal text-neutral-500'>Lorem ipsum dolor sit amet consectetur. Gravida faucibus massa dignissim malesuada felis.</p>
                </div>

                <div className='space-y-4 mt-8 relative'>
                    <h3 className='text-[22px] font-medium text-neutral-600'>Mornimg:</h3>
                    <div className='grid gap-y-4 w-full md:grid-cols-[173px_auto] md:gap-y-4 md:gap-x-8'>
                        <div className='grid w-full md:max-w-[173px] gap-[6px]'>
                            <label className='font-normal text-sm text-neutral-600 '>At</label>
                            <select className='w-full  text-neutral-300 text-base font-medium placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' id="options_start_loacation" name="start-location">
                                <option selected disabled>Select Time</option>
                                <option value="8_00">8:00</option>
                                <option value="9_00">9:00</option>
                                <option value="10_00">10:00</option>
                                <option value="11_00">11:00</option>
                                <option value="12_00">12:00</option>
                            </select>
                        </div>
                        <div className='grid gap-[6px]'>
                            <label className='font-normal text-sm text-neutral-600'>We will start our Journey</label>
                            <input className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' placeholder='Location'/>
                        </div>
                        <input className='md:col-span-2 placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' placeholder='Write here'/>
                    </div>
                    {/* <Icon className="icon md:absolute -right-16 bottom-[80px]" strokeWidth={1} name="circle-plus" size={40}/> */}
                    <CirclePlus className="icon md:absolute -right-16 bottom-[80px]" strokeWidth={1} name="circle-plus" size={40}/>

                </div>

                <div className='space-y-4 mt-8 relative'>
                    <h3 className='text-[22px] font-medium text-neutral-600'>Afternoon:</h3>
                    <div className='grid gap-y-4 w-full md:grid-cols-[173px_auto] md:gap-y-4 md:gap-x-8'>
                        <div className='grid w-full md:max-w-[173px] gap-[6px]'>
                            <label className='font-normal text-sm text-neutral-600 '>At</label>
                            <select className='w-full  text-neutral-300 text-base font-medium placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' id="options_start_loacation" name="start-location">
                                <option selected disabled>Select Time</option>
                                <option value="8_00">8:00</option>
                                <option value="9_00">9:00</option>
                                <option value="10_00">10:00</option>
                                <option value="11_00">11:00</option>
                                <option value="12_00">12:00</option>
                            </select>
                        </div>
                        <div className='grid gap-[6px]'>
                            <label className='font-normal text-sm text-neutral-600'>We will be there</label>
                            <input className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' placeholder='Location'/>
                        </div>
                        <input className='md:col-span-2 placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' placeholder='Write here'/>
                    </div>
                    {/* <Icon className="icon md:absolute -right-16 bottom-[80px]" strokeWidth={1} name="circle-plus" size={40}/> */}
                    <CirclePlus className="icon md:absolute -right-16 bottom-[80px]" strokeWidth={1} name="circle-plus" size={40}/>

                </div>

                <div className='space-y-4 mt-8 relative'>
                    <h3 className='text-[22px] font-medium text-neutral-600'>vening:</h3>
                    <div className='grid gap-y-4 w-full md:grid-cols-[173px_auto] md:gap-y-4 md:gap-x-8'>
                        <div className='grid w-full md:max-w-[173px] gap-[6px]'>
                            <label className='font-normal text-sm text-neutral-600 '>At</label>
                            <select className='w-full  text-neutral-300 text-base font-medium placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' id="options_start_loacation" name="start-location">
                                <option selected disabled>Select Time</option>
                                <option value="8_00">8:00</option>
                                <option value="9_00">9:00</option>
                                <option value="10_00">10:00</option>
                                <option value="11_00">11:00</option>
                                <option value="12_00">12:00</option>
                            </select>
                        </div>
                        <div className='grid gap-[6px]'>
                            <label className='font-normal text-sm text-neutral-600'>We will start our Journey</label>
                            <input className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' placeholder='Location'/>
                        </div>
                        <input className='md:col-span-2 placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' placeholder='Write here'/>
                    </div>
                    {/* <Icon className="icon md:absolute -right-16 bottom-[80px]" strokeWidth={1} name="circle-plus" size={40}/> */}
                    <CirclePlus className="icon md:absolute -right-16 bottom-[80px]" strokeWidth={1} name="circle-plus" size={40}/>

                </div>

                <div className='space-y-4 mt-8 relative'>
                    <h3 className='text-[22px] font-medium text-neutral-600'>Dinner:</h3>
                    <div className='grid gap-y-4 w-full md:grid-cols-[173px_auto] md:gap-y-4 md:gap-x-8'>
                        <div className='grid w-full md:max-w-[173px] gap-[6px]'>
                            <label className='font-normal text-sm text-neutral-600 '>At</label>
                            <select className='w-full  text-neutral-300 text-base font-medium placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' id="options_start_loacation" name="start-location">
                                <option selected disabled>Select Time</option>
                                <option value="8_00">8:00</option>
                                <option value="9_00">9:00</option>
                                <option value="10_00">10:00</option>
                                <option value="11_00">11:00</option>
                                <option value="12_00">12:00</option>
                            </select>
                        </div>
                        <div className='grid gap-[6px]'>
                            <label className='font-normal text-sm text-neutral-600'>We will start our Journey</label>
                            <input className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' placeholder='Location'/>
                        </div>
                        <input className='md:col-span-2 placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' placeholder='Write here'/>
                    </div>
                    {/* <Icon className="icon md:absolute -right-16 bottom-[80px]" strokeWidth={1} name="circle-plus" size={40}/> */}
                    <CirclePlus className="icon md:absolute -right-16 bottom-[80px]" strokeWidth={1} name="circle-plus" size={40}/>

                </div>
            </div>

            <div className="w-full relative mt-16">
                <h3 className="text-neutral-600 text-[22px] font-medium">Add Details about Day 2</h3>
                {/* <Icon className="icon md:absolute-y-center -right-16" strokeWidth={1} name="circle-plus" size={40}/> */}
                <CirclePlus className="icon md:absolute-y-center -right-16" strokeWidth={1} name="circle-plus" size={40}/>

            </div>

            <div className='flex flex-col md:flex-row gap-4 md:gap-8 my-28'>
                <button className='btn btn-secondary flex gap-4 md:max-w-[140px] items-center justify-center'> 
                    <Icon name="chevron-left" size={24} />
                    <ChevronLeft name="chevron-left" size={24} />
                    Back
                </button>

                <button className='btn btn-primary'> 
                    continue
                </button>
            </div>
        </div>
    </div>
  )
}
