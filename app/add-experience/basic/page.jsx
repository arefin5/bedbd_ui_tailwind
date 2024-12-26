import Icon from '@/components/Icon'
import { ChevronLeft, ChevronDown } from 'lucide-react'

export default function page() {
  return (
    <div className='w-full h-full min-h-screen'>
        <div className='w-full max-w-[648px] px-6 pt-14 pb-20 pb absolute-x-center '>
            <h3 className='text-primary-400 text-[34px] text-center font-medium mb-12'>Basic info</h3>
            <form>
                <div className='grid gap-4 relative'>
                    <label className='text-neutral-600 text-[22px] font-medium w-full' htmlFor='package-name'>Package Name</label>
                    <input className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' name='package-name' placeholder='3 Days in Cox’s Bazar'/>
                    <span className='text-neutral-400 text-sm font-normal absolute top-[110px] pl-2.5'>Choose a catchy title in 40 characters</span>
                </div>
                <div className='mt-[74px]'>
                    <label className='text-neutral-600 text-base font-medium w-full mt-4'>Destination & Duration</label>
                    <div className='grid gap-6 mt-4 text-neutral-500 text-base '>
                        <div  className='relative z-0'>
                            <select className='w-full z-10 placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' id="options_start_loacation" name="start-location">
                                <option selected disabled>Start Location</option>
                                <option value="dk">Dhaka</option>
                                <option value="ctg">Chittagong</option>
                                <option value="rj">Rajshahi</option>
                                <option value="cm">Cumilla</option>
                                <option value="kh">khulna</option>
                            </select>
                            {/* <Icon name="chevron-down" className="icon absolute-y-center right-6 z-0" size={24}/>  */}
                            <ChevronDown name="chevron-down" className="icon absolute-y-center right-6 z-0" size={24}/> 

                        </div>
                        
                        <div className='relative z-0'>
                            <select className='w-full z-10 placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' id="options_end_loacation" name="end-location">
                                <option selected disabled>Destination</option>
                                <option value="dk">Dhaka</option>
                                <option value="ctg">Chittagong</option>
                                <option value="rj">Rajshahi</option>
                                <option value="cm">Cumilla</option>
                                <option value="kh">khulna</option>
                            </select>
                            {/* <Icon name="chevron-down" className="icon absolute-y-center right-6 z-0" size={24}/>  */}
                            <ChevronDown name="chevron-down" className="icon absolute-y-center right-6 z-0" size={24}/> 

                        </div>
                        
                        <div className='flex gap-10'>
                            <div className='relative z-0 w-full'>
                                <select className='w-full placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' id="option_day_count" name="total-days">
                                    <option selected disabled>Total Days</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                {/* <Icon name="chevron-down" className="icon absolute-y-center right-6 z-0" size={24}/>  */}
                                <ChevronDown name="chevron-down" className="icon absolute-y-center right-6 z-0" size={24}/> 

                            </div>
                            
                            <div className='relative z-0 w-full'>
                                <select className='w-full placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' id="option_night_count" name="total-nights">
                                    <option selected disabled>Total nights</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                {/* <Icon name="chevron-down" className="icon absolute-y-center right-6 z-0" size={24}/>  */}
                                <ChevronDown name="chevron-down" className="icon absolute-y-center right-6 z-0" size={24}/> 

                            </div>
                        </div>
                    </div>
                    <div className='flex gap-8 mt-12'>
                        <button className='btn btn-secondary flex gap-4 max-w-[140px] items-center justify-center'> 
                            {/* <Icon name="chevron-left" size={24} /> */}
                            <ChevronLeft name="chevron-left" size={24} />
                            Back
                        </button>

                        <button className='btn btn-primary'> 
                            continue
                        </button>
                    </div>
                    
                   
                </div>
            </form>
        </div>
    </div>
  )
}
