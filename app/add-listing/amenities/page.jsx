// // import Icon from '/components/Icon'
// // import Amenity from './Amenity';



// // function getPropertyAmenities() {
// //     return [{
// //         "_id": "663871754a65fb5a2e5ebaee",
// //         "title": "Smoke and carbon monoxide detectors",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "safety_features"
// //       },
// //       {
// //         "_id":  "6645d22c368d22b9bbe29872",
// //         "title": "Fire extinguisher",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "fire-extinguisher"
// //         },
// //         "category": "safety_features"
// //       },
// //       {
// //         "_id":  "6645d261368d22b9bbe29873",
// //         "title": "First-aid kit",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "briefcase-medical"
// //         },
// //         "category": "safety_features"
// //       },
// //       {
// //         "_id":  "6645d297368d22b9bbe29874",
// //         "title": "Glassware",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "wine"
// //         },
// //         "category": "kitchen"
// //       },
// //       {
// //         "_id": "6645d2c8368d22b9bbe29875",
// //         "title": "Dishes",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "kitchen"
// //       },
// //       {
// //         "_id": "6645d340368d22b9bbe29877",
// //         "title": "Utensils",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "kitchen"
// //       },
// //       {
// //         "_id": "6645d38d368d22b9bbe29878",
// //         "title": "Basic cookware",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "kitchen"
// //       },
// //       {
// //         "_id": "6645d3aa368d22b9bbe29879",
// //         "title": "Toaster",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "kitchen"
// //       },
// //       {
// //         "_id":"6645d3d2368d22b9bbe2987a",
// //         "title": "Cofffee maker or French press",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "kitchen"
// //       },
// //       {
// //         "_id": "6645d3f6368d22b9bbe2987b",
// //         "title": "Dishwasher",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "kitchen"
// //       },
// //       {
// //         "_id":"6645d416368d22b9bbe2987c",
// //         "title": "Microwave",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "kitchen"
// //       },
// //       {
// //         "_id": "6645d446368d22b9bbe2987d",
// //         "title": "Refrigerator",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "kitchen"
// //       },
// //       {
// //         "_id": "6645d460368d22b9bbe2987e",
// //         "title": "Stovetop/oven",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "kitchen"
// //       },
// //       {
// //         "_id": "6645d4af368d22b9bbe2987f",
// //         "title": "Laundry Detergent",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "laundry"
// //       },
// //       {
// //         "_id": "6645d507368d22b9bbe29880",
// //         "title": "Dryer",
// //         "description": "",
// //         "icon": {
// //           "type": "lucidicon",
// //           "name": "alarm-smoke"
// //         },
// //         "category": "laundry"
// //       }].reduce((result, item) => {
// //         const { category, ...rest } = item;
// //         result[category] = result[category] || [];
// //         result[category].push(rest);
// //         return result;
// //     }, {})
// //   }
  


 
// // export default function page() {
// //     const data = getPropertyAmenities()
// //     return (
// //         <div className=" min-h-screen py-20">
// //           <div className="">
// //             <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Amenities</h2>            
// //             <form className="w-full max-w-3xl ml-auto mr-auto mt-28 px-8 ">
// //               <div className='grid grid-cols-2 gap-y-10 gap-x-20 '>
// //                 {
// //                     Object.keys(data).map((catagory, index) => {
// //                         return  (<div key={index} className='grid-cols-1'>
// //                                     <h3 className=' font-medium text-xl mb-3 text-neutral-600 '>{conventionToNormalText(catagory)}</h3>
// //                                     {
// //                                         data[catagory].map((item, idx )=><Amenity key={idx} data={item}/>)
// //                                     }
// //                                 </div>)
// //                         }
// //                     )
// //                 }
// //               </div>

// //               <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
// //                 <button className="btn btn-secondary max-w-36 relative">
// //                   <Icon name='chevron-left' className="icon absolute-y-center left-4 "/> 
// //                   Back</button>
// //                 <button className="btn btn-primary">
// //                   Continue
// //                 </button>
// //               </div>
// //               </form>
// //           </div>
// //         </div>        
// //       )
// // }

// // function conventionToNormalText(text) {
// //   const words = text.replace(/[_-]/g, ' ').split(/\s+/);  
// //   const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
// //   return formattedWords.join(' ');
// // }


// "use client"
// import Amenity from './Amenity';
// import Icon from '/components/Icon';
// import { useState,useEffect } from "react";

// function getPropertyAmenities() {
//     return [{
//         "_id": "663871754a65fb5a2e5ebaee",
//         "title": "Smoke and carbon monoxide detectors",
//         "description": "",
//         "icon": {
//             "type": "lucidicon",
//             "name": "alarm-smoke"
//         },
//         "category": "safety_features"
//     },
//     {
//         "_id": "6645d22c368d22b9bbe29872",
//         "title": "Fire extinguisher",
//         "description": "",
//         "icon": {
//             "type": "lucidicon",
//             "name": "fire-extinguisher"
//         },
//         "category": "safety_features"
//     }
//     // ...other amenities
//     ].reduce((result, item) => {
//         const { category, ...rest } = item;
//         result[category] = result[category] || [];
//         result[category].push({ ...rest, checked: false });
//         return result;
//     }, {});
// }

