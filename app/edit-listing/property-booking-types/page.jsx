// // // "use client"
// // // import Icon from '/components/Icon'
// // // // import PropertyBookingTypes from './PropertyBookingTypes'
// // // import BookingType from './BookingType'
// // // import { Plus } from 'lucide-react'
// // // import { useEffect, useState } from 'react'
// // // import { useDispatch ,useSelector} from 'react-redux'
// // // import { updateFormData } from '@/redux/list/editListSlice';

// // // import { useRouter } from 'next/navigation';

// // // function getPropertyBookingType() {
  
// // //   return [{
// // //     "_id":  "663389106a89b8b09c9afcca",
// // //     "title": "A private room",
// // //     "description": "Guests can book a room within the property. There are common areas that are shared with either the host or other guests."
// // //   },
// // //   {
// // //     "_id":  "663389526a89b8b09c9afcd1",
// // //     "title": "Entire place",
// // //     "description": "Guests have access to the entire place and don’t have to share it with the host or other guests."
// // //   }]
// // // }

 
// // // export default function page() {
// // //   const data = getPropertyBookingType()
// // //     const [bookingtype,setBookingType]=useState({
// // //     });
// // //     const currentFormData = useSelector((state) => state.editForm);

// // //     const router = useRouter();
// // //     const dispatch = useDispatch();
// // //     const formData = useSelector((state) => state.form);
// // //     useEffect(()=>{
// // //        console.log(bookingtype);

// // //        console.log()
// // //     },[bookingtype])
  
// // //     const handleContinue = async (e) => {
// // //       e.preventDefault();
   
// // //     try{
// // //       const filteredHomeRules = Object.fromEntries(
// // //             Object.entries(bookingtype).filter(([key, value]) => value.value)
// // //         );
// // //       const payload = { 
// // //         bookingtype :filteredHomeRules
// // //       };
      
// // //       // Using async/await to ensure the state update is processed
// // //       await dispatch(updateFormData(payload)); // Wait until the action is dispatched and processed
// // //          router.push('/add-listing/property-details'); // Navigate to the next pag
// // //     }catch(error){

// // //     }
  
     
// // //     };
// // //     const back=(e)=>{
// // //       e.preventDefault();
// // //       router.push('/add-listing/property-state');
// // //     }
// // //     return (
// // //         <div className=" min-h-screen py-20">
// // //           <div className="">
// // //             <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>            
// // //             <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8 ">
// // //               <h3 className="text-neutral-500 font-medium text-xl mb-6">What can guests book?</h3>
// // //               {/* <PropertyBookingTypes data={data}/> */}
// // //               <div className="space-y-4" id='property_booking_types'>
// // //                 { 
// // //                   data.map(item=>
// // //                             <BookingType 
// // //                               data={item}
// // //                               setBookingType={setBookingType}
// // //                             />) 
// // //                 }
// // //               </div>
// // //               <button className='flex gap-x-2 mt-3 text-neutral-600 text-base font-medium '>
// // //                 <Plus className='icon'/>
// // //                 Add more option
// // //               </button>
// // //               <div className="flex gap-x-8 mt-14">
// // //                 <button className="btn btn-secondary max-w-36 relative" onClick={back}>
// // //                   <Icon name='chevron-left' className="icon absolute-y-center left-4 "/> 
// // //                   Back</button>
// // //                 <button className="btn btn-primary" onClick={handleContinue}>
// // //                   Continue
// // //                 </button>
// // //               </div>
// // //               </form>
// // //           </div>
// // //         </div>
        
// // //       )
// // // }
// // 'use client';
// // import Icon from '/components/Icon';
// // import BookingType from './BookingType';
// // import { Plus } from 'lucide-react';
// // import { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { updateFormData } from '@/redux/list/editListSlice';
// // import { useRouter } from 'next/navigation';

// // function getPropertyBookingType() {
// //   return [
// //     {
// //       _id: '663389106a89b8b09c9afcca',
// //       title: 'A private room',
// //       description: 'Guests can book a room within the property. There are common areas that are shared with either the host or other guests.',
// //     },
// //     {
// //       _id: '663389526a89b8b09c9afcd1',
// //       title: 'Entire place',
// //       description: 'Guests have access to the entire place and don’t have to share it with the host or other guests.',
// //     },
// //   ];
// // }

