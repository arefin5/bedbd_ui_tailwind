import Icon from '@/components/Icon'
import { Square, SquareCheckBig, ChevronLeft } from 'lucide-react'

export default function page() {
  return (
    <div className='w-full h-full min-h-screen'>
        <div className='w-full max-w-[648px] px-6 pt-14 pb-20 pb absolute-x-center '>
            <h3 className='text-primary-400 text-[34px] text-center font-medium '>That’s all</h3>
            <h4 className='text-neutral-500 text-[22px] max-w-[484px] mx-auto text-center font-normal'>You’ve done everything you need to before your first guest stays.</h4>
            <form className='mt-12 space-y-10 mt-44'>
                <label className='flex gap-4' htmlFor='document_confirm'>
                    {/* <Square className='icon' size={24} /> */}
                    <SquareCheckBig className='icon' size={24} />
                    <input type='checkbox' name='document_confirm'  />
                    <p className='text-neutral-500 text-base font-normal'>I confirm that this is a legitimate accommodation business with all necessary licenses and permits, which can be shown upon first request. Bedbd.com reserves the right to verify and investigate any details provided in this registration.</p>
                </label>
                <label htmlFor='terms_condition' className='flex gap-4'>
                    <Square className='icon' size={24} />
                    {/* <SquareCheckBig className='icon' size={24} /> */}
                    <input type='checkbox' name='terms_condition'  />
                    <p className='text-neutral-500 text-base font-normal'>I have read, accepted, and agreed to the 
                        <span className='text-secondary-400'>terms and conditions.</span>
                    </p>
                </label>

                <div className='flex gap-8 mt-12'>
                    <button className='btn btn-secondary flex gap-4 max-w-[140px] items-center justify-center'> 
                        <ChevronLeft className='icon' size={24} />
                        {/* <Icon className='icon' name="chevron-left" size={24} /> */}
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
