
'use client';
import Icon from '/components/Icon';
import State from './State';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { updateFormData } from '@/redux/list/createListSlice';

function getPropertyState() {
  return [
    {
      "_id": "66324566250643f1c5632fa6",
      "title": "Full-furnished",
      "description": "Living space, such as an apartment or room, that comes equipped with all necessary furniture, appliances, and amenities for immediate occupancy and comfortable living."
    },
    {
      "_id": "66324609250643f1c5632fa7",
      "title": "Semi-furnished",
      "description": "Living space, such as an apartment or room, that includes some essential furniture and appliances but may require tenants to provide additional items for complete functionality and comfort."
    },
    {
      "_id": "66324653250643f1c5632fa8",
      "title": "Empty",
      "description": "Living space, such as an apartment or room, that does not include any furniture or appliances, requiring tenants to furnish it entirely with their own belongings."
    }
  ];
}

export default function Page() {
  const data = getPropertyState();
  const [propertyCondition, setPropertyCondition] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const [error,setErrors]=useState(false)
  useEffect(() => {
    const storedCondition = localStorage.getItem('propertyCondition');
    if (storedCondition) {
      setPropertyCondition(storedCondition);
    }
  }, []);

  useEffect(() => {
    if (propertyCondition) {
      localStorage.setItem('propertyCondition', propertyCondition);
    }
  }, [propertyCondition]);

  const handleContinue = async (e) => {
    e.preventDefault();
    if (!propertyCondition) {
      setErrors(ture)
      // alert('Please select a property condition before continuing.');
      return;
    }

    const payload = { propertyCondition };
    await dispatch(updateFormData(payload));
    setErrors(false)
    router.push('/add-listing/property-booking-types');
  };

  const back = (e) => {
    e.preventDefault();
    router.push('/add-listing/property-type');
  };

  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Property State</h2>
        <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8" onSubmit={handleContinue}>
          <h3 className="text-neutral-500 font-medium text-xl mb-6">Property Condition</h3>
          {error && <div className='text-center error-message text-red-500'>Please select a property condition before continuing.</div>}

          <div className="space-y-4" id="property_states">
            {data.map(item => (
              <State
                key={item._id}
                data={item}
                setPropertyCondition={setPropertyCondition}
                selectedCondition={propertyCondition}
              />
            ))}
          </div>
          <div className="flex gap-x-8 mt-14">
            <button className="btn btn-secondary max-w-36 relative" type="button" onClick={back}>
              <Icon name="chevron-left" className="icon absolute-y-center left-4" />
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
