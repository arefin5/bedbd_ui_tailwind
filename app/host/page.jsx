// "use client"
// import PendingRequestNotification from './PendingRequestNotification'
// import PropertyList from './PropertyList'
// import Calendar from './Calendar'
// import Chart from './Chart'
// import RevenueChart from './RevenueChart'
// import axiosInstance from '@/redux/services/axiosInstance'
// import { useEffect ,useState} from 'react'

// export default function Dashboard() {
//   const [authorBookings, setAuthorBookings] = useState([]);
//   const [listSelect,setListSelect]=useState("");

//   const data = [
//     { value: 45, title: 'Booked' },
//     { value: 20, title: 'Canceled' },
//   ];
//   const dailyRevenue = [
//     { date: '2024-07-01', value: 150 },
//     { date: '2024-07-02', value: 200 },
//     { date: '2024-07-03', value: 250 },
//     { date: '2024-07-04', value: 300 },
//     { date: '2024-07-05', value: 350 },
//     { date: '2024-07-06', value: 400 },
//     { date: '2024-07-07', value: 450 },
//     { date: '2024-07-08', value: 500 },
//   ];
// // /all-draft

// // /all-bookind-by-author
// const fetchAuthorListBooking=async()=>{
//   try{
//    const listData= await axiosInstance.get("/all-bookind-by-author");
//     //  console.log("listData author",listData.data);
//      setAuthorBookings(listData.data);
//   }catch(error){
//     console.log(error)
//   }
// }
// useEffect(()=>{
//   fetchAuthorListBooking();
// },[listSelect]);

// // const fetchUserListCancell
//   return (
//     <div className=' w-full'>
//       <>
//         <PendingRequestNotification/>
//         <PropertyList listSelect={listSelect}setListSelect={setListSelect} />
//         <Calendar listSelect={listSelect}/>
//         <Chart data={data} title={'Booked & Canceled'} totalValue='11254'/>
//         <RevenueChart bookings={authorBookings}/>
//       </>
//     </div>
//   )
// }
"use client";
import PendingRequestNotification from './PendingRequestNotification';
import PropertyList from './PropertyList';
import Calendar from './Calendar';
import Chart from './Chart';
import RevenueChart from './RevenueChart';
import axiosInstance from '@/redux/services/axiosInstance';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [authorBookings, setAuthorBookings] = useState([]);
  const [listSelect, setListSelect] = useState(null); // Initialize as null

  const fetchAuthorListBooking = async () => {
    try {
      const listData = await axiosInstance.get("/all-bookind-by-author");
      setAuthorBookings(listData.data);
    } catch (error) {
      console.error("Error fetching author bookings:", error);
    }
  };

  useEffect(() => {
    fetchAuthorListBooking();
  }, [listSelect]);

  return (
    <div className='w-full'>
      <>
        <PendingRequestNotification />
        <PropertyList listSelect={listSelect} setListSelect={setListSelect} />
        <Calendar listSelect={listSelect} />
        <Chart data={[{ value: 45, title: 'Booked' }, { value: 20, title: 'Canceled' }]} title="Booked & Canceled" totalValue="11254" />
        <RevenueChart bookings={authorBookings} />
      </>
    </div>
  );
}
