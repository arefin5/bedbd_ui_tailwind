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
  const {error,formData} = useSelector((state) => state.form); 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Only set client-side rendering flag here
  }, [currentFormData]);

  const submitLocation = async (e) => {
    e.preventDefault();
    if (!currentFormData) return;

    try {
      const coordinates = [-122.4194, 37.7749];
      // ...currentFormData
      // console.log("from data ",currentFormData)

      // console.log("location",currentFormData.formData.location)
      const payload = {
      ...currentFormData.formData,
        location: {
          ...formData.location,
          type: "Point",
          coordinates: coordinates,
        },
      };
      await dispatch(updateFormData(payload));
      router.push('/add-listing/accommodation-details');
    } catch (error) {
      console.error(error);
    }
  };

  const goBack = (e) => {
    e.preventDefault();
    router.push("/add-listing/location-confirmation");
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

          <LocationMap />

          <div className="flex gap-x-8 mt-14">
            <button className="btn btn-secondary max-w-36 relative" onClick={goBack}>
              <Icon name="chevron-left" className="icon absolute-y-center left-4" />
              Back
            </button>
            <button className="btn btn-primary" onClick={submitLocation}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
