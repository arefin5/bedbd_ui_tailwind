
"use client"
import { useEffect, useState } from 'react'
import Icon from '/components/Icon'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { updateFormData } from '@/redux/list/createListSlice';

export default function Page() {
  const [country, setCountry] = useState("");
  const [floor, setFloor] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [address, setAddress] = useState("");
  const [thana, setThana] = useState("");
  const [district, setDistrict] = useState("");
  const [postcode, setPostcode] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [googleMap, setGoogleMap] = useState("");
  //
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
          
  }, [])
  const handleContinue = async (e) => {
    // null
    try {
      e.preventDefault();
      if(!thana){
        alert("please Select your City");
        return
      }

      const payload = {
       location: 
          {
            country: country,
            floor: floor,
            streetAddress: streetAddress,
            address: address,
            thana: thana,
            district: district,
            postcode: postcode,
            googlemap: googleMap,
          }
        
      };
      await dispatch(updateFormData(payload));
      router.push('/add-listing/property-location');
    } catch (error) {
      console.log(error)
    }

  }
  const back = (e) => {
    e.preventDefault();
    router.push("/add-listing/property-details");
  };
  return (
    <div className="min-h-screen py-20">
      <div className="">
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Location confirmation</h2>
        <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8" >
          <h3 className="text-neutral-500 font-medium text-xl mb-4">Add details about your location</h3>

          <input
            name='country'
            type='text'
            className='form-input'
            placeholder='Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <div className='mt-10'>
            <input
              type='text'
              name='address_floor'
              className='form-input mb-4'
              placeholder='Apt, floor (if applicable)'
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            />
            <input
              type='text'
              name='address_street-address'
              className='form-input mb-4'
              placeholder='Street address'
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
            <input
              type='text'
              name='address'
              className='form-input mb-4'
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {/* <input
              type='text'
              name='address_2'
              className='form-input'
              placeholder='Address 2'
            /> */}
          </div>

          <div className='mt-10'>
            <input
              type='text'
              name='thana'
              className='form-input mb-4'
              placeholder='city'
              value={thana}
              onChange={(e) => setThana(e.target.value)}
            />
            <input
              type='text'
              name='district'
              className='form-input mb-4'
              placeholder='District'
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <input
              type='text'
              name='postcode'
              className='form-input'
              placeholder='Post Code'
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
          </div>

          <p className='font-normal text-sm text-neutral-500 ml-5 mb-9'>No worries! Your address is only shared with guests after they’ve made a reservation.</p>

          <h3 className="text-neutral-500 font-medium text-xl mb-4">Here, your map</h3>
          <input
            type='text'
            name='google_map'
            className='form-input'
            value={googleMap}
            placeholder='Google Map Link'
            onChange={(e)=>setGoogleMap(e.target.value)}
          />

          <div className="flex gap-x-8 mt-14">
            <button className="btn btn-secondary max-w-36 relative"
              onClick={back}
            >
              <Icon name='chevron-left' className="icon absolute-y-center left-4" />
              Back
            </button>
            <button className="btn btn-primary"
              onClick={handleContinue}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
