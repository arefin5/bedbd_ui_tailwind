
// // "use client";
// // import Icon from '/components/Icon';
// // import { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useRouter } from 'next/navigation';
// // import { updateFormData } from '@/redux/list/createListSlice';

// // export default function Page() {
// //   const initialAmenitiesState = {
// //     outdoorScenicView: {
// //       lakeAccess: false,
// //       beachAccess: false,
// //       ski: false
// //     },
// //     cookingCleaning: {
// //       kitchen: false,
// //       bbqGrill: false,
// //       outdoorDiningArea: false
// //     },
// //     internetOffice: {
// //       wifi: false,
// //       dedicatedWorkSpace: false
// //     },
// //     service: {
// //       airCondition: false
// //     },
// //     notIncluded: {
// //       hotTub: false
// //     },
// //     bathroom: {
// //       outdoorShower: false
// //     },
// //     bedroomLaundry: {
// //       washer: false
// //     },
// //     parkingFacilities: {
// //       freeParking: false,
// //       paidParking: false
// //     },
// //     general: {
// //       pool: false,
// //       hottub: false,
// //       patio: false,
// //       firePit: false,
// //       poolTable: false,
// //       indoorFirePlace: false,
// //       piano: false,
// //       exerciseEquipment: false
// //     }
// //   };

// //   const [amenities, setAmenities] = useState(initialAmenitiesState);
// //   const router = useRouter();
// //   const dispatch = useDispatch();
// //   const formData = useSelector((state) => state.form);

// //   useEffect(() => {
// //     // console.log("Updated Amenities:", amenities);
// //   }, [amenities]);

// //   const handleCheckboxChange = (category, field) => {
// //     setAmenities((prevState) => ({
// //       ...prevState,
// //       [category]: {
// //         ...prevState[category],
// //         [field]: !prevState[category][field]
// //       }
// //     }));
// //   };

// //   const handleContinue = (e) => {
// //     e.preventDefault();

// //     const payload = {
// //       amenities: amenities
// //     };
// //     console.log('Payload:', payload);
// //     dispatch(updateFormData(payload));
// //     console.log('Current Redux state amentise:', formData);
// //     router.push('/add-listing/home-rules');
// //   };
// //   const back=(e)=>{
// //     e.preventDefault();
// //     router.push("/add-listing/accommodation-details")

// //   }
// //   return (
// //     <div className="min-h-screen py-20">
// //       <div>
// //         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Amenities</h2>
// //         <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8" onSubmit={handleContinue}>
// //           {/* <h3 className="text-neutral-500 font-medium text-xl mb-6">Select Amenities</h3> */}
          
// //           <div className="space-y-4">
// //             <fieldset>
// //   <legend className="font-medium">Outdoor / Scenic View</legend>
// //   <div className="checkbox-container">
// //     <label>
// //       <input
// //         type="checkbox"
// //         checked={amenities.outdoorScenicView.lakeAccess}
// //         onChange={() => handleCheckboxChange('outdoorScenicView', 'lakeAccess')}
// //       />
// //       Lake Access
// //     </label>
// //   </div>
// //   <div className="checkbox-container">
// //     <label>
// //       <input
// //         type="checkbox"
// //         checked={amenities.outdoorScenicView.beachAccess}
// //         onChange={() => handleCheckboxChange('outdoorScenicView', 'beachAccess')}
// //       />
// //       Beach Access
// //     </label>
// //   </div>
// //   <div className="checkbox-container">
// //     <label>
// //       <input
// //         type="checkbox"
// //         checked={amenities.outdoorScenicView.ski}
// //         onChange={() => handleCheckboxChange('outdoorScenicView', 'ski')}
// //       />
// //       Ski
// //     </label>
// //   </div>
// // </fieldset>
// //             {/* Repeat similar fieldsets for other categories */}
// //             <fieldset>
// //               <legend className="font-medium">Cooking & Cleaning</legend>
// //               <div className="checkbox-container">
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   checked={amenities.cookingCleaning.kitchen}
// //                   onChange={() => handleCheckboxChange('cookingCleaning', 'kitchen')}
// //                 />
// //                 Kitchen
// //               </label>
// //               </div>
// //               <div className="checkbox-container">
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   checked={amenities.cookingCleaning.bbqGrill}
// //                   onChange={() => handleCheckboxChange('cookingCleaning', 'bbqGrill')}
// //                 />
// //                 BBQ Grill
// //               </label>
// //               </div>
// //               <div className="checkbox-container">
// //               <label>
// //                 <input
// //                   type="checkbox"
// //                   checked={amenities.cookingCleaning.outdoorDiningArea}
// //                   onChange={() => handleCheckboxChange('cookingCleaning', 'outdoorDiningArea')}
// //                 />
// //                 Outdoor Dining Area
// //               </label>
// //               </div>
// //             </fieldset>

