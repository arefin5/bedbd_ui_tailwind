import PropertyTypeSelectClientOperation from './PropertyTypeSelectClientOperation'

export default function PropertyTypeSelect() {
  return (
    <div className=" hidden md:inline-flex md:space-x-2 md:absolute-x-center md:-top-16 md:w-max">
        <h3 className='uppercase text-primary-400 text-4xl font-bold '>find</h3>
        <div className="text-neutral-600 font-semibold space-x-7 mt-auto select-none" id="property_type_select">
            
            <input className='hidden' type="radio" id="all" name="property_type"  value="all"/>
            <label className='relative cursor-pointer'htmlFor="all">All</label>

            <input className='hidden' type="radio" id="rooms" name="property_type" value="rooms"/>
            <label className='relative cursor-pointer'htmlFor="rooms">Rooms</label>

            <input className='hidden' type="radio" id="apartment" name="property_type" value="apartment"/>
            <label className='relative cursor-pointer'htmlFor="apartment">Apartment</label>

            <input className='hidden' type="radio" id="cabin" name="property_type" value="cabin"/>
            <label className='relative cursor-pointer'htmlFor="cabin">Cabin</label>

            <input className='hidden' type="radio" id="home-stay" name="property_type" value="home-stay"/>
            <label className='relative cursor-pointer'htmlFor="home-stay">Home Stay</label>

            <input className='hidden' type="radio" id="villas" name="property_type" value="villas"/>
            <label className='relative cursor-pointer'htmlFor="villas">Villas</label>

            <input className='hidden' type="radio" id="cottage" name="property_type" value="cottage"/>
            <label className='relative cursor-pointer'htmlFor="cottage">Cottage</label>

            <PropertyTypeSelectClientOperation/>
        </div>
    </div>
  )
}