// // export default function Page() {
// //   const data = getPropertyBookingType();
// //   const currentFormData = useSelector((state) => state.editForm.editlist?.bookingtype || {});
// //   const [bookingtype, setBookingType] = useState({});
// //   const router = useRouter();
// //   const dispatch = useDispatch();

// //   // Initialize state from Redux when the component loads
// //   useEffect(() => {
// //     setBookingType(currentFormData.editlist.bookingtype); // Load data from Redux into local state
// //     console.log('Initial Booking Type:', currentFormData);
// //   }, [currentFormData]);

// //   const handleContinue = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const filteredBookingTypes = Object.fromEntries(
// //         Object.entries(bookingtype).filter(([_, value]) => value.value)
// //       );

// //       const payload = { bookingtype: filteredBookingTypes };
// //       await dispatch(updateFormData(payload));
// //       router.push('/add-listing/property-details');
// //     } catch (error) {
// //       console.error('Error updating booking types:', error);
// //     }
// //   };

// //   const handleBack = (e) => {
// //     e.preventDefault();
// //     router.push('/add-listing/property-state');
// //   };

// //   return (
// //     <div className="min-h-screen py-20">
// //       <div className="">
// //         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>
// //         <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8">
// //           <h3 className="text-neutral-500 font-medium text-xl mb-6">What can guests book?</h3>
// //           <div className="space-y-4" id="property_booking_types">
// //             {data.map((item) => (
// //               <BookingType
// //                 key={item._id}
// //                 data={item}
// //                 setBookingType={setBookingType}
// //                 currentBookingType={bookingtype}
// //               />
// //             ))}
// //           </div>
// //           <div className="flex gap-x-8 mt-14">
// //             <button className="btn btn-secondary max-w-36 relative" onClick={handleBack}>
// //               <Icon name="chevron-left" className="icon absolute-y-center left-4" />
// //               Back
// //             </button>
// //             <button className="btn btn-primary" onClick={handleContinue}>
// //               Continue
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
// // 'use client';
// // import Icon from '/components/Icon';
// // import BookingType from './BookingType';
// // import { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { updateFormData } from '@/redux/list/editListSlice';
// // import { useRouter } from 'next/navigation';
// // import { Plus } from 'lucide-react'

// // export default function Page() {
// //   const currentFormData = useSelector((state) => state.editForm.editlist?.bookingtype || {});
// //   const [bookingtype, setBookingType] = useState({});
// //   const router = useRouter();
// //   const dispatch = useDispatch();
// //   const [features, setFeatures] = useState([]);
// //   const [showAddForm, setShowAddForm] = useState(false);
// //   const [newFeatureTitle, setNewFeatureTitle] = useState('');
// //   const [newFeatureDescription, setNewFeatureDescription] = useState('');
// //   // Initialize state from Redux when the component loads
// //   useEffect(() => {
// //     if (currentFormData?.bookingTypes) {
// //       setBookingType(currentFormData.bookingTypes); // Load `bookingTypes` data into local state
// //       // console.log('Initial Booking Type:', currentFormData);
// //     }
// //   }, [currentFormData]);

// //   const handleContinue = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const payload = {
// //         bookingtype: {
// //           bookingTypes: bookingtype,
// //         },
// //       };
// //       console.log(payload)
// //       await dispatch(updateFormData(payload));
// //       router.push('/edit-listing/property-details');
// //     } catch (error) {
// //       console.error('Error updating booking types:', error);
// //     }
// //   };

// //   const handleBack = (e) => {
// //     e.preventDefault();
// //     router.push('/edit-listing/property-state');
// //   };
// //   const handleSaveNewFeature = (e) => {
// //     e.preventDefault();
// //     if (newFeatureTitle && newFeatureDescription) {
// //         const newFeature = {
// //             name: newFeatureTitle, // Use name as the key
// //             description: newFeatureDescription,
// //             value: false, // Default unchecked value
// //         };
  
