
"use client";
import React, { useEffect, useState } from 'react';
import axiosInstance from '@/redux/services/axiosInstance';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "/components/Icon";

export default function Calendar({ listSelect }) {
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

 
  const fetchBookedDates = async () => {
    switch (true) {
      case !listSelect:
        console.log("No property selected");
        break;
        
      case !listSelect._id:
        console.log("Selected property has no _id");
        break;
  
      default:
        try {
          const response = await axiosInstance.get(`/property-book-list/${listSelect._id}`);
          console.log("Calendar bookings:", response.data.bookings);
          setBookedDates(response.data.bookings.map(date => new Date(date)));
        } catch (error) {
          console.error("Error fetching booked dates:", error);
        }
        break;
    }
  };
  
  useEffect(() => {
    // fetchBookedDates();
    console.log(listSelect)
  }, [listSelect]);

  return (
    <div className='py-6 px-4 w-full max-w-sm bg-secondary-50 rounded-lg'>
      <div className='text-neutral-500 flex justify-between'>
        <div className='font-semibold'>
          <span className='block'>Booked Date</span>
          <span>{listSelect ? `(${listSelect.propertyTitle})` : "(Select a property)"}</span>
        </div>

        <div className='border-none text-sm font-medium transition ease-in-out delay-150 flex items-center relative mr-4'>
          <Icon name="calendar" className="mr-2" />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            highlightDates={bookedDates}
            inline
            minDate={new Date()}
            excludeDates={bookedDates}
            placeholderText="Select a Date"
            className="datepicker-custom"
          />
        </div>
      </div>
    </div>
  );
}
