// "use client";
// import Icon from '/components/Icon';
// import Counter from './Counter';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useDispatch } from 'react-redux';
// import { updateFormData } from '@/redux/list/editListSlice';

// export default function Page() {
//   // State to store counter values
//   const [roomCounts, setRoomCounts] = useState({
//     bedRoom: 0,
//     diningRoom: 0,
//     washRoom: 0,
//     others: 0,
//     singleBed: 0,
//     doubleBed: 0,
//     extraBed: 0,
//     adultGuest: 0,
//     childrenGuest: 0,
//   });

//   const router = useRouter();
//   const dispatch = useDispatch();

//   // Load data from localStorage
//   useEffect(() => {
//     const savedData = localStorage.getItem('data');
//     if (savedData) {
//       const parsedData = JSON.parse(savedData);
//       setRoomCounts({
//         bedRoom: parsedData.totalroom?.bedRoom || 0,
//         diningRoom: parsedData.totalroom?.diningRoom || 0,
//         washRoom: parsedData.totalroom?.washRoom || 0,
//         others: parsedData.totalroom?.others || 0,
//         singleBed: parsedData.totalBed?.singleBed || 0,
//         doubleBed: parsedData.totalBed?.doubleBed || 0,
//         extraBed: parsedData.totalBed?.extraBed || 0,
//         adultGuest: parsedData.Guest?.adultGuest || 0,
//         childrenGuest: parsedData.Guest?.childrenGuest || 0,
//       });
//     }
//   }, []);

//   // const handleCounterChange = (name, value) => {
//   //   setRoomCounts(prev => {
//   //     const updatedCounts = { ...prev, [name]: value };
//   //     const newLocalStorageData = {
//   //       totalroom: {
//   //         bedRoom: updatedCounts.bedRoom,
//   //         diningRoom: updatedCounts.diningRoom,
//   //         washRoom: updatedCounts.washRoom,
//   //         others: updatedCounts.others,
//   //       },
//   //       totalBed: {
//   //         singleBed: updatedCounts.singleBed,
//   //         doubleBed: updatedCounts.doubleBed,
//   //         extraBed: updatedCounts.extraBed,
//   //       },
//   //       Guest: {
//   //         adultGuest: updatedCounts.adultGuest,
//   //         childrenGuest: updatedCounts.childrenGuest,
//   //       },
//   //     };
//   //     localStorage.setItem('data', JSON.stringify(newLocalStorageData));
//   //     return updatedCounts;
//   //   });
//   // };

//   // Handle submit
//   const handleCounterChange = (name, value) => {
//     setRoomCounts(prev => {
//       const updatedCounts = { ...prev, [name]: value };
  
//       // Retrieve existing data from localStorage
//       const existingData = JSON.parse(localStorage.getItem('data')) || {};
  
//       // Merge the updated counts with the existing data
//       const newLocalStorageData = {
//         ...existingData,
//         totalroom: {
//           ...existingData.totalroom,
//           bedRoom: updatedCounts.bedRoom,
//           diningRoom: updatedCounts.diningRoom,
//           washRoom: updatedCounts.washRoom,
//           others: updatedCounts.others,
//         },
//         totalBed: {
//           ...existingData.totalBed,
//           singleBed: updatedCounts.singleBed,
//           doubleBed: updatedCounts.doubleBed,
//           extraBed: updatedCounts.extraBed,
//         },
//         Guest: {
//           ...existingData.Guest,
//           adultGuest: updatedCounts.adultGuest,
//           childrenGuest: updatedCounts.childrenGuest,
//         },
//       };
  
