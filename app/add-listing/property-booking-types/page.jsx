
import Icon from '/components/Icon'
// import PropertyBookingTypes from './PropertyBookingTypes'
import BookingType from './BookingType'
import { Plus } from 'lucide-react'


function getPropertyBookingType() {
  return [{
    "_id":  "663389106a89b8b09c9afcca",
    "title": "A private room",
    "description": "Guests can book a room within the property. There are common areas that are shared with either the host or other guests."
  },
  {
    "_id":  "663389526a89b8b09c9afcd1",
    "title": "Entire place",
    "description": "Guests have access to the entire place and don’t have to share it with the host or other guests."
  }]
}

 
export default function page() {
  const data = getPropertyBookingType()

    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>            
            <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8 ">
              <h3 className="text-neutral-500 font-medium text-xl mb-6">What can guests book?</h3>
              {/* <PropertyBookingTypes data={data}/> */}
              <div className="space-y-4" id='property_booking_types'>
                { 
                  data.map(item=>
                            <BookingType 
                              data={item}
                            />) 
                }
              </div>
              <button className='flex gap-x-2 mt-3 text-neutral-600 text-base font-medium '>
                <Plus className='icon'/>
                Add more option
              </button>
              <div className="flex gap-x-8 mt-14">
                <button className="btn btn-secondary max-w-36 relative">
                  <Icon name='chevron-left' className="icon absolute-y-center left-4 "/> 
                  Back</button>
                <button className="btn btn-primary">
                  Continue
                </button>
              </div>
              </form>
          </div>
        </div>
        
      )
}
