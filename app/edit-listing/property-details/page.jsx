"use client"
import Icon from '/components/Icon'
import Feature from './Feature'

import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { addPropertyDetails, updateFormData } from '@/redux/list/editListSlice';


import { useEffect, useState } from 'react'


export default function Page() {
  const [propertyTitle, setTitle] = useState("");
  const [description, setdescription] = useState('');
  const [propertyFeature, setpropertyFeature] = useState({
    sharedbathroom: false,
    beachview: false,
    dedicatedworkspace: false,
});
  const currentFormData = useSelector((state) => state.editForm);
  const currentFormDataProperty = useSelector((state) => state.editForm.editlist?.propertyFeature || {});
  const [features, setFeatures] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFeatureTitle, setNewFeatureTitle] = useState('');
  const [newFeatureDescription, setNewFeatureDescription] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  
  useEffect(() => {
    //   console.log(propertyFeature);
// console.log("currentFormDataProperty",currentFormDataProperty)
setTitle(currentFormData.editlist.propertyTitle);
setdescription(currentFormData?.editlist.description);
// setpropertyFeature(currentFormDataProperty?.features)
setFeatures(currentFormDataProperty?.features);
  }, [currentFormData,currentFormDataProperty]);


  const handleContinue = async (e) => {
      e.preventDefault();
      if (propertyTitle === "") return;
      const payload = {

          propertyFeature: propertyFeature,
          propertyTitle: propertyTitle,
          description: description
      };
    //   console.log(payload)

      await dispatch(updateFormData(payload));
    //   console.log(payload);

       router.push('/edit-listing/location-confirmation');
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
    setShowAddForm(false);
    dispatch(addPropertyDetails({ key: id, value: { ...newFeature, value: newFeature } }));
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
              <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>
              <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8">
                  <h3 className="text-neutral-500 font-medium text-xl mb-4">Property Title</h3>
                  <input
                      name='property_title'
                      type='text'
                      className='form-input'
                      placeholder='Ex; Ahasan Manjil'
                      value={propertyTitle}
                      onChange={(e) => setTitle(e.target.value)}
                  />
                  <p className='font-normal text-sm text-neutral-500 ml-5 mb-9'>Choose a catchy title in 40 characters</p>

                  <h3 className="text-neutral-500 font-medium text-xl mb-4">Property Features</h3>
                  <p className='mb-4 text-neutral-500 font-normal text-sm'>Lorem ipsum dolor sit amet consectetur. Gravida faucibus massa dignissim malesuada felis.</p>
                  {/* {features && features.length>0?(

                    {Object.entries(features).map(([key, value]) => (
              <Feature
                key={key}
                id={key}
                data={value}
                setpropertyFeature={setpropertyFeature} 
                propertyFeature={propertyFeature}
              />
            ))}
                  ):<p>no Property description</p>}
                  
                  */}
                  {features && Object.keys(features).length > 0 ? (
  Object.entries(features).map(([key, value]) => (
    <Feature
      key={key}
      id={key}
      data={value}
      setpropertyFeature={setpropertyFeature}
      propertyFeature={propertyFeature}
    />
  ))
) : (
  <p>No property description available.</p>
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

                  <h3 className="text-neutral-500 font-medium text-xl mt-12 mb-4">Property Description</h3>
                  <textarea
                      rows="4"
                      name='property_description'
                      className='form-input'
                      placeholder='(optional)'
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
                  />

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