//       // Save the updated data back to localStorage
//       localStorage.setItem('data', JSON.stringify(newLocalStorageData));
//       return updatedCounts;
//     });
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const payload = {
//         Guest: {
//           adultGuest: roomCounts.adultGuest,
//           childrenGuest: roomCounts.childrenGuest,
//         },
//         totalroom: {
//           bedRoom: roomCounts.bedRoom,
//           diningRoom: roomCounts.diningRoom,
//           washRoom: roomCounts.washRoom,
//           others: roomCounts.others,
//         },
//         totalBed: {
//           singleBed: roomCounts.singleBed,
//           doubleBed: roomCounts.doubleBed,
//           extraBed: roomCounts.extraBed,
//         },
//       };
//       await dispatch(updateFormData(payload));
//       router.push('/edit-listing/amenities');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const back = (e) => {
//     e.preventDefault();
//     router.push("/edit-listing/location-confirmation");
//   };

//   return (
//     <div className="min-h-screen py-20">
//       <div className="">
//         <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">
//           Accommodation Details
//         </h2>
//         <form className="w-full max-w-3xl ml-auto mr-auto mt-28 px-8" onSubmit={handleSubmit}>
//           <div>
//             <h3 className="text-netutral-600 text-xl mb-4 font-medium">Total Room</h3>
//             <div className="shadow-md rounded">
//               {['bedRoom', 'diningRoom', 'washRoom', 'others'].map((room) => (
//                 <div key={room} className="flex justify-between py-4 px-4 relative custom-btm-line-200">
//                   <h4>{room.charAt(0).toUpperCase() + room.slice(1)}</h4>
//                   <Counter
//                     name={room}
//                     value={roomCounts[room]}
//                     onCountChange={handleCounterChange}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

         
//           <div className="flex gap-x-8 mt-14">
//             <button className="btn btn-secondary max-w-36 relative" type="button" onClick={back}>
//               <Icon name="chevron-left" className="icon absolute-y-center left-4" />
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
import Counter from './Counter';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { updateFormData } from '@/redux/list/editListSlice';

export default function Page() {
  // State to store counter values
  const [roomCounts, setRoomCounts] = useState({
    bedRoom: 0,
    diningRoom: 0,
    washRoom: 0,
    others: 0,
    singleBed: 0,
    doubleBed: 0,
    extraBed: 0,
    adultGuest: 0,
    childrenGuest: 0,
  });

  const router = useRouter();
  const dispatch = useDispatch();

  // Load data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setRoomCounts({
        bedRoom: parsedData.totalroom?.bedRoom || 0,
        diningRoom: parsedData.totalroom?.diningRoom || 0,
        washRoom: parsedData.totalroom?.washRoom || 0,
        others: parsedData.totalroom?.others || 0,
        singleBed: parsedData.totalBed?.singleBed || 0,
        doubleBed: parsedData.totalBed?.doubleBed || 0,
        extraBed: parsedData.totalBed?.extraBed || 0,
        adultGuest: parsedData.Guest?.adultGuest || 0,
        childrenGuest: parsedData.Guest?.childrenGuest || 0,
      });
    }
  }, []);

  const handleCounterChange = (name, value) => {
    setRoomCounts(prev => {
      const updatedCounts = { ...prev, [name]: value };
      
     const  totalroom= {
          bedRoom: updatedCounts.bedRoom,
          diningRoom: updatedCounts.diningRoom,
          washRoom: updatedCounts.washRoom,
          others: updatedCounts.others,
        }

       const totalBed= {
          singleBed: updatedCounts.singleBed,
          doubleBed: updatedCounts.doubleBed,
          extraBed: updatedCounts.extraBed,
        }
        const Guest = {
          adultGuest: updatedCounts.adultGuest,
          childrenGuest: updatedCounts.childrenGuest,
        }
        
      const storedData = JSON.parse(localStorage.getItem('data')) || {};
        storedData.totalBed= totalBed;
        storedData.totalroom= totalroom;
        storedData.Guest= Guest;
        localStorage.setItem('data', JSON.stringify(storedData));

      return updatedCounts;
    });
  };

  // Handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        Guest: {
          adultGuest: roomCounts.adultGuest,
          childrenGuest: roomCounts.childrenGuest,
        },
        totalroom: {
          bedRoom: roomCounts.bedRoom,
          diningRoom: roomCounts.diningRoom,
          washRoom: roomCounts.washRoom,
          others: roomCounts.others,
        },
        totalBed: {
          singleBed: roomCounts.singleBed,
          doubleBed: roomCounts.doubleBed,
          extraBed: roomCounts.extraBed,
        },
      };
      await dispatch(updateFormData(payload));
      router.push('/edit-listing/amenities');
    } catch (error) {
      console.error(error);
    }
  };

  const back = (e) => {
    e.preventDefault();
    router.push("/edit-listing/location-confirmation");
  };

  return (
    <div className="min-h-screen py-20">
      <div className="">
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">
          Accommodation Details
        </h2>
        <form className="w-full max-w-3xl ml-auto mr-auto mt-28 px-8" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-netutral-600 text-xl mb-4 font-medium">Total Room</h3>
            <div className="shadow-md rounded">
              {['bedRoom', 'diningRoom', 'washRoom', 'others'].map((room) => (
                <div key={room} className="flex justify-between py-4 px-4 relative custom-btm-line-200">
                  <h4>{room.charAt(0).toUpperCase() + room.slice(1)}</h4>
                  <Counter
                    name={room}
                    value={roomCounts[room]}
                    onCountChange={handleCounterChange}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-netutral-600 text-xl mb-4 font-medium">Beds</h3>
            <div className="shadow-md rounded">
              {['singleBed', 'doubleBed', 'extraBed'].map((bed) => (
                <div key={bed} className="flex justify-between py-4 px-4 relative custom-btm-line-200">
                  <h4>{bed.charAt(0).toUpperCase() + bed.slice(1).replace(/([A-Z])/g, ' $1')}</h4>
                  <Counter
                    name={bed}
                    value={roomCounts[bed]}
                    onCountChange={handleCounterChange}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-netutral-600 text-xl mb-4 font-medium">Guests</h3>
            <div className="shadow-md rounded">
              {['adultGuest', 'childrenGuest'].map((guest) => (
                <div key={guest} className="flex justify-between py-4 px-4 relative custom-btm-line-200">
                  <h4>{guest.charAt(0).toUpperCase() + guest.slice(1).replace(/([A-Z])/g, ' $1')}</h4>
                  <Counter
                    name={guest}
                    value={roomCounts[guest]}
                    onCountChange={handleCounterChange}
                  />
                </div>
              ))}
            </div>
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
