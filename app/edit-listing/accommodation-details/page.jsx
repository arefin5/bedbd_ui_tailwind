

"use client"
import Icon from '/components/Icon';
import Counter from './Counter';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
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
    childrenGuest: 0
  });
  const totalroom =useSelector((state) => state.editForm.editlist?.totalroom) || {};
const totalBed=useSelector((state) => state.editForm.editlist?.totalBed) 
const Guest=useSelector((state)=>state.editForm.editlist?.Guest)
  const router = useRouter();
  const dispatch = useDispatch();
  // Handle change function to update specific counter
  const handleCounterChange = (name, value) => {
    setRoomCounts(prev => ({
      ...prev,
      [name]: value,
    }));
  };

// useEffect(()=>{
//   console.log(totalroom);
//   console.log(totalBed);
//   console.log(Guest)
//     // setRoomCounts.bedRoom(totalroom.bedRoom);
//     // setRoomCounts.diningRoom(totalroom.diningRoom);
//     // setRoomCounts.washRoom(totalroom.washRoom);
//     // setRoomCounts.others(totalroom.others);
//     // setRoomCounts.singleBed(totalBed.singleBed)
//     // setRoomCounts.doubleBed(totalBed.doubleBed)
//     // setRoomCounts.extrabed(totalBed.extraBed)
//     // setRoomCounts.adultGuest(Guest.adultGuest)
//     // setRoomCounts.childrenGuest(Guest.childrenGuest)
  
// },[totalroom,])


useEffect(() => {
  setRoomCounts((prev) => ({
    ...prev,
    bedRoom: totalroom?.bedRoom || 0,
    diningRoom: totalroom?.diningRoom || 0,
    washRoom: totalroom?.washRoom || 0,
    others: totalroom?.others || 0,
    singleBed: totalBed?.singleBed || 0,
    doubleBed: totalBed?.doubleBed || 0,
    extraBed: totalBed?.extraBed || 0,
    adultGuest: Guest?.adultGuest || 0,
    childrenGuest: Guest?.childrenGuest || 0,
  }));
}, [totalroom, totalBed, Guest]);


  // Handle submit
  const handleSubmit = async (event) => {
    console.log(roomCounts);

    event.preventDefault();
    try {
      const payload = {

        Guest: {
          adultGuest: roomCounts.adultGuest,
          childrenGuest: roomCounts.childrenGuest
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
        }
      };
      await dispatch(updateFormData(payload));
      router.push('/edit-listing/amenities');

    } catch (error) {
      console.log(error)
    }
  };
  const back = (e) => {
    e.preventDefault();
    router.push("/add-listing/location-confirmation");
  };
  return (
    <div className="min-h-screen py-20">
      <div className="">
        <h2 className="text-primary-400 text-4xl text-center font-medium mb-12">
          Accommodation Details
        </h2>
        <form className="w-full max-w-3xl ml-auto mr-auto mt-28 px-8" onSubmit={handleSubmit}>
          {/* <Amenities data={data}/> */}
          <div>
            <h3 className="text-netutral-600 text-xl mb-4 font-medium">Total Room</h3>
            <div className="shadow-md rounded">
              <div className="flex justify-between py-4 px-4 relative custom-btm-line-200">
                <h4>Bedroom</h4>
                <Counter
                  name="bedRoom"
                  value={roomCounts.bedRoom}
                  onCountChange={handleCounterChange}
                />
              </div>

              <div className="flex justify-between py-4 px-4 relative custom-btm-line-200">
                <h4>Dining Room</h4>
                <Counter
                  name="diningRoom"
                  value={roomCounts.diningRoom}
                  onCountChange={handleCounterChange}
                />
              </div>

              <div className="flex justify-between py-4 px-4 relative custom-btm-line-200">
                <h4>Washroom</h4>
                <Counter
                  name="washRoom"
                  value={roomCounts.washRoom}
                  onCountChange={handleCounterChange}
                />
              </div>

              <div className="flex justify-between py-4 px-4 relative">
                <h4>Others</h4>
                <Counter
                  name="others"
                  value={roomCounts.others}
                  onCountChange={handleCounterChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-netutral-600 text-xl mb-4 font-medium">Total bed</h3>
            <div className="shadow-md rounded">
              <div className="flex justify-between py-4 px-4 relative custom-btm-line-200">
                <h4>Single bed</h4>
                <Counter
                  name="singleBed"
                  value={roomCounts.singleBed}
                  onCountChange={handleCounterChange}
                />
              </div>

              <div className="flex justify-between py-4 px-4 relative custom-btm-line-200">
                <h4>Double bed</h4>
                <Counter
                  name="doubleBed"
                  value={roomCounts.doubleBed}
                  onCountChange={handleCounterChange}
                />
              </div>

              <div className="flex justify-between py-4 px-4 relative">
                <h4>Extra bed (Request)</h4>
                <Counter
                  name="extraBed"
                  value={roomCounts.extraBed}
                  onCountChange={handleCounterChange}
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-netutral-600 text-xl mb-4 font-medium">Total Guest</h3>
            <div className="shadow-md rounded">
              <div className="flex justify-between py-4 px-4 relative custom-btm-line-200">
                <h4>Adult</h4>
                <Counter
                  name="adultGuest"
                  value={roomCounts.adultGuest}
                  onCountChange={handleCounterChange}
                />
              </div>

              <div className="flex justify-between py-4 px-4 relative">
                <h4>Under 14</h4>
                <Counter
                  name="childrenGuest"
                  value={roomCounts.childrenGuest}
                  onCountChange={handleCounterChange}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-x-8 mt-14">
            <button className="btn btn-secondary max-w-36 relative" type="button"
              onClick={back}
            >
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
