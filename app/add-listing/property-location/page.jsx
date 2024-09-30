
import Icon from '/components/Icon'
import { Plus } from 'lucide-react'
import dynamic from 'next/dynamic';
// import Map from './map'
const LocationMap = dynamic(() => import('./LocationMap'), { ssr: false });


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
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Property Location</h2>            
            <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8 ">
              <h3 className="text-neutral-500 font-medium text-xl mb-4 ">Find your place</h3>
              

                <LocationMap/>
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
