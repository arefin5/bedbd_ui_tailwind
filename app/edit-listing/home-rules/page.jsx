
"use client"
import Icon from '/components/Icon'
import Feature from './Feature'

import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { updateFormData } from '@/redux/list/editListSlice';

import getAllTimeSegments from './getAllTimeSegments'
import OptionIcon from './OptionIcon'
import { useEffect, useState } from 'react'



export default function Page() {
  const [propertyTitle, setTitle] = useState("");
  const [description, setdescription] = useState('');
  const [propertyFeature, setpropertyFeature] = useState({});
  const [submiteProperty,setSubmiteProperty]=useState({})
  const currentFormData = useSelector((state) => state.editForm);
  const currentFormDataProperty = useSelector((state) => state.editForm.editlist?.homerule || {});
  const [features, setFeatures] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFeatureTitle, setNewFeatureTitle] = useState('');
  const [newFeatureDescription, setNewFeatureDescription] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();
  const [checkInTime, setCheckInTime] = useState('');
  const [checkOutTime, setCheckOutTime] = useState('');
  const timeSegments = getAllTimeSegments();
  const checkInTimeOrCheckOut=useSelector((state) => state.editForm.editlist);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setCheckInTime(checkInTimeOrCheckOut?.checkInTime);
    setCheckOutTime(checkInTimeOrCheckOut?.checkOutTime);
     setFeatures(currentFormDataProperty?.homesRoules);
  }, [checkInTimeOrCheckOut,currentFormDataProperty,]);

//   useEffect(() => {
//     setCheckInTime(checkInTimeOrCheckOut?.checkInTime);
//     setCheckOutTime(checkInTimeOrCheckOut?.checkOutTime);
  
//     const homesRoules = currentFormDataProperty?.homesRoules;
//     if (homesRoules && Object.keys(homesRoules).length > 0) {
//       setFeatures(homesRoules);
//     } else {
//       setFeatures(null); // No features to display
//     }
  
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 1000); // Simulate loading delay (adjust as needed)
  
//     return () => clearTimeout(timeout);
//   }, [checkInTimeOrCheckOut, currentFormDataProperty]);


// useEffect(() => {
//     setCheckOutTime(checkInTimeOrCheckOut?.checkOutTime);
//     setCheckOutTime(checkInTimeOrCheckOut?.checkOutTime);
//     const homesRoules = currentFormDataProperty?.homesRoules;
//     if (homesRoules && Object.keys(homesRoules).length > 0) {
//       setFeatures(homesRoules); // Populate features if data exists
//     } else {
//       setFeatures(null); // Indicate no features are available
//     }

//     // Simulate an asynchronous operation or real data fetch
//     const timeout = setTimeout(() => {
//       setLoading(false); // Set loading to false after a delay
//     }, 1000); // Adjust the delay as needed

//     return () => clearTimeout(timeout); // Clean up the timeout
//   }, [currentFormDataProperty]);


  const handleContinue = async (e) => {
    console.log("test console from home rule ")
      e.preventDefault();
   

//    console.log("propertyFeature",propertyFeature);
// console.log("features",features);

console.log("submiteProperty in Page",submiteProperty)

const combinedFeatures = [
    ...Object.values(submiteProperty),
    ...Object.values(features),
];

// Construct homesRules
const homesRules = combinedFeatures.reduce((acc, feature) => {
    acc[feature.name] = { name: feature.name, value: feature.value };
    return acc;
}, {});

const payload = {
    homesRules, // Combined rules object
    checkInTime, // Additional properties
    checkOutTime,
};
  

    console.log(payload);
    //   console.log(payload)

      await dispatch(updateFormData(payload));
      console.log(payload)
       router.push('/edit-listing/upload-images');
  };

  const back = (e) => {
      e.preventDefault();
      router.push("/edit-listing/property-booking-types");
  };
