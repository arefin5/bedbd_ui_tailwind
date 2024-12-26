import Icon from '@/components/Icon'
import { Plus, PlusCircle, MinusCircle, ChevronLeft, CirclePlus, CircleMinus } from 'lucide-react'

export default function page() {
  return (
    <div className='w-full h-full min-h-screen'>
        <div className='w-full max-w-[648px] absolute-x-center top-0 pt-14 pb-20 px-6 '>
            <h3 className='text-primary-400 text-[34px] text-center font-medium mb-12'>Package rules</h3>
            <form className='space-y-8'>
                <div className='relative'>
                    <div className='grid gap-4 relative'>
                        <label className='text-neutral-600 text-[22px] font-medium w-full' htmlFor='package-name'>Cancellation Policy</label>
                        <input className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' name='cancle-policy-0' placeholder='ex:...Free cancellation up to 7 days before departure'/>
                        <input className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' name='cancle-policy-1' placeholder='ex:...Free cancellation up to 7 days before departure'/>
                        <input className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' name='cancle-policy-1' placeholder='ex:...No refund for cancellations within 48 hours of departure.'/>
                    </div>
                    <button className='flex gap-2 text-secondary-400 text-sm font-medium mt-2'>
                        {/* <Icon className="icon" name="plus" />  */}
                        <Plus className="icon" name="plus" /> 
                        <span>Add field</span>
                    </button>
                    <div className='flex gap-14 absolute top-[150px] -right-44'>
                        <button>
                            {/* <Icon className="icon" name="circle-plus" strokeWidth={1} size={40} /> */}
                            <CirclePlus className="icon" name="circle-plus" strokeWidth={1} size={40} />
                        </button>
                        <button>
                            {/* <Icon className="icon" name="circle-minus" strokeWidth={1} size={40} /> */}
                            <CircleMinus className="icon" name="circle-minus" strokeWidth={1} size={40} />
                        </button>
                    </div>
                </div>

                

                <div>
                    <div className='grid gap-4 relative'>
                        <label className='text-neutral-600 text-[22px] font-medium w-full' htmlFor='package-name'>Child Policy</label>
                        <input className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' name='child-policy-0' placeholder='ex:...Children under 5 years old travel free (sharing beds with parents).'/>
                        <input className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' name='child-policy-1' placeholder='ex:...Reduced rates apply for children aged 5–10 years.'/>                        
                    </div>
                    <button className='flex gap-2 text-secondary-400 text-sm font-medium mt-2'>
                        {/* <Icon className="icon" name="plus" />  */}
                        <Plus className="icon" name="plus" /> 
                        <span>Add field</span>
                    </button>
                </div>

                <div>
                    <div className='grid gap-4 relative'>
                        <label className='text-neutral-600 text-[22px] font-medium w-full' htmlFor='package-name'>Departure & Timeliness</label>
                        <input className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' name='child-policy-0' placeholder='ex:...Guests must adhere to the departure and activity schedules.'/>
                        <textarea row="2" className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' name='child-policy-1' placeholder='ex:...Delays caused by guests may lead to forfeited activities or transportation.'/>
                        
                    </div>
                    <button className='flex gap-2 text-secondary-400 text-sm font-medium mt-2'>
                        {/* <Icon className="icon" name="plus"/>  */}
                        <Plus className="icon" name="plus"/> 
                        <span>Add field</span>
                    </button>
                </div>
                
                <div>
                    <div className='grid gap-4 relative'>
                        <label className='text-neutral-600 text-[22px] font-medium w-full' htmlFor='package-name'>Special Requests</label>
                        <textarea row="2" className='placeholder-text-md placeholder-text-neutral-500 placeholder-font-medium py-4 px-6 rounded-lg border border-netural-300 focus:ring-1 focus:ring-neutral-600 focus:placeholder-transparent' name='child-policy-0' placeholder='ex:...Dietary preferences (e.g., vegetarian, halal) or specific needs must be communicated at least 2 days in advance.'/>
                    </div>
                    <button className='flex gap-2 text-secondary-400 text-sm font-medium mt-2'>
                        {/* <Icon className="icon" name="plus" />  */}
                        <Plus className="icon" name="plus" /> 

                        <span>Add field</span>
                    </button>
                </div>

                <div className='flex gap-8 mt-20 '>
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
