import Icon from '@/components/Icon'
import { CircleCheckBig, Circle, ChevronLeft } from 'lucide-react'

export default function page() {
  return (
    <div className='w-full h-full min-h-screen'>
        <div className='w-full max-w-[648px] px-6 pt-14 pb-20 pb absolute-x-center '>
            <h3 className='text-primary-400 text-[34px] text-center font-medium '>Availability</h3>
            <p className='text-neutral-500 text-sm font-normal text-center'>From your profile dashboard, you also will able to change all availability.</p>
            <form className='mt-12 space-y-10'>
                <div className='space-y-6'>
                    <span className='text-neutral-600 text-[22px] font-medium w-full'>From when guests can start check in?</span>
                    <div className='space-y-4 pl-6'>
                        <label className='flex gap-4 text-neutral-700 font-medium text-base'>
                            <input className='hidden' name="start-option"  value="asap" type='radio'/>
                            {/* <Icon className="icon" name="circle-check-big" size={24}  /> */}
                            <CircleCheckBig className="icon" name="circle-check-big" size={24}  />
                            As soon as possible
                        </label>
                        <label className='flex gap-4 text-neutral-700 font-medium text-base'>
                            <input className='hidden' name="start-option"  value="specific" type='radio'/>
                            <Circle className="icon" name="circle" size={24}  />
                            {/* <Icon className="icon" name="circle" size={24}  /> */}
                            On a specific date
                        </label>
                    </div>
                    <input name='set-date' className='w-full placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' placeholder='set-date'/>
                    {/* <span className='text-neutral-400 text-sm font-normal absolute top-[110px] pl-2.5'>Choose a catchy title in 40 characters</span> */}
                </div>

                <div className='space-y-6'>
                    <span className='text-neutral-600 text-[22px] font-medium w-full'>Want to allow 30+ night stays?</span>
                    <div className='space-y-4  pl-6'>
                        <label className='flex gap-4 text-neutral-700 font-medium text-base'>
                            <input className='hidden' name="night-stay-option"  value="asap" type='radio'/>
                            <CircleCheckBig className="icon" name="circle-check-big" size={24}  />
                            {/* <Icon className="icon" name="circle-check-big" size={24}  /> */}
                            Yes
                        </label>
                        <label className='flex gap-4 text-neutral-700 font-medium text-base'>
                            <input className='hidden' name="night-stay-option"  value="specific" type='radio'/>
                            <Circle className="icon" name="circle" size={24}  />
                            {/* <Icon className="icon" name="circle" size={24}  /> */}
                            No
                        </label>
                    </div>
                    <input name='maximum-night' className='w-full placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' placeholder='Set Maximum night'/>
                    {/* <span className='text-neutral-400 text-sm font-normal absolute top-[110px] pl-2.5'>Choose a catchy title in 40 characters</span> */}
                </div>

                <div className='space-y-6'>
                    <span className='text-neutral-600 text-[22px] font-medium w-full'>Want to stop getting booked after a time frame?</span>
                    <div className='space-y-4  pl-6'>
                        <label className='flex gap-4 text-neutral-700 font-medium text-base'>
                            <input className='hidden' name="extend-embargo-option"  value="asap" type='radio'/>
                            <CircleCheckBig className="icon" name="circle-check-big" size={24}  />
                            {/* <Icon className="icon" name="circle-check-big" size={24}  /> */}
                            Yes
                        </label>
                        <label className='flex gap-4 text-neutral-700 font-medium text-base'>
                            <input className='hidden' name="extend-embargo-option"  value="specific" type='radio'/>
                            {/* <Icon className="icon" name="circle" size={24}  /> */}
                            <Circle className="icon" name="circle" size={24}  />
                            No
                        </label>
                    </div>
                    <input name='maximum-extend' className='w-full placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' placeholder='Set Maximum person'/>
                    {/* <span className='text-neutral-400 text-sm font-normal absolute top-[110px] pl-2.5'>Choose a catchy title in 40 characters</span> */}
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
            </form>
        </div>
    </div>
  )
}
