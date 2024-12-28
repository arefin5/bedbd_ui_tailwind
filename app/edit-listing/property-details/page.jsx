// "use client";
// import Icon from '/components/Icon';
// import Feature from './Feature';
// import { Plus } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateFormData } from '@/redux/list/editListSlice';
// import { useEffect, useState } from 'react';

// function getPropertyBookingType() {
//   return [
//     {
//       "_id": "6633368b1dd563cf2e6ebc92",
//       "title": "Dedicated Workspace",
//       "description": "A room with wifi that’s well-suited for working"
//     },
//     {
//       "_id": "663336bf1dd563cf2e6ebc94",
//       "title": "Beach View",
//       "description": "Guests can book a room within the property. There are common areas that are shared with either the host or other guests."
//     },
//     {
//       "_id": "663336f01dd563cf2e6ebc95",
//       "title": "Shared Bathroom",
//       "description": "Guests have access to the entire place and don’t have to share it with the host or other guests."
//     }
//   ];
// }

// export default function Page() {
//   const initialData = getPropertyBookingType();
//   const [propertyFeature, setPropertyFeature] = useState(initialData);
//   const [propertyTitle, setTitle] = useState("");
//   const [description, setDescription] = useState('');
//   const [error, setError] = useState(false);
//   const [checkedItems, setCheckedItems] = useState([]);
//   const [newTitle, setNewTitle] = useState('');
//   const [newDescription, setNewDescription] = useState('');
//   const [isAdding, setIsAdding] = useState(false); // New state for toggling input visibility
//   const router = useRouter();
//   const dispatch = useDispatch();

//   // Load data from localStorage on component mount
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('data')) || {};
//     const storedBookingTypes = storedData.propertyFeature || [];
//     const storedCheckedItems = storedBookingTypes.map(item => item._id);
//     const storedTitle = storedData.propertyTitle || "";
//     const storedDescription = storedData?.description || "";

//     setPropertyFeature(storedBookingTypes.length ? storedBookingTypes : initialData);
//     setCheckedItems(storedCheckedItems);
//     setTitle(storedTitle);
//     setDescription(storedDescription);
//   }, []);

//   // Update localStorage whenever relevant state variables change
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('data')) || {};
//     storedData.propertyFeature = propertyFeature;
//     storedData.propertyTitle = propertyTitle;
//     storedData.description = description;
//     localStorage.setItem('data', JSON.stringify(storedData));
//   }, [propertyFeature, propertyTitle, description]);
  
//   function toggleCheck(id) {
//     setCheckedItems((prev) => {
//       if (prev.includes(id)) {
//         return prev.filter((item) => item !== id);
//       }
//       return [...prev, id];
//     });
//   }

//   function startAddingOption() {
//     setIsAdding(true);
//   }

//   function saveNewOption() {
//     if (!newTitle.trim() || !newDescription.trim()) {
//       alert('Please fill in both title and description.');
//       return;
//     }
//     const newOption = {
//       _id: Math.random().toString(36).substr(2, 9), // Unique ID
//       title: newTitle,
//       description: newDescription,
//     };
//     setPropertyFeature((prev) => [...prev, newOption]);
//     setNewTitle('');
//     setNewDescription('');
//     setIsAdding(false); // Hide inputs after saving
//   }

//   const handleContinue = async (e) => {
//     e.preventDefault();
//     if (!propertyTitle || propertyTitle.trim() === "") {
//       setError(true);
//       return; // Prevent further execution if propertyTitle is empty
//     }

//     setError(false);
//     try {
//       const selectedFeatures = propertyFeature.filter((feature) =>
//         checkedItems.includes(feature._id)
//       );
//       const payload = {
//         propertyFeature: selectedFeatures,
//         propertyTitle: propertyTitle,
//         description: description,
//       };
//       //
//       update in localStorage
//      localStorage.getItem('data', JSON.stringify(payload));


//       // 
//       await dispatch(updateFormData(payload));
//       setError(false);
//       router.push('/edit-listing/property-location');
//     } catch (error) {
//       console.error('Error saving booking types:', error);
//     }
//   };

//   const back = (e) => {
//     e.preventDefault();
//     router.push("/edit-listing/property-booking-types");
//   };

