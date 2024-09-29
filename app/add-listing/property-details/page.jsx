
import Icon from '/components/Icon'
import Feature from './Feature'
// import PropertyBookingTypes from './PropertyBookingTypes'

// import PropertyFeatures from './PropertyFeatures'
import { Plus } from 'lucide-react'


function getPropertyFeatures() {
  return [{
    "_id":"6633368b1dd563cf2e6ebc92",
    "title": "Dedicated Workspace",
    "description": "A room with wifi that’s well-suited for working"
  },
  {
    "_id":  "663336bf1dd563cf2e6ebc94",
    "title": "Beach View",
    "description": "Guests can book a room within the property. There are common areas that are shared with either the host or other guests."
  },
  {
    "_id":  "663336f01dd563cf2e6ebc95",
    "title": "Shared Bathroom",
    "description": "Guests have access to the entire place and don’t have to share it with the host or other guests."
  }]
}

 
export default function page() {
  const data = getPropertyFeatures()

    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>            
            <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8 ">
              <h3 className="text-neutral-500 font-medium text-xl mb-4 ">Property Title</h3>
              <input name='property_title' type='text' className='form-input' placeholder='Ex; Ahasan Manjil'/>
              <p className='font-normal text-sm  text-neutral-500 ml-5 mb-9'> Choose a catchy title in 40 characters</p>

              <h3 className="text-neutral-500 font-medium text-xl mb-4 ">Property Features</h3>
              <p className='mb-4  text-neutral-500 font-normal text-sm'>Lorem ipsum dolor sit amet consectetur. Gravida faucibus massa dignissim malesuada felis.</p>
              { data.map(item=> <Feature data={item} />)  }
              <button className='flex gap-x-2 mt-3 text-neutral-600 text-base font-medium '>
                <Plus className='icon'/>
                Add more option
              </button>

              <h3 className="text-neutral-500 font-medium text-xl mt-12 mb-4">Property Description</h3>
              <textarea rows="4" name='property_description' type='textarea' className='form-input' placeholder='(optional)'/>

              
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
