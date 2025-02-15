"use client";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '/components/Icon';
import { updateFormData } from '@/redux/list/createListSlice';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const LocationMap = dynamic(() => import('./LocationMap'), { ssr: false });

function getPropertyFeatures() {
  return [
    // Feature data here
  ];
}

export default function LocationPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentFormData = useSelector((state) => state.form); 
  const { formData} = useSelector((state) => state.form); 
  const [isClient, setIsClient] = useState(false);
  const [error,setErrors]=useState(false)
  const coordinates = [] 
  useEffect(() => {
    setIsClient(true);
  }, [currentFormData, coordinates]);

  // const submitLocation = async (e) => {
  //   e.preventDefault();
  //   if (!currentFormData) return;

  //   try {
  //     const coordinates = [90.388964, 23.764287];  longitude: '90.388964',
    // latitude: '23.764287'
  //     // ...currentFormData
  //     // console.log("from data ",currentFormData)

  //     // console.log("location",currentFormData.formData.location)
  //     const payload = {
  //     ...currentFormData.formData,
  //       location: {
  //         ...formData.location,
  //         type: "Point",
  //         coordinates: coordinates,
  //       },
  //     };
  //     await dispatch(updateFormData(payload));
  //     router.push('/add-listing/accommodation-details');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const submitLocation = async (e) => {
  //   e.preventDefault();
    
  //   // Ensure that the coordinates are taken from the map directly, not using fallback
  //   const coordinates = currentFormData?.formData?.location?.coordinates; 
  
  //   if (!coordinates) {
  //     // Handle the case where no coordinates are set
  //     console.error('Coordinates are not set. Please select a location.');
  //     return;
  //   }
  
  //   try {
  //     const payload = {
  //       ...currentFormData.formData,
  //       location: {
  //         ...formData.location,
  //         type: "Point",
  //         coordinates: coordinates,  // Use the coordinates directly from the map
  //       },
  //     };
  
  //     await dispatch(updateFormData(payload)); // Dispatch to update Redux store
  //     router.push('/add-listing/accommodation-details'); // Navigate to next page
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  
  // const submitLocation = async (e) => {
  //   e.preventDefault();

  //   const coordinates = formData?.location?.coordinates;

  //   if (!coordinates) {
  //     console.error('Coordinates are not set. Please select a location on the map.');
  //     return;
  //   }

  //   try {
  //     const payload = {
  //       ...formData,
  //       location: {
  //         ...formData.location,
  //         type: "Point",
  //         coordinates,
  //       },
  //     };

  //     await dispatch(updateFormData(payload));
  //     router.push('/add-listing/accommodation-details');
  //   } catch (error) {
  //     console.error('Error updating form data:', error);
  //   }
  // };

  
  const submitLocation = async (e) => {
    e.preventDefault();
  
    // Use the provided coordinates from the map, or default to specified values
     if (!formData.hasOwnProperty('location') || formData?.location?.length < 2  ) {
          // alert("Please select your property location.");
          setErrors(true)
          return
      }else{
        // use network request heare 
        router.push('/add-listing/location-confirmation');
        setErrors(false)
      }
  };
  
  const goBack = (e) => {
    e.preventDefault();
    router.push("/add-listing/property-details");
  };

  if (!isClient) return null; // Prevent SSR-related issues

  const data = getPropertyFeatures();

  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">
          Property Location
        </h2>
        <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8">
          <h3 className="text-neutral-500 font-medium text-xl mb-4">Find your place</h3>

          <LocationMap coordinates={coordinates}/>

          <div className="flex gap-x-8 mt-14">
            <button className="btn btn-secondary max-w-36 relative" onClick={goBack}>
              <Icon name="chevron-left" className="icon absolute-y-center left-4" />
              Back
            </button>
           { error && <div className='text-center error-message text-red-500'>Please select your property location.</div>}
            <button className="btn btn-primary" onClick={submitLocation}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