//   return (
//     <div className="min-h-screen py-20">
//       <div>
//         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Property Details</h2>
//         <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8">
//           <input
//             name='property_title'
//             type='text'
//             className='form-input'
//             placeholder='Ex; Ahasan Manjil'
//             value={propertyTitle}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <p className='font-normal text-sm text-neutral-500 ml-5 mb-9'>Choose a catchy title in 40 characters</p>
//           {error && <div className='error-message text-red-500'>Please Set Property Title</div>}
//           <h3 className="text-neutral-500 font-medium text-xl mb-6">What can guests book?</h3>
//           <div className="space-y-4" id="property_booking_types">
//             {propertyFeature.map((item) => (
//               <Feature
//                 key={item._id}
//                 data={item}
//                 isChecked={checkedItems.includes(item._id)}
//                 toggleCheck={toggleCheck}
//               />
//             ))}
//           </div>
//           {!isAdding && (
//             <button
//               type="button"
//               onClick={startAddingOption}
//               className="flex gap-x-2 mt-3 text-neutral-600 text-base font-medium"
//             >
//               <Plus className="icon" />
//               Add more option
//             </button>
//           )}
//           {isAdding && (
//             <div className="mt-6">
//               <input
//                 type="text"
//                 value={newTitle}
//                 placeholder="Title"
//                 onChange={(e) => setNewTitle(e.target.value)}
//                 className="form-input"
//               />
//               <textarea
//                 value={newDescription}
//                 placeholder="Description"
//                 onChange={(e) => setNewDescription(e.target.value)}
//                 className="form-input"
//               />
//               <button
//                 type="button"
//                 onClick={saveNewOption}
//                 className="btn btn-primary"
//               >
//                 Save
//               </button>
//             </div>
//           )}
//           <h3 className="text-neutral-500 font-medium text-xl mt-12 mb-4">Property Description</h3>
//           <textarea
//             rows="4"
//             name='property_description'
//             className='form-input'
//             placeholder='(optional)'
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <div className="flex gap-x-8 mt-14">
//             <button
//               type="button"
//               className="btn btn-secondary max-w-36 relative"
//               onClick={back}
//             >
//               Back
//             </button>
//             <button
//               type="submit"
//               className="btn btn-primary"
//               onClick={handleContinue}
//             >
//               Continue
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client";
import Icon from '/components/Icon';
import Feature from './Feature';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '@/redux/list/editListSlice';
import { useEffect, useState } from 'react';

function getPropertyBookingType() {
  return [
    {
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
    }
  ];
}

export default function Page() {
  const initialData = getPropertyBookingType();
  const [propertyFeature, setPropertyFeature] = useState(initialData);
  const [propertyTitle, setTitle] = useState("");
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isAdding, setIsAdding] = useState(false); // New state for toggling input visibility
  const router = useRouter();
  const dispatch = useDispatch();

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data')) || {};
    const storedBookingTypes = storedData.propertyFeature || [];
    const storedCheckedItems = storedBookingTypes.map(item => item._id);
    const storedTitle = storedData.propertyTitle || "";
    const storedDescription = storedData?.description || "";

    setPropertyFeature(storedBookingTypes.length ? storedBookingTypes : initialData);
    setCheckedItems(storedCheckedItems);
    setTitle(storedTitle);
    setDescription(storedDescription);
  }, []);

  // Update localStorage whenever relevant state variables change
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data')) || {};
    storedData.propertyFeature = propertyFeature;
    storedData.propertyTitle = propertyTitle;
    storedData.description = description;
    localStorage.setItem('data', JSON.stringify(storedData));
  }, [propertyFeature, propertyTitle, description]);
  
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
    setPropertyFeature((prev) => [...prev, newOption]);
    setNewTitle('');
    setNewDescription('');
    setIsAdding(false); // Hide inputs after saving
  }

  const handleContinue = async (e) => {
    e.preventDefault();
    if (!propertyTitle || propertyTitle.trim() === "") {
      setError(true);
      return; // Prevent further execution if propertyTitle is empty
    }

    setError(false);
    try {
      const selectedFeatures = propertyFeature.filter((feature) =>
        checkedItems.includes(feature._id)
      );
      const payload = {
        propertyFeature: selectedFeatures,
        propertyTitle: propertyTitle,
        description: description,
      };
      //
      
    //  localStorage.getItem('data', JSON.stringify(payload));


      // 
      await dispatch(updateFormData(payload));
      setError(false);
      router.push('/edit-listing/property-location');
    } catch (error) {
      console.error('Error saving booking types:', error);
    }
  };

  const back = (e) => {
    e.preventDefault();
    router.push("/edit-listing/property-booking-types");
  };

  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Property Details</h2>
        <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8">
          <input
            name='property_title'
            type='text'
            className='form-input'
            placeholder='Ex; Ahasan Manjil'
            value={propertyTitle}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p className='font-normal text-sm text-neutral-500 ml-5 mb-9'>Choose a catchy title in 40 characters</p>
          {error && <div className='error-message text-red-500'>Please Set Property Title</div>}
          <h3 className="text-neutral-500 font-medium text-xl mb-6">What can guests book?</h3>
          <div className="space-y-4" id="property_booking_types">
            {propertyFeature.map((item) => (
              <Feature
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
                className="form-input"
              />
              <textarea
                value={newDescription}
                placeholder="Description"
                onChange={(e) => setNewDescription(e.target.value)}
                className="form-input"
              />
              <button
                type="button"
                onClick={saveNewOption}
                className="btn btn-primary"
              >
                Save
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
            onChange={(e) => setDescription(e.target.value)}
          />
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