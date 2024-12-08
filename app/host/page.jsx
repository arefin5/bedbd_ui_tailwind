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
  const [bookingList, setBookingList] = useState([]);
  const [sPayment,setsPayment]=useState(0);
  const [canPayment,setCancelPayment]=useState(0);
  

  const fetchAuthorListBooking = async () => {
    try {
      const listData = await axiosInstance.get("/all-bookind-by-author");
      setAuthorBookings(listData.data);
    } catch (error) {
      console.error("Error fetching author bookings:", error);
    }
  };

const fetchSuccess = async () => {
  try {
      const response = await axiosInstance.get("/host-all-booking-list");
      const allBookings = response?.data || [];

      // Filter by status: "paymentsuccess"
      const successfulBookings = allBookings.filter(booking => booking.status === "paymentsuccess");

      // Calculate the sum of basePrice for filtered bookings
      const totalBasePrice = successfulBookings.reduce((sum, booking) => sum + (booking.basePrice || 0), 0);
      const cancelBooking=allBookings.filter(booking => booking?.status === "cancel");
      const totalCancelPrice = cancelBooking.reduce((sum, booking) => sum + (booking.basePrice || 0), 0);
      setsPayment(totalBasePrice);
      setCancelPayment(totalCancelPrice)

  } catch (error) {
      console.error("Error fetching pending list:", error);
  }
};

  useEffect(() => {
    fetchAuthorListBooking();
    fetchSuccess();
  }, []);

  return (
    <div className='w-full'>
      <>
        <PendingRequestNotification />
        <PropertyList />
  
        <Chart data={[{ value: sPayment, title: 'Booked' },
         { value: canPayment, title: 'Canceled' }]} title="Booked & Canceled" totalValue={sPayment+canPayment} />
        <RevenueChart bookings={authorBookings} />
      </>
    </div>
  );
}
