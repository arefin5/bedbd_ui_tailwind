"use client"
import Icon from '/components/Icon'
import Feature from './Feature'
// import PropertyBookingTypes from './PropertyBookingTypes'

// import PropertyFeatures from './PropertyFeatures'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { updateFormData } from '@/redux/list/createListSlice';


function getPropertyFeatures() {

  return [{
    "_id": "6633368b1dd563cf2e6ebc92",
    "title": "Dedicated Workspace",
    "description": "A room with wifi that’s well-suited for working"
  },
  {
    "_id": "663336bf1dd563cf2e6ebc94",
    "title": "Beach View",
    "description": "Guests can book a room within the property. There are common areas that are shared with either the host or other guests."
  },
  {
    "_id": "663336f01dd563cf2e6ebc95",
    "title": "Shared Bathroom",
    "description": "Guests have access to the entire place and don’t have to share it with the host or other guests."
  }]
}


export default function page() {
  const data = getPropertyFeatures()
  const [propertyTitle, setTitle] = useState("");
  const [description, setdescription] = useState('');
  const [propertyFeature, setpropertyFeature] = useState({
    sharedbathroom: false,
    beachview: false,
    dedicatedworkspace: false,
  })
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(propertyFeature)
  }, [propertyFeature])
  // 

  const handleContinue = async (e) => {
    e.preventDefault();
    if (propertyTitle === "" && description === "") return
    // Check if propertyCondition is not empty
    if (propertyFeature === "") {
      alert('Please select a property condition before continuing.');
      return;
    }
    // console.log(propertyCondition)
    const payload = {
      propertyFeature: propertyFeature,
      title: propertyTitle,
      description: description
    }
    await dispatch(updateFormData(payload));
    // console.log('Current Redux state:', formData);
    router.push('/add-listing/location-confirmation');
  };

  const back = (e) => {
    e.preventDefault();
    router.push("/add-listing/property-booking-types")

  }
  return (
    <div className=" min-h-screen py-20">
      <div className="">
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>
        <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8 ">
          <h3 className="text-neutral-500 font-medium text-xl mb-4 ">Property Title</h3>
          <input name='property_title'
            type='text'
            className='form-input'
            placeholder='Ex; Ahasan Manjil'
            value={propertyTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className='font-normal text-sm  text-neutral-500 ml-5 mb-9'> Choose a catchy title in 40 characters</p>

          <h3 className="text-neutral-500 font-medium text-xl mb-4 ">Property Features</h3>
          <p className='mb-4  text-neutral-500 font-normal text-sm'>Lorem ipsum dolor sit amet consectetur. Gravida faucibus massa dignissim malesuada felis.</p>
          {data.map(item => <Feature data={item}
            setpropertyFeature={setpropertyFeature}
            propertyFeature={propertyFeature}
          />)}
          <button className='flex gap-x-2 mt-3 text-neutral-600 text-base font-medium '>
            <Plus className='icon' />
            Add more option
          </button>

          <h3 className="text-neutral-500 font-medium text-xl mt-12 mb-4">Property Description</h3>
          <textarea rows="4"
            name='property_description'
            type='textarea'
            className='form-input'
            placeholder='(optional)'
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />


          <div className="flex gap-x-8 mt-14">
            <button className="btn btn-secondary max-w-36 relative">
              <Icon name='chevron-left' className="icon absolute-y-center left-4 "
                onClick={back}
              />
              Back</button>
            <button className="btn btn-primary"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}