// //             {/* Add more categories as needed */}
// //             <fieldset>
// //   <legend className="font-medium">Internet & Office</legend>
// //   <div className="checkbox-container">
// //     <label>
// //       <input
// //         type="checkbox"
// //         checked={amenities.internetOffice.wifi}
// //         onChange={() => handleCheckboxChange('internetOffice', 'wifi')}
// //       />
// //       Wifi Access
// //     </label>
// //   </div>
// //   <div className="checkbox-container">
// //     <label>
// //       <input
// //         type="checkbox"
// //         checked={amenities.internetOffice.dedicatedWorkSpace}
// //         onChange={() => handleCheckboxChange('internetOffice', 'dedicatedWorkSpace')}
// //       />
// //        Dedicated WorkSpace
// //     </label>
// //   </div>
// // </fieldset>
// //             {/*  */}
// //           </div>

// //           <div className="flex gap-x-8 mt-14">
// //             <button className="btn btn-secondary max-w-36 relative" type="button"
// //             onClick={back}
// //             >
// //               <Icon name='chevron-left' className="icon absolute-y-center left-4" />
// //               Back
// //             </button>
// //             <button className="btn btn-primary" type="submit">
// //               Continue
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import Icon from '/components/Icon';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { updateFormData } from '@/redux/list/createListSlice';

// export default function Page() {
//   const initialAmenitiesState = {
//     outdoorScenicView: {
//       lakeAccess: false,
//       beachAccess: false,
//       ski: false
//     },
//     cookingCleaning: {
//       kitchen: false,
//       bbqGrill: false,
//       outdoorDiningArea: false
//     },
//     internetOffice: {
//       wifi: false,
//       dedicatedWorkSpace: false
//     },
//     service: {
//       airCondition: false
//     },
//     notIncluded: {
//       hotTub: false
//     },
//     bathroom: {
//       outdoorShower: false
//     },
//     bedroomLaundry: {
//       washer: false
//     },
//     parkingFacilities: {
//       freeParking: false,
//       paidParking: false
//     },
//     general: {
//       pool: false,
//       hottub: false,
//       patio: false,
//       firePit: false,
//       poolTable: false,
//       indoorFirePlace: false,
//       piano: false,
//       exerciseEquipment: false
//     }
//   };

//   const [amenities, setAmenities] = useState(initialAmenitiesState);
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const formData = useSelector((state) => state.form);

//   useEffect(() => {
//     // console.log("Updated Amenities:", amenities);
//   }, [amenities]);

//   const handleCheckboxChange = (category, field) => {
//     setAmenities((prevState) => ({
//       ...prevState,
//       [category]: {
//         ...prevState[category],
//         [field]: !prevState[category][field]
//       }
//     }));
//   };

//   const handleContinue = (e) => {
//     e.preventDefault();

//     const payload = {
//       amenities: amenities
//     };
//     console.log('Payload:', payload);
//     dispatch(updateFormData(payload));
//     console.log('Current Redux state amentise:', formData);
//     router.push('/add-listing/home-rules');
//   };

//   const back = (e) => {
//     e.preventDefault();
//     router.push("/add-listing/accommodation-details");
//   };

//   return (
//     <div className="min-h-screen py-20">
//       <div>
//         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Amenities</h2>
//         <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8" onSubmit={handleContinue}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <fieldset>
//               <legend className="font-medium">Outdoor / Scenic View</legend>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.outdoorScenicView.lakeAccess}
//                     onChange={() => handleCheckboxChange('outdoorScenicView', 'lakeAccess')}
//                   />
//                   Lake Access
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.outdoorScenicView.beachAccess}
//                     onChange={() => handleCheckboxChange('outdoorScenicView', 'beachAccess')}
//                   />
//                   Beach Access
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.outdoorScenicView.ski}
//                     onChange={() => handleCheckboxChange('outdoorScenicView', 'ski')}
//                   />
//                   Ski
//                 </label>
//               </div>
//             </fieldset>

