
"use client";
import Icon from '/components/Icon';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { updateFormData } from '@/redux/list/editListSlice';

// propertyFeature 

export default function Page() {
  const initialAmenitiesState = {
    outdoorScenicView: {
      lakeAccess: false,
      beachAccess: false,
      ski: false
    },
    cookingCleaning: {
      kitchen: false,
      bbqGrill: false,
      outdoorDiningArea: false
    },
    internetOffice: {
      wifi: false,
      dedicatedWorkSpace: false
    },
    service: {
      airCondition: false
    },
    notIncluded: {
      hotTub: false
    },
    bathroom: {
      outdoorShower: false
    },
    bedroomLaundry: {
      washer: false
    },
    parkingFacilities: {
      freeParking: false,
      paidParking: false
    },
    general: {
      pool: false,
      hottub: false,
      patio: false,
      firePit: false,
      poolTable: false,
      indoorFirePlace: false,
      piano: false,
      exerciseEquipment: false
    }
  };

  const [amenities, setAmenities] = useState(initialAmenitiesState);
  const router = useRouter();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  const amenitiesDefault =useSelector((state) => state.editForm.editlist?.amenities) || {};
  useEffect(() => {
    // console.log("Updated Amenities:", amenitiesDefault);
    // amenities
    setAmenities(amenitiesDefault)
  }, [amenitiesDefault]);
  // useEffect(() => {
  //   setAmenities((prevState) => ({
  //     ...prevState,
  //     ...amenitiesDefault
  //   }));
  // }, [amenitiesDefault]);
  const handleCheckboxChange = (category, field) => {
    setAmenities((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: !prevState[category][field]
      }
    }));
  };

  const handleContinue = (e) => {
    e.preventDefault();

    const payload = {
      amenities: amenities
    };
    
    dispatch(updateFormData(payload));
    // console.log('Current Redux state amentise:', formData);
    router.push('/edit-listing/home-rules');
  };
  const back=(e)=>{
    e.preventDefault();
    router.push("/edit-listing/accommodation-details")

  }
  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Amenities</h2>
        <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8" onSubmit={handleContinue}>
          <h3 className="text-neutral-500 font-medium text-xl mb-6">Select Amenities</h3>
          
          <div className="space-y-4">
            <fieldset>
              <legend className="font-medium">Outdoor Scenic View</legend>
              <label>
                <input
                  type="checkbox"
                  checked={amenities?.outdoorScenicView?.lakeAccess}
                  onChange={() => handleCheckboxChange('outdoorScenicView', 'lakeAccess')}
                />
                Lake Access
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={amenities?.outdoorScenicView?.beachAccess}
                  onChange={() => handleCheckboxChange('outdoorScenicView', 'beachAccess')}
                />
                Beach Access
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={amenities?.outdoorScenicView?.ski}
                  onChange={() => handleCheckboxChange('outdoorScenicView', 'ski')}
                />
                Ski
              </label>
            </fieldset>
            
            {/* Repeat similar fieldsets for other categories */}
            <fieldset>
              <legend className="font-medium">Cooking & Cleaning</legend>
              <label>
                <input
                  type="checkbox"
                  checked={amenities?.cookingCleaning?.kitchen}
                  onChange={() => handleCheckboxChange('cookingCleaning', 'kitchen')}
                />
                Kitchen
              </label>
              <label>
              <input
  type="checkbox"
  checked={amenities?.cookingCleaning?.bbqGrill || false}
  onChange={() => handleCheckboxChange('cookingCleaning', 'bbqGrill')}
/>
                {/* <input
                  type="checkbox"
                  checked={amenities?.cookingCleaning?.bbqGrill}
                  onChange={() => handleCheckboxChange('cookingCleaning', 'bbqGrill')}
                /> */}
                BBQ Grill
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={amenities?.cookingCleaning?.outdoorDiningArea}
                  onChange={() => handleCheckboxChange('cookingCleaning', 'outdoorDiningArea')}
                />
                Outdoor Dining Area
              </label>
            </fieldset>

            {/* Add more categories as needed */}
          </div>

          <div className="flex gap-x-8 mt-14">
            <button className="btn btn-secondary max-w-36 relative" type="button"
            onClick={back}
            >
              <Icon name='chevron-left' className="icon absolute-y-center left-4" />
              Back
            </button>
            <button className="btn btn-primary" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
