
import Icon from '/components/Icon'
import { Plus } from 'lucide-react'



 
export default function page() {

    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Location confirmation</h2>            
            <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8 ">
              <h3 className="text-neutral-500 font-medium text-xl mb-4 ">Add details about your location</h3>
              <input name='country' type='text' className='form-input' placeholder='Country'/>

              <div className='mt-10'>
                <input type='text' 
                    name='address_floor' 
                    className='form-input mb-4' 
                    placeholder='Apt, floor (if applicable)'/>
                <input type='text' 
                    name='address_street-address' 
                    className='form-input mb-4' 
                    placeholder='Street address'/>
                <input type='text' 
                    name='address_0' 
                    className='form-input mb-4' 
                    placeholder='Address'/>
                <input type='text' 
                    name='address_1' 
                    className='form-input' 
                    placeholder='Address 2'/>
              </div>

              <div className='mt-10'>
                <input type='text' 
                    name='thana' 
                    className='form-input mb-4' 
                    placeholder='Thana'/>
                <input type='text' 
                    name='district' 
                    className='form-input mb-4' 
                    placeholder='District'/>                
                <input type='text' 
                    name='post-code' 
                    className='form-input' 
                    placeholder='Post Code'/>
              </div>
              
              
              
              
              <p className='font-normal text-sm  text-neutral-500 ml-5 mb-9'>No worries! Your address is only shared with guests after they’ve made a reservation.</p>

              <h3 className="text-neutral-500 font-medium text-xl mb-4 ">Here, your map</h3>
              <input type='text'
                    name='post-code'
                    className='form-input'
                    value={`https://www.google.com/maps/search/google+map/@23....`}
                    placeholder='Post Code' readOnly/>

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