//             <fieldset>
//               <legend className="font-medium">Cooking & Cleaning</legend>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.cookingCleaning.kitchen}
//                     onChange={() => handleCheckboxChange('cookingCleaning', 'kitchen')}
//                   />
//                   Kitchen
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.cookingCleaning.bbqGrill}
//                     onChange={() => handleCheckboxChange('cookingCleaning', 'bbqGrill')}
//                   />
//                   BBQ Grill
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.cookingCleaning.outdoorDiningArea}
//                     onChange={() => handleCheckboxChange('cookingCleaning', 'outdoorDiningArea')}
//                   />
//                   Outdoor Dining Area
//                 </label>
//               </div>
//             </fieldset>

//             <fieldset>
//               <legend className="font-medium">Internet & Office</legend>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.internetOffice.wifi}
//                     onChange={() => handleCheckboxChange('internetOffice', 'wifi')}
//                   />
//                   Wifi Access
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.internetOffice.dedicatedWorkSpace}
//                     onChange={() => handleCheckboxChange('internetOffice', 'dedicatedWorkSpace')}
//                   />
//                   Dedicated WorkSpace
//                 </label>
//               </div>
//             </fieldset>

//             <fieldset>
//               <legend className="font-medium">Service</legend>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.service.airCondition}
//                     onChange={() => handleCheckboxChange('service', 'airCondition')}
//                   />
//                   Air Condition
//                 </label>
//               </div>
//             </fieldset>

//             <fieldset>
//               <legend className="font-medium">Not Included</legend>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.notIncluded.hotTub}
//                     onChange={() => handleCheckboxChange('notIncluded', 'hotTub')}
//                   />
//                   Hot Tub
//                 </label>
//               </div>
//             </fieldset>

//             <fieldset>
//               <legend className="font-medium">Bathroom</legend>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.bathroom.outdoorShower}
//                     onChange={() => handleCheckboxChange('bathroom', 'outdoorShower')}
//                   />
//                   Outdoor Shower
//                 </label>
//               </div>
//             </fieldset>

//             <fieldset>
//               <legend className="font-medium">Bedroom & Laundry</legend>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.bedroomLaundry.washer}
//                     onChange={() => handleCheckboxChange('bedroomLaundry', 'washer')}
//                   />
//                   Washer
//                 </label>
//               </div>
//             </fieldset>

//             <fieldset>
//               <legend className="font-medium">Parking Facilities</legend>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.parkingFacilities.freeParking}
//                     onChange={() => handleCheckboxChange('parkingFacilities', 'freeParking')}
//                   />
//                   Free Parking
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.parkingFacilities.paidParking}
//                     onChange={() => handleCheckboxChange('parkingFacilities', 'paidParking')}
//                   />
//                   Paid Parking
//                 </label>
//               </div>
//             </fieldset>

//             <fieldset>
//               <legend className="font-medium">General</legend>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.general.pool}
//                     onChange={() => handleCheckboxChange('general', 'pool')}
//                   />
//                   Pool
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.general.hottub}
//                     onChange={() => handleCheckboxChange('general', 'hottub')}
//                   />
//                   Hot Tub
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.general.patio}
//                     onChange={() => handleCheckboxChange('general', 'patio')}
//                   />
//                   Patio
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.general.firePit}
//                     onChange={() => handleCheckboxChange('general', 'firePit')}
//                   />
//                   Fire Pit
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.general.poolTable}
//                     onChange={() => handleCheckboxChange('general', 'poolTable')}
//                   />
//                   Pool Table
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.general.indoorFirePlace}
//                     onChange={() => handleCheckboxChange('general', 'indoorFirePlace')}
//                   />
//                   Indoor Fire Place
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.general.piano}
//                     onChange={() => handleCheckboxChange('general', 'piano')}
//                   />
//                   Piano
//                 </label>
//               </div>
//               <div className="checkbox-container">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={amenities.general.exerciseEquipment}
//                     onChange={() => handleCheckboxChange('general', 'exerciseEquipment')}
//                   />
//                   Exercise Equipment
//                 </label>
//               </div>
//             </fieldset>
//           </div>

