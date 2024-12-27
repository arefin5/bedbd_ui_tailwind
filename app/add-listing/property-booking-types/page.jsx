'use client';

import Icon from '/components/Icon';
// import PropertyBookingTypes from './PropertyBookingTypes';
import BookingType from './BookingType';
import { Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '@/redux/list/createListSlice';
import { useRouter } from 'next/navigation';

function getPropertyBookingType() {
  return [
    {
      _id: '663389106a89b8b09c9afcca',
      title: 'A private room',
      description:
        'Guests can book a room within the property. There are common areas that are shared with either the host or other guests.',
    },
    {
      _id: '663389526a89b8b09c9afcd1',
      title: 'Entire place',
      description:
        'Guests have access to the entire place and don’t have to share it with the host or other guests.',
    },
  ];
}

export default function Page() {
  const initialData = getPropertyBookingType();
  const [bookingTypes, setBookingTypes] = useState(initialData);
  const [checkedItems, setCheckedItems] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isAdding, setIsAdding] = useState(false); // New state for toggling input visibility
  const router = useRouter();
  const dispatch = useDispatch();

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedBookingTypes = localStorage.getItem('bookingTypes');
    const storedCheckedItems = localStorage.getItem('checkedItems');
    if (storedBookingTypes) {
      setBookingTypes(JSON.parse(storedBookingTypes));
    }
    if (storedCheckedItems) {
      setCheckedItems(JSON.parse(storedCheckedItems));
    }
  }, []);

  // Update localStorage whenever bookingTypes or checkedItems change
  useEffect(() => {
    localStorage.setItem('bookingTypes', JSON.stringify(bookingTypes));
  }, [bookingTypes]);

  useEffect(() => {
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [checkedItems]);

  function toggleCheck(id) {
    setCheckedItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  }

  function startAddingOption() {
    setIsAdding(true);
  }

  function saveNewOption() {
    if (!newTitle.trim() || !newDescription.trim()) {
      alert('Please fill in both title and description.');
      return;
    }
    const newOption = {
      _id: Math.random().toString(36).substr(2, 9), // Unique ID
      title: newTitle,
      description: newDescription,
    };
    setBookingTypes((prev) => [...prev, newOption]);
    setNewTitle('');
    setNewDescription('');
    setIsAdding(false); // Hide inputs after saving
  }

  const handleContinue = async (e) => {
    e.preventDefault();
    console.log('Success in property-booking-types');
    try {
      const selectedBookingTypes = bookingTypes.filter((type) =>
        checkedItems.includes(type._id)
      );
      const payload = {
        bookingTypes: selectedBookingTypes,
      };
      await dispatch(updateFormData(payload));
      router.push('/add-listing/property-details');
    } catch (error) {
      console.error('Error saving booking types:', error);
    }
  };

  const back = (e) => {
    e.preventDefault();
    router.push('/add-listing/property-state');
  };

  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>
        <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8">
          <h3 className="text-neutral-500 font-medium text-xl mb-6">What can guests book?</h3>
          <div className="space-y-4" id="property_booking_types">
            {bookingTypes.map((item) => (
              <BookingType
                key={item._id}
                data={item}
                isChecked={checkedItems.includes(item._id)}
                toggleCheck={toggleCheck}
              />
            ))}
          </div>
          {!isAdding && (
            <button
              type="button"
              onClick={startAddingOption}
              className="flex gap-x-2 mt-3 text-neutral-600 text-base font-medium"
            >
              <Plus className="icon" />
              Add more option
            </button>
          )}
          {isAdding && (
            <div className="mt-6">
              <input
                type="text"
                value={newTitle}
                placeholder="Title"
                onChange={(e) => setNewTitle(e.target.value)}
                className="input input-bordered w-full mb-3"
              />
              <textarea
                value={newDescription}
                placeholder="Description"
                onChange={(e) => setNewDescription(e.target.value)}
                className="textarea textarea-bordered w-full mb-3"
              />
              <button
                type="button"
                onClick={saveNewOption}
                className="btn btn-success w-full mb-3"
              >
                Save
              </button>
            </div>
          )}
          <div className="flex gap-x-8 mt-14">
            <button
              type="button"
              className="btn btn-secondary max-w-36 relative"
              onClick={back}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
