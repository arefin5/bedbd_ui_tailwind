import InputRadioIcon from "./InputRadioIcon"

export default function PropertyList() {
  return (
    <div className='py-6 px-4 w-full max-w-sm bg-secondary-50 rounded-lg '>
        <div className='text-neutral-500  flex justify-between'>
            <span className='font-semibold'>
            Property List (5)
            </span>
            <button className='border-none text-sm font-medium hover:underline hover:scale-110 transition ease-in-out delay-150'> see all </button>
        </div>
        <ul className='space-y-5 mt-6 max-h-56 overflow-y-auto'>
            <li className='flex gap-x-4'>
            <input className='hidden' type="radio" id="host_property_0" name="host_property" value="host_property_0"/>
            <InputRadioIcon inputId='host_property_0'/>
            <label htmlFor="host_property_0" className="">
                <span className='block text-neutral-600 text-lg font-normal'>{`Nahar Manjil`}</span>
                <span className='block text-neutral-500 text-base font-medium mt-2'>{`Road: 18, Sector: 11, Uttara`}</span>
            </label>
            </li>

            <li className='flex gap-x-4'>
            <input className='hidden' type="radio" id="host_property_1" name="host_property" value="host_property_1"/>
            <InputRadioIcon inputId='host_property_1'/>
            <label htmlFor="host_property_1" className="">
                <span className='block text-neutral-600 text-lg font-normal'>{`Guest House`}</span>
                <span className='block text-neutral-500 text-base font-medium mt-2'>{`Road: 18, Sector: 11, Uttara`}</span>
            </label>
            </li>

            <li className='flex gap-x-4'>
            <input className='hidden' type="radio" id="host_property_3" name="host_property" value="host_property_3"/>
            <InputRadioIcon inputId='host_property_3'/>
            <label htmlFor="host_property_3" className="">
                <span className='block text-neutral-600 text-lg font-normal'>{`Lorem Ipsum`}</span>
                <span className='block text-neutral-500 text-base font-medium mt-2'>{`Lorem Ipsum dolor shit`}</span>
            </label>
            </li> 
            
        </ul>
    </div>
  )
}