// //         // Use name as the key in propertyFeature
// //         // setpropertyFeature((prevPropertyFeature) => ({
// //         //     ...prevPropertyFeature,
// //         //     [newFeature.name]: newFeature,
// //         // }));
// //         setBookingType((prevPropertyFeature) => ({
// //           ...prevPropertyFeature,
// //           [newFeature.name]: newFeature,
// //       }));
// //         // Reset the form
// //         setNewFeatureTitle('');
// //         setNewFeatureDescription('');
// //         setShowAddForm(false);
// //     } else {
// //         alert("Please fill in both the feature title and description.");
// //     }
// //   };
// //   const handleAddMore = () => {
// //     setShowAddForm(true);
// //   };
// //   return (
// //     <div className="min-h-screen py-20">
// //       <div className="">
// //         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>
// //         <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8">
// //           <h3 className="text-neutral-500 font-medium text-xl mb-6">What can guests book?</h3>
// //           <div className="space-y-4" id="property_booking_types">
// //             {Object.entries(bookingtype).map(([key, value]) => (
// //               <BookingType
// //                 key={key}
// //                 id={key}
// //                 data={value}
// //                 setBookingType={setBookingType}
// //                 bookingtype={bookingtype}
// //               />
// //             ))}
// //           </div>
// //           {!showAddForm && (
// //                       <button
// //                           className='flex gap-x-2 mt-3 text-neutral-600 text-base font-medium'
// //                           onClick={handleAddMore}
// //                       >
// //                           <Plus className='icon' />
// //                           Add more option
// //                       </button>
// //                   )}

// //                   {/* Form for adding a new feature, hidden initially */}
// //                   {showAddForm && (
// //                       <div className='mt-6'>
// //                           <h3 className="text-neutral-500 font-medium text-xl mb-4">Feature Title</h3>
// //                           <input
// //                               name='new_feature_title'
// //                               type='text'
// //                               className='form-input'
// //                               placeholder='Enter new feature title'
// //                               value={newFeatureTitle}
// //                               onChange={(e) => setNewFeatureTitle(e.target.value)}
// //                           />
// //                           <h3 className="text-neutral-500 font-medium text-xl mt-4 mb-4">Feature Description</h3>
// //                           <textarea
// //                               rows="2"
// //                               name='new_feature_description'
// //                               className='form-input'
// //                               placeholder='Enter new feature description'
// //                               value={newFeatureDescription}
// //                               onChange={(e) => setNewFeatureDescription(e.target.value)}
// //                           />

// //                           {/* Button to save the new feature */}
// //                           <button
// //                               className='btn btn-primary mt-4'
// //                               onClick={handleSaveNewFeature}
// //                           >
// //                              Save Property 

// //                           </button>
// //                       </div>
// //                   )}
// //           <div className="flex gap-x-8 mt-14">
// //             <button className="btn btn-secondary max-w-36 relative" onClick={handleBack}>
// //               <Icon name="chevron-left" className="icon absolute-y-center left-4" />
// //               Back
// //             </button>
// //             <button className="btn btn-primary" onClick={handleContinue}>
// //               Continue
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }


// // 'use client';
// // import Icon from '/components/Icon';
// // 'use client';

// // import Icon from '/components/Icon';
// // // import PropertyBookingTypes from './PropertyBookingTypes';
// // import BookingType from './BookingType';
// // import { Plus } from 'lucide-react';
// // import { useEffect, useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { updateFormData } from '@/redux/list/createListSlice';
// // import { useRouter } from 'next/navigation';
// 'use client';
// import Icon from '/components/Icon';
// import BookingType from './BookingType';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateFormData } from '@/redux/list/editListSlice';
// import { useRouter } from 'next/navigation';
// import { Plus } from 'lucide-react'

