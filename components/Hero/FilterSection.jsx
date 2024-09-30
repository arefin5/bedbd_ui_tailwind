import PropertyTagFilterClientOperation from './PropertyTagFilterClientOperation'
import { Filter } from 'lucide-react'

export default function FilterSection() {
  return (
    <div className=" text-sm font-semibold text-center my-8 container ml-auto mr-auto">
            <div className='w-full md:ml-auto md:mr-auto flex items-center justify-center gap-x-4 '>
                <div className=" text-primary-400 w-max flex gap-x-2.5 items-center py-3 px-8 border border-primary-400 rounded-full">
                    <Filter className="icon opacity-100 mr-3"/>
                    Filter
                </div>
                <div className="text-neutral-600 font-semibold space-x-1 select-none flex gap-x-3 flex-nowrap overflow-x-auto no-scrollbar whitespace-nowrap w-100" id="property_tag_filter">
                
                    <input className='hidden' type="checkbox" id="tag-all" name="property_tag_filter"  value="all"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-all">All</label>

                    <input className='hidden' type="checkbox" id="tag-exclusive" name="property_tag_filter" value="exclusive"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-exclusive">Exclusive</label>

                    <input className='hidden' type="checkbox" id="tag-nature" name="property_tag_filter" value="nature"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded'htmlFor="tag-nature">Nature</label>

                    <input className='hidden' type="checkbox" id="tag-hill" name="property_tag_filter" value="hill"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-hill">Hill</label>

                    <input className='hidden' type="checkbox" id="tag-sea-beach" name="property_tag_filter" value="sea-beach"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-sea-beach">Sea-beach</label>

                    <input className='hidden' type="checkbox" id="tag-lake-view" name="property_tag_filter" value="lake-view"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-lake-view">Lake view</label>

                    <input className='hidden' type="checkbox" id="tag-home" name="property_tag_filter" value="home"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-home">Home</label>

                    <input className='hidden' type="checkbox" id="tag-room" name="property_tag_filter" value="room"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-room">Room</label>

                    <input className='hidden' type="checkbox" id="tag-cottage" name="property_tag_filter" value="cottage"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-cottage">Cottage</label>




                    <input className='hidden' type="checkbox" id="tag-all_1" name="property_tag_filter"  value="all"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-all_1">All</label>

                    <input className='hidden' type="checkbox" id="tag-exclusive_1" name="property_tag_filter" value="exclusive"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-exclusive_1">Exclusive</label>

                    <input className='hidden' type="checkbox" id="tag-nature_1" name="property_tag_filter" value="nature"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-nature_1">Nature</label>

                    <input className='hidden' type="checkbox" id="tag-hill" name="property_tag_filter" value="hill"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-hill">Hill</label>

                    <input className='hidden' type="checkbox" id="tag-sea-beach_1" name="property_tag_filter" value="sea-beach"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-sea-beach_1">Sea-beach</label>

                    <input className='hidden' type="checkbox" id="tag-lake-view_1" name="property_tag_filter" value="lake-view"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-lake-view_1">Lake view</label>

                    <input className='hidden' type="checkbox" id="tag-home_1" name="property_tag_filter" value="home"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-home_1">Home</label>

                    <input className='hidden' type="checkbox" id="tag-room_1" name="property_tag_filter" value="room"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-room_1">Room</label>

                    <input className='hidden' type="checkbox" id="tag-cottage_1" name="property_tag_filter" value="cottage"/>
                    <label className='relative cursor-pointer py-2 px-4 rounded whitespace-nowrap'htmlFor="tag-cottage_1">Cottage</label>
                    <PropertyTagFilterClientOperation/>
                </div>
            </div>
        </div>
  )
}
