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
  }, []);

  return (
    <div className='w-full'>
      <>
        <PendingRequestNotification />
        <PropertyList />
       
        <Chart data={[{ value: 45, title: 'Booked' }, { value: 20, title: 'Canceled' }]} title="Booked & Canceled" totalValue="11254" />
        <RevenueChart bookings={authorBookings} />
      </>
    </div>
  );
}
