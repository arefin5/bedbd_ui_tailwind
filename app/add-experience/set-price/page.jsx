import Icon from "@/components/Icon"
import { Plus, Minus, SquarePen, ChevronLeft } from "lucide-react"

export default function page() {
    
  return (
    <div className='w-full h-full min-h-screen'>
        <div className='w-full max-w-[648px] absolute-x-center top-16 px-3 sm:px-6'>
            <h3 className='text-primary-400 text-[34px] text-center font-medium mb-12'>Set Price</h3>
            <div className='space-y-2'>
                <h3 className='text-[22px] font-medium text-neutral-600'>How much do you want to charge per Person?</h3>
                <p className='text-sm font-normal text-neutral-500'>No worries! You can change it anytime you want.</p>
            </div>

            {/* flex gap-6 justify-center items-center w-full py-10 rounded-lg bg-[#F9F9F9] mt-8 */}
            <div className="mt-4 relative sm:flex sm:gap-6 sm:justify-center sm:items-center sm:w-full sm:py-10 sm:rounded-lg sm:bg-[#F9F9F9] sm:mt-8 pb-12">
            {/* p-2 rounded-full bg-white */}
                <button className="bottom-0 absolute w-1/2 sm:w-fit sm:p-2 sm:rounded-full sm:bg-white left-0  border sm:border-none sm:static flex gap-4 items-center justify-center py-1 rounded-l-lg transition-shadow active:shadow-[0_0_10px_rgba(70,87,241,0.7)]">
                    <span className="sm:hidden"> Decrease </span>
                    {/* <Icon name="minus" size={32} className="icon h-6 w-6 sm:h-8 sm:w-8" /> */}
                    <Minus name="minus" size={32} className="icon h-6 w-6 sm:h-8 sm:w-8" />

                </button>
                {/* text-secondary-400 text-[80px] font-semibold px-2 py-2  border w-[300px]  */}
                <input className=" w-full text-center text-secondary-400 placeholder-neutral-200 focus:placeholder-transparent text-4xl rounded-lg font-semibold py-2 sm:text-secondary-400 sm:text-[80px] sm:font-semibold sm:px-2 py-2  border sm:w-[300px]"  placeholder="$21" />
                {/* p-2 rounded-full bg-white */}
                <button className="bottom-0 absolute w-1/2 sm:w-fit sm:p-2 sm:rounded-full sm:bg-white right-0  border sm:border-none sm:static flex gap-4 items-center justify-center py-1 rounded-r-lg transition-shadow active:shadow-[0_0_10px_rgba(70,87,241,0.7)]">
                    <span className="sm:hidden"> Increase </span>
                    <Plus name="plus" size={32} className="icon h-6 w-6 sm:h-8 sm:w-8" />
                    {/* <Icon name="plus" size={32} className="icon h-6 w-6 sm:h-8 sm:w-8" /> */}

                </button>
            </div>
            <div className="flex items-center justify-center text-neutral-500 my-6 text-base font-medium gap-6">
                <p>Less then 4 years, it’s free. For 4-12 years kid, 30% less</p>
                {/* <Icon name="square-pen" size={24} className="icon" /> */}
                <SquarePen name="square-pen" size={24} className="icon" />

            </div>
            <ul>
                <li className="flex border-b w-full justify-between text-neutral-500 text-base py-2 font-medium">
                    <span className="ml-6 sm:ml-10 sm:ml-20">Ground Price</span>
                    <span className="mr-6 sm:mr-10 sm:mr-20">$21</span>
                </li>
                <li className="flex border-b w-full justify-between text-neutral-500 text-base py-2 font-medium">
                    <span className="ml-6  sm:ml-20">Service Fee</span>
                    <span className="mr-6  sm:mr-20">$2</span>
                </li>

                <li className="flex border-b w-full justify-between text-neutral-500 text-base py-2 font-medium">
                    <span className="ml-6  sm:ml-20">Taxes</span>
                    <span className="mr-6  sm:mr-20">$1</span>
                </li>
            </ul>
            <div className="flex w-full justify-between text-secondary-400 text-base py-2 font-medium">
                <span className="ml-6  sm:ml-20">you will earn</span>
                <span className="mr-6  sm:mr-20">$21</span>
            </div>

            <p className="max-w-[430px] mt-6 font-normal text-sm text-neutral-600 mx-auto">Check your nearest services price to make more competitive. It will increase your changes of getting more booking</p>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 my-28'>
                <button className='btn btn-secondary flex gap-4 md:max-w-[140px] items-center justify-center'> 
                    <ChevronLeft name="chevron-left" size={24} />
                    {/* <Icon name="chevron-left" size={24} /> */}

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