const handleSaveNewFeature = (e) => {
  e.preventDefault();
  if (newFeatureTitle && newFeatureDescription) {
      const newFeature = {
          name: newFeatureTitle, // Use name as the key
          description: newFeatureDescription,
          value: false, // Default unchecked value
      };

      // Use name as the key in propertyFeature
      setpropertyFeature((prevPropertyFeature) => ({
          ...prevPropertyFeature,
          [newFeature.name]: newFeature,
      }));
      setFeatures((prevPropertyFeature) => ({
        ...prevPropertyFeature,
        [newFeature.name]: newFeature,
    }));
      // Reset the form
      setNewFeatureTitle('');
      setNewFeatureDescription('');
      setShowAddForm(false);
  } else {
      alert("Please fill in both the feature title and description.");
  }
};
const handleAddMore = () => {
  setShowAddForm(true);
};

  return (
      <div className="min-h-screen py-20">
          <div className="">
              <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Home Rule</h2>
              <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8">
                  <p className='mb-4 text-neutral-500 font-normal text-sm'>Lorem ipsum dolor sit amet consectetur. Gravida faucibus massa dignissim malesuada felis.</p>
                 
                
            { features ? (
  Object.entries(features).map(([key, value]) => (
    <Feature
      key={key}
      id={key}
      data={value}
      setpropertyFeature={setpropertyFeature}
      propertyFeature={propertyFeature}
      submiteProperty={submiteProperty}
      setSubmiteProperty={setSubmiteProperty}
    />
  ))
) : (
  <p className="text-center text-neutral-500">You have not yet any homeRule.</p>
)}
                 
                  {/* "Add More Option" button */}
                  {!showAddForm && (
                      <button
                          className='flex gap-x-2 mt-3 text-neutral-600 text-base font-medium'
                          onClick={handleAddMore}
                      >
                          <Plus className='icon' />
                          Add more option
                      </button>
                  )}

                  {/* Form for adding a new feature, hidden initially */}
                  {showAddForm && (
                      <div className='mt-6'>
                          <h3 className="text-neutral-500 font-medium text-xl mb-4">Feature Title</h3>
                          <input
                              name='new_feature_title'
                              type='text'
                              className='form-input'
                              placeholder='Enter new feature title'
                              value={newFeatureTitle}
                              onChange={(e) => setNewFeatureTitle(e.target.value)}
                          />
                          <h3 className="text-neutral-500 font-medium text-xl mt-4 mb-4">Feature Description</h3>
                          <textarea
                              rows="2"
                              name='new_feature_description'
                              className='form-input'
                              placeholder='Enter new feature description'
                              value={newFeatureDescription}
                              onChange={(e) => setNewFeatureDescription(e.target.value)}
                          />

                          {/* Button to save the new feature */}
                          <button
                              className='btn btn-primary mt-4'
                              onClick={handleSaveNewFeature}
                          >
                              Save Feature
                          </button>
                      </div>
                  )}


                  <div className='mt-10 flex gap-x-10 justify-between'>
                        

                        <div className='w-full max-w-80'>
                            <h3 className='text-neutral-600 text-xl mb-2 font-medium'>Check-out (GMT +6)</h3>
                            <div className='relative'>
                                <select 
                                    name='check-out-time'
                                    id='select_check_out'
                                    value={checkOutTime}
                                    onChange={(e) => setCheckOutTime(e.target.value)}
                                    className=
                                    "outline-none w-full bg-transparent text-sm text-left py-3.5 px-6 font-semibold text-neutral-500 border border-neutral-400 rounded-md"
                                >
                                    {timeSegments.map(item => (
                                        <option key={item.hour + item.minute} 
                                            value={`${item['hour']}:${item['minute']} ${parseInt(item['hour']) < 12 ? 'AM' : 'PM'}`}>
                                            {`${item['hour']}:${item['minute']} ${item['meridiem']}`}
                                        </option>
                                    ))}
                                </select>
                                <Icon name='chevron-down' className="icon absolute-y-center right-4 -z-10" />
                            </div>
                        </div>
                        <div className='w-full max-w-80'>
                            <h3 className='text-neutral-600 text-xl mb-2 font-medium'>Check-in (GMT +6)</h3>
                            <div className='relative'>
                                <select
                                    name='check-in-time'
                                    id='select_check_in'
                                    className="outline-none w-full bg-transparent text-sm text-left py-3.5 px-6 font-semibold text-neutral-500 border border-neutral-400 rounded-md"
                                    onChange={(e) => setCheckInTime(e.target.value)}
                                value={checkInTime}
                                >
                                    {timeSegments.map(item => (
                                        <option key={item.hour + item.minute} 
                                            value={`${item['hour']}:${item['minute']} ${parseInt(item['hour']) < 12 ? 'AM' : 'PM'}`}>
                                            {`${item['hour']}:${item['minute']} ${item['meridiem']}`}
                                        </option>
                                    ))}
                                </select>
                                <Icon name='chevron-down' className="icon absolute-y-center right-4 -z-10" />
                            </div>
                        </div>
                    </div>
                  <div className="flex gap-x-8 mt-14">
                      <button className="btn btn-secondary max-w-36 relative" onClick={back}>
                          Back
                      </button>
                      <button className="btn btn-primary" onClick={handleContinue}>
                          Continue
                      </button>
                  </div>
              </form>
          </div>
      </div>
  );
}

