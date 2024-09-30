
import Icon from '/components/Icon'
import State from './State'

function getPropertyState() {
  return [{
    "_id": "66324566250643f1c5632fa6",
    "title": "Full-furnished",
    "description": " living space, such as an apartment or room, that comes equipped with all necessary furniture, appliances, and amenities for immediate occupancy and comfortable living."
  },
  {
    "_id":  "66324609250643f1c5632fa7",
    "title": "Semi-furnished",
    "description": "living space, such as an apartment or room, that includes some essential furniture and appliances but may require tenants to provide additional items for complete functionality and comfort."
  },
  {
    "_id": "66324653250643f1c5632fa8",
    "title": "Empty",
    "description": "living space, such as an apartment or room, that does not include any furniture or appliances, requiring tenants to furnish it entirely with their own belongings."
  }]
}

 
export default function page() {
  const data = getPropertyState()

    return (
        <div className=" min-h-screen py-20">
          <div className="">
            <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Property State</h2>            
            <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8 ">
              <h3 className="text-neutral-500 font-medium text-xl mb-6">Property Condition</h3>
                <div className='space-y-4' id='property_states'>
                  {
                    data.map(item => <State data={item}/>)
                  }
                </div>
              {/* <PropertyStates data={data}/> */}
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
