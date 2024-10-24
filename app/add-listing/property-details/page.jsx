"use client"
import Icon from '/components/Icon'
import Feature from './Feature'

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

export default function Page() {
  const initialData = getPropertyFeatures();
  const [propertyTitle, setTitle] = useState("");
  const [description, setdescription] = useState('');
  const [propertyFeature, setpropertyFeature] = useState({
      sharedbathroom: false,
      beachview: false,
      dedicatedworkspace: false,
  });
  const [features, setFeatures] = useState(initialData);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFeatureTitle, setNewFeatureTitle] = useState('');
  const [newFeatureDescription, setNewFeatureDescription] = useState('');
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
      console.log(propertyFeature);
  }, [propertyFeature]);

  const handleContinue = async (e) => {
      e.preventDefault();
      if (propertyTitle === "") return;
      const payload = {
          propertyFeature: propertyFeature,
          propertyTitle: propertyTitle,
          description: description
      };
      await dispatch(updateFormData(payload));
      router.push('/add-listing/location-confirmation');
  };

  const back = (e) => {
      e.preventDefault();
      router.push("/add-listing/property-booking-types");
  };

  const handleAddMore = () => {
      setShowAddForm(true);
  };

  const handleSaveNewFeature = (e) => {
      e.preventDefault();
      if (newFeatureTitle && newFeatureDescription) {
          const newFeature = {
              _id: `${Date.now()}`,  // Generate a simple unique ID
              title: newFeatureTitle,
              description: newFeatureDescription
          };
          setFeatures([...features, newFeature]);
          setNewFeatureTitle('');
          setNewFeatureDescription('');
          setShowAddForm(false);  // Hide the form after adding a feature
      }
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
                  {features.map(item => (
                      <Feature key={item._id} data={item} setpropertyFeature={setpropertyFeature} 
                      propertyFeature={propertyFeature} />
                  ))}

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
                          <Plus className="icon absolute-y-center left-4" />
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