// export default function Page() {
//     const [amenities, setAmenities] = useState(getPropertyAmenities());

//     function handleCheckChange(amenityId, checkedStatus) {
//         setAmenities(prevAmenities => {
//             // Clone the previous state
//             const updatedAmenities = { ...prevAmenities };
//             // Iterate over categories to find and update the amenity
//             Object.keys(updatedAmenities).forEach(category => {
//                 updatedAmenities[category] = updatedAmenities[category].map(amenity => 
//                     amenity._id === amenityId ? { ...amenity, checked: checkedStatus } : amenity
//                 );
//             });
//             return updatedAmenities;
//         });
//     }
//     useEffect(() => {
//       console.log("Selected Property Type Updated:", amenities);
//     }, [amenities]);
    
//     function handleSubmit(event) {
//         event.preventDefault();
//         console.log(amenities);  // You can send this data to your server or process it further
//     }


//     return (
//         <div className="min-h-screen py-20">
//             <div>
//                 <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Amenities</h2>            
//                 <form className="w-full max-w-3xl ml-auto mr-auto mt-28 px-8" onSubmit={handleSubmit}>
//                     <div className='grid grid-cols-2 gap-y-10 gap-x-20'>
//                         {
//                             Object.keys(amenities).map((category, index) => {
//                                 return (
//                                     <div key={index} className='grid-cols-1'>
//                                         <h3 className='font-medium text-xl mb-3 text-neutral-600'>
//                                             {conventionToNormalText(category)}
//                                         </h3>
//                                         {
//                                             amenities[category].map((item, idx) => (
//                                                 <Amenity 
//                                                     key={idx} 
//                                                     data={item} 
//                                                     onCheckChange={handleCheckChange} 
//                                                 />
//                                             ))
//                                         }
//                                     </div>
//                                 );
//                             })
//                         }
//                     </div>
//                     <div className="flex gap-x-8 mt-14 max-w-3xl ml-auto mr-auto">
//                         <button className="btn btn-secondary max-w-36 relative" type="button">
//                             <Icon name='chevron-left' className="icon absolute-y-center left-4" />
//                             Back
//                         </button>
//                         <button className="btn btn-primary" type="submit">
//                             Continue
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// function conventionToNormalText(text) {
//     const words = text.replace(/[_-]/g, ' ').split(/\s+/);  
//     const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
//     return formattedWords.join(' ');
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
    
    dispatch(updateFormData(payload));
    console.log('Current Redux state amentise:', formData);
    // router.push('/next-step');
  };
  const back=(e)=>{
    e.preventDefault();
    router.push("/add-listing/property-booking-types")

  }
  return (
    <div className="min-h-screen py-20">
      <div>
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Amenities</h2>
        <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8" onSubmit={handleContinue}>
          <h3 className="text-neutral-500 font-medium text-xl mb-6">Select Amenities</h3>
          
          <div className="space-y-4">
            <fieldset>
              <legend className="font-medium">Outdoor Scenic View</legend>
              <label>
                <input
                  type="checkbox"
                  checked={amenities.outdoorScenicView.lakeAccess}
                  onChange={() => handleCheckboxChange('outdoorScenicView', 'lakeAccess')}
                />
                Lake Access
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={amenities.outdoorScenicView.beachAccess}
                  onChange={() => handleCheckboxChange('outdoorScenicView', 'beachAccess')}
                />
                Beach Access
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={amenities.outdoorScenicView.ski}
                  onChange={() => handleCheckboxChange('outdoorScenicView', 'ski')}
                />
                Ski
              </label>
            </fieldset>
            
            {/* Repeat similar fieldsets for other categories */}
            <fieldset>
              <legend className="font-medium">Cooking & Cleaning</legend>
              <label>
                <input
                  type="checkbox"
                  checked={amenities.cookingCleaning.kitchen}
                  onChange={() => handleCheckboxChange('cookingCleaning', 'kitchen')}
                />
                Kitchen
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={amenities.cookingCleaning.bbqGrill}
                  onChange={() => handleCheckboxChange('cookingCleaning', 'bbqGrill')}
                />
                BBQ Grill
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={amenities.cookingCleaning.outdoorDiningArea}
                  onChange={() => handleCheckboxChange('cookingCleaning', 'outdoorDiningArea')}
                />
                Outdoor Dining Area
              </label>
            </fieldset>

            {/* Add more categories as needed */}
          </div>

          <div className="flex gap-x-8 mt-14">
            <button className="btn btn-secondary max-w-36 relative" type="button">
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