// function getPropertyBookingType() {
//   return [
//     {
//       _id: '663389106a89b8b09c9afcca',
//       title: 'A private room',
//       description:
//         'Guests can book a room within the property. There are common areas that are shared with either the host or other guests.',
//     },
//     {
//       _id: '663389526a89b8b09c9afcd1',
//       title: 'Entire place',
//       description:
//         'Guests have access to the entire place and don’t have to share it with the host or other guests.',
//     },
//   ];
// }

// export default function Page() {
//   const initialData = getPropertyBookingType();
//   const [bookingTypes, setBookingTypes] = useState(initialData);
//   const [checkedItems, setCheckedItems] = useState([]);
//   const [newTitle, setNewTitle] = useState('');
//   const [newDescription, setNewDescription] = useState('');
//   const [isAdding, setIsAdding] = useState(false); // New state for toggling input visibility
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const currentFormData = useSelector((state) => state.editForm.editlist?.bookingtype || {});
//   // Load data from localStorage on component mount
//   useEffect(() => {
//     const storedBookingTypes = localStorage.getItem('bookingTypes');
//     const storedCheckedItems = localStorage.getItem('checkedItems');
//     if (storedBookingTypes) {
//       setBookingTypes(JSON.parse(storedBookingTypes));
//     }
//     if (storedCheckedItems) {
//       setCheckedItems(JSON.parse(storedCheckedItems));
//     }
//   }, []);

//   // Update localStorage whenever bookingTypes or checkedItems change
//   useEffect(() => {
//     localStorage.setItem('bookingTypes', JSON.stringify(bookingTypes));
//   }, [bookingTypes]);

//   useEffect(() => {
//     localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
//   }, [checkedItems]);

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
//     setBookingTypes((prev) => [...prev, newOption]);
//     setNewTitle('');
//     setNewDescription('');
//     setIsAdding(false); // Hide inputs after saving
//   }

//   const handleContinue = async (e) => {
//     e.preventDefault();
//     console.log('Success in property-booking-types');
//     try {
//       const selectedBookingTypes = bookingTypes.filter((type) =>
//         checkedItems.includes(type._id)
//       );
//       const payload = {
//         bookingTypes: selectedBookingTypes,
//       };
//       await dispatch(updateFormData(payload));
//       router.push('/edit-listing/property-details');
//     } catch (error) {
//       console.error('Error saving booking types:', error);
//     }
//   };

//   const back = (e) => {
//     e.preventDefault();
//     router.push('/edit-listing/property-state');
//   };

//   return (
//     <div className="min-h-screen py-20">
//       <div>
//         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>
//         <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8">
//           <h3 className="text-neutral-500 font-medium text-xl mb-6">What can guests book?</h3>
//           <div className="space-y-4" id="property_booking_types">
//             {bookingTypes.map((item) => (
//               <BookingType
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
//                 className="input input-bordered w-full mb-3"
//               />
//               <textarea
//                 value={newDescription}
//                 placeholder="Description"
//                 onChange={(e) => setNewDescription(e.target.value)}
//                 className="textarea textarea-bordered w-full mb-3"
//               />
//               <button
//                 type="button"
//                 onClick={saveNewOption}
//                 className="btn btn-success w-full mb-3"
//               >
//                 Save
//               </button>
//             </div>
//           )}
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
'use client';
import Icon from '/components/Icon';
import BookingType from './BookingType';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from '@/redux/list/editListSlice';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

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
  const currentFormData = useSelector((state) => state.editForm.editlist?.bookingtype || {});

  // Load data from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data')) || {};
    const storedBookingTypes = storedData.bookingTypes || [];
    setCheckedItems(storedBookingTypes.map((type) => type._id));
  }, []);

  // Update localStorage whenever checkedItems change
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data')) || {};
    storedData.bookingTypes = bookingTypes.filter((type) =>
      checkedItems.includes(type._id)
    );
    localStorage.setItem('data', JSON.stringify(storedData));
  }, [checkedItems, bookingTypes]);

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
      router.push('/edit-listing/property-details');
    } catch (error) {
      console.error('Error saving booking types:', error);
    }
  };

  const back = (e) => {
    e.preventDefault();
    router.push('/edit-listing/property-state');
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
                className="btn btn-primary w-full mb-3"
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