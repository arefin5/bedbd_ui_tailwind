// // "use client"
// // import Icon from '/components/Icon'
// // // import PropertyBookingTypes from './PropertyBookingTypes'
// // import BookingType from './BookingType'
// // import { Plus } from 'lucide-react'
// // import { useEffect, useState } from 'react'
// // import { useDispatch ,useSelector} from 'react-redux'
// // import { updateFormData } from '@/redux/list/editListSlice';

// // import { useRouter } from 'next/navigation';

// // function getPropertyBookingType() {
  
// //   return [{
// //     "_id":  "663389106a89b8b09c9afcca",
// //     "title": "A private room",
// //     "description": "Guests can book a room within the property. There are common areas that are shared with either the host or other guests."
// //   },
// //   {
// //     "_id":  "663389526a89b8b09c9afcd1",
// //     "title": "Entire place",
// //     "description": "Guests have access to the entire place and don’t have to share it with the host or other guests."
// //   }]
// // }

 
// // export default function page() {
// //   const data = getPropertyBookingType()
// //     const [bookingtype,setBookingType]=useState({
// //     });
// //     const currentFormData = useSelector((state) => state.editForm);

// //     const router = useRouter();
// //     const dispatch = useDispatch();
// //     const formData = useSelector((state) => state.form);
// //     useEffect(()=>{
// //        console.log(bookingtype);

// //        console.log()
// //     },[bookingtype])
  
// //     const handleContinue = async (e) => {
// //       e.preventDefault();
   
// //     try{
// //       const filteredHomeRules = Object.fromEntries(
// //             Object.entries(bookingtype).filter(([key, value]) => value.value)
// //         );
// //       const payload = { 
// //         bookingtype :filteredHomeRules
// //       };
      
// //       // Using async/await to ensure the state update is processed
// //       await dispatch(updateFormData(payload)); // Wait until the action is dispatched and processed
// //          router.push('/add-listing/property-details'); // Navigate to the next pag
// //     }catch(error){

// //     }
  
     
// //     };
// //     const back=(e)=>{
// //       e.preventDefault();
// //       router.push('/add-listing/property-state');
// //     }
// //     return (
// //         <div className=" min-h-screen py-20">
// //           <div className="">
// //             <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>            
// //             <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8 ">
// //               <h3 className="text-neutral-500 font-medium text-xl mb-6">What can guests book?</h3>
// //               {/* <PropertyBookingTypes data={data}/> */}
// //               <div className="space-y-4" id='property_booking_types'>
// //                 { 
// //                   data.map(item=>
// //                             <BookingType 
// //                               data={item}
// //                               setBookingType={setBookingType}
// //                             />) 
// //                 }
// //               </div>
// //               <button className='flex gap-x-2 mt-3 text-neutral-600 text-base font-medium '>
// //                 <Plus className='icon'/>
// //                 Add more option
// //               </button>
// //               <div className="flex gap-x-8 mt-14">
// //                 <button className="btn btn-secondary max-w-36 relative" onClick={back}>
// //                   <Icon name='chevron-left' className="icon absolute-y-center left-4 "/> 
// //                   Back</button>
// //                 <button className="btn btn-primary" onClick={handleContinue}>
// //                   Continue
// //                 </button>
// //               </div>
// //               </form>
// //           </div>
// //         </div>
        
// //       )
// // }
// 'use client';
// import Icon from '/components/Icon';
// import BookingType from './BookingType';
// import { Plus } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateFormData } from '@/redux/list/editListSlice';
// import { useRouter } from 'next/navigation';

// function getPropertyBookingType() {
//   return [
//     {
//       _id: '663389106a89b8b09c9afcca',
//       title: 'A private room',
//       description: 'Guests can book a room within the property. There are common areas that are shared with either the host or other guests.',
//     },
//     {
//       _id: '663389526a89b8b09c9afcd1',
//       title: 'Entire place',
//       description: 'Guests have access to the entire place and don’t have to share it with the host or other guests.',
//     },
//   ];
// }

// export default function Page() {
//   const data = getPropertyBookingType();
//   const currentFormData = useSelector((state) => state.editForm.editlist?.bookingtype || {});
//   const [bookingtype, setBookingType] = useState({});
//   const router = useRouter();
//   const dispatch = useDispatch();

//   // Initialize state from Redux when the component loads
//   useEffect(() => {
//     setBookingType(currentFormData.editlist.bookingtype); // Load data from Redux into local state
//     console.log('Initial Booking Type:', currentFormData);
//   }, [currentFormData]);

//   const handleContinue = async (e) => {
//     e.preventDefault();
//     try {
//       const filteredBookingTypes = Object.fromEntries(
//         Object.entries(bookingtype).filter(([_, value]) => value.value)
//       );

//       const payload = { bookingtype: filteredBookingTypes };
//       await dispatch(updateFormData(payload));
//       router.push('/add-listing/property-details');
//     } catch (error) {
//       console.error('Error updating booking types:', error);
//     }
//   };

//   const handleBack = (e) => {
//     e.preventDefault();
//     router.push('/add-listing/property-state');
//   };

//   return (
//     <div className="min-h-screen py-20">
//       <div className="">
//         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>
//         <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8">
//           <h3 className="text-neutral-500 font-medium text-xl mb-6">What can guests book?</h3>
//           <div className="space-y-4" id="property_booking_types">
//             {data.map((item) => (
//               <BookingType
//                 key={item._id}
//                 data={item}
//                 setBookingType={setBookingType}
//                 currentBookingType={bookingtype}
//               />
//             ))}
//           </div>
//           <div className="flex gap-x-8 mt-14">
//             <button className="btn btn-secondary max-w-36 relative" onClick={handleBack}>
//               <Icon name="chevron-left" className="icon absolute-y-center left-4" />
//               Back
//             </button>
//             <button className="btn btn-primary" onClick={handleContinue}>
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

export default function Page() {
  const currentFormData = useSelector((state) => state.editForm.editlist?.bookingtype || {});
  const [bookingtype, setBookingType] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();

  // Initialize state from Redux when the component loads
  useEffect(() => {
    if (currentFormData?.bookingTypes) {
      setBookingType(currentFormData.bookingTypes); // Load `bookingTypes` data into local state
      // console.log('Initial Booking Type:', currentFormData);
    }
  }, [currentFormData]);

  const handleContinue = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        bookingtype: {
          bookingTypes: bookingtype,
        },
      };
      await dispatch(updateFormData(payload));
      router.push('/edit-listing/property-details');
    } catch (error) {
      console.error('Error updating booking types:', error);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    router.push('/edit-listing/property-state');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="">
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">Booking Type</h2>
        <form className="w-full max-w-2xl ml-auto mr-auto mt-28 px-8">
          <h3 className="text-neutral-500 font-medium text-xl mb-6">What can guests book?</h3>
          <div className="space-y-4" id="property_booking_types">
            {Object.entries(bookingtype).map(([key, value]) => (
              <BookingType
                key={key}
                id={key}
                data={value}
                setBookingType={setBookingType}
                bookingtype={bookingtype}
              />
            ))}
          </div>
          <div className="flex gap-x-8 mt-14">
            <button className="btn btn-secondary max-w-36 relative" onClick={handleBack}>
              <Icon name="chevron-left" className="icon absolute-y-center left-4" />
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
