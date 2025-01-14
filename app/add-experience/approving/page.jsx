import Icon from '@/components/Icon'
import { CircleCheckBig, Circle, ChevronLeft } from 'lucide-react'

export default function page() {
  return (
    <div className='w-full h-full min-h-screen'>
        <div className='w-full max-w-[648px] px-6 pt-14 pb-20 pb absolute-x-center '>
            <h3 className='text-primary-400 text-[34px] text-center font-medium '>Approving</h3>
            <p className='text-neutral-500 text-sm font-normal text-center'>From your profile dashboard, you also will able to change all availability.</p>
            <form className='mt-12 space-y-10'>
                <div className='space-y-6'>
                    <span className='text-neutral-600 text-[22px] font-medium w-full'>Approving method</span>
                    <div className='space-y-4 pl-6'>
                        <label className='flex gap-4 text-neutral-700 font-medium text-base'>
                            <input className='hidden' name="approving-method"  value="instant" type='radio'/>
                            <CircleCheckBig className="icon" name="circle-check-big" size={24}  />
                            {/* <Icon className="icon" name="circle-check-big" size={24}  /> */}
                            Instant approve
                        </label>
                        <label className='flex gap-4 text-neutral-700 font-medium text-base'>
                            <input className='hidden' name="approving-method"  value="manually" type='radio'/>
                            <Circle className="icon" name="circle" size={24}  />
                            {/* <Icon className="icon" name="circle" size={24}  /> */}
                            approve manually
                        </label>
                    </div>
                </div>

                <div className='space-y-6'>
                    <span className='text-neutral-600 text-[22px] font-medium w-full'>Gender Preference</span>
                    <div className='space-y-4  pl-6'>
                        <label className='flex gap-4 text-neutral-700 font-medium text-base'>
                            <input className='hidden' name="gender-pref"  value="male" type='radio'/>
                            <CircleCheckBig className="icon" name="circle-check-big" size={24}  />
                            {/* <Icon className="icon" name="circle-check-big" size={24}  /> */}
                            Male only
                        </label>
                        <label className='flex gap-4 text-neutral-700 font-medium text-base'>
                            <input className='hidden' name="gender-pref"  value="female" type='radio'/>
                            <Circle className="icon" name="circle" size={24}  />
                            {/* <Icon className="icon" name="circle" size={24}  /> */}

                            Female only
                        </label>
                        <label className='flex gap-4 text-neutral-700 font-medium text-base'>
                            <input className='hidden' name="gender-pref"  value="any" type='radio'/>
                            {/* <Icon className="icon" name="circle" size={24}  /> */}
                            <Circle className="icon" name="circle" size={24}  />

                            Anyone
                        </label>
                    </div>
                </div>

                <div className='flex gap-8 mt-12'>
                    <button className='btn btn-secondary flex gap-4 max-w-[140px] items-center justify-center'> 
                        <ChevronLeft name="chevron-left" size={24} />
                        {/* <Icon name="chevron-left" size={24} /> */}
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