//           <div className="flex gap-x-8 mt-14">
//             <button className="btn btn-secondary max-w-36 relative" type="button" onClick={back}>
//               <Icon name='chevron-left' className="icon absolute-y-center left-4" />
//               Back
//             </button>
//             <button className="btn btn-primary" type="submit">
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
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { updateFormData } from '@/redux/list/createListSlice';

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

  useEffect(() => {
    // console.log("Updated Amenities:", amenities);
  }, [amenities]);

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
    console.log('Payload:', payload);
    dispatch(updateFormData(payload));
    console.log('Current Redux state amentise:', formData);
    router.push('/add-listing/home-rules');
  };

  const back = (e) => {
    e.preventDefault();
    router.push("/add-listing/accommodation-details");
  };

  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Amenities</h2>
        <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8" onSubmit={handleContinue}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <fieldset>
              <legend className="font-medium">Outdoor / Scenic View</legend>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.outdoorScenicView.lakeAccess}
                    onChange={() => handleCheckboxChange('outdoorScenicView', 'lakeAccess')}
                  />
                  Lake Access
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.outdoorScenicView.beachAccess}
                    onChange={() => handleCheckboxChange('outdoorScenicView', 'beachAccess')}
                  />
                  Beach Access
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.outdoorScenicView.ski}
                    onChange={() => handleCheckboxChange('outdoorScenicView', 'ski')}
                  />
                  Ski
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-medium">Cooking & Cleaning</legend>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.cookingCleaning.kitchen}
                    onChange={() => handleCheckboxChange('cookingCleaning', 'kitchen')}
                  />
                  Kitchen
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.cookingCleaning.bbqGrill}
                    onChange={() => handleCheckboxChange('cookingCleaning', 'bbqGrill')}
                  />
                  BBQ Grill
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.cookingCleaning.outdoorDiningArea}
                    onChange={() => handleCheckboxChange('cookingCleaning', 'outdoorDiningArea')}
                  />
                  Outdoor Dining Area
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-medium">Internet & Office</legend>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.internetOffice.wifi}
                    onChange={() => handleCheckboxChange('internetOffice', 'wifi')}
                  />
                  Wifi Access
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.internetOffice.dedicatedWorkSpace}
                    onChange={() => handleCheckboxChange('internetOffice', 'dedicatedWorkSpace')}
                  />
                  Dedicated WorkSpace
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-medium">Service</legend>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.service.airCondition}
                    onChange={() => handleCheckboxChange('service', 'airCondition')}
                  />
                  Air Condition
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-medium">Not Included</legend>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.notIncluded.hotTub}
                    onChange={() => handleCheckboxChange('notIncluded', 'hotTub')}
                  />
                  Hot Tub
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-medium">Bathroom</legend>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.bathroom.outdoorShower}
                    onChange={() => handleCheckboxChange('bathroom', 'outdoorShower')}
                  />
                  Outdoor Shower
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-medium">Bedroom & Laundry</legend>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.bedroomLaundry.washer}
                    onChange={() => handleCheckboxChange('bedroomLaundry', 'washer')}
                  />
                  Washer
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-medium">Parking Facilities</legend>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.parkingFacilities.freeParking}
                    onChange={() => handleCheckboxChange('parkingFacilities', 'freeParking')}
                  />
                  Free Parking
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.parkingFacilities.paidParking}
                    onChange={() => handleCheckboxChange('parkingFacilities', 'paidParking')}
                  />
                  Paid Parking
                </label>
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-medium">General</legend>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.general.pool}
                    onChange={() => handleCheckboxChange('general', 'pool')}
                  />
                  Pool
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.general.hottub}
                    onChange={() => handleCheckboxChange('general', 'hottub')}
                  />
                  Hot Tub
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.general.patio}
                    onChange={() => handleCheckboxChange('general', 'patio')}
                  />
                  Patio
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.general.firePit}
                    onChange={() => handleCheckboxChange('general', 'firePit')}
                  />
                  Fire Pit
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.general.poolTable}
                    onChange={() => handleCheckboxChange('general', 'poolTable')}
                  />
                  Pool Table
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.general.indoorFirePlace}
                    onChange={() => handleCheckboxChange('general', 'indoorFirePlace')}
                  />
                  Indoor Fire Place
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.general.piano}
                    onChange={() => handleCheckboxChange('general', 'piano')}
                  />
                  Piano
                </label>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={amenities.general.exerciseEquipment}
                    onChange={() => handleCheckboxChange('general', 'exerciseEquipment')}
                  />
                  Exercise Equipment
                </label>
              </div>
            </fieldset>
          </div>

          <div className="flex gap-x-8 mt-14">
            <button className="btn btn-secondary max-w-36 relative" type="button" onClick={back}>
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