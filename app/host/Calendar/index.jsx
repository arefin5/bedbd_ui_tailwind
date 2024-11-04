
"use client";
import React, { useEffect, useState } from 'react';
import axiosInstance from '@/redux/services/axiosInstance';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Icon from "/components/Icon";

export default function Calendar({ listSelect }) {
  const [bookedDates, setBookedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  // const fetchBookedDates = async () => {
  //   if (!listSelect || !listSelect._id) {
  //     // console.log("No property selected or selected property has no _id");
  //     return;
  //   }

  //   try {
  //     const response = await axiosInstance.get(`/property-book-list/${listSelect._id}`);
  //     console.log(response.data.bookings)
  //     const bookings = response.data.bookings && Array.isArray(response.data.bookings)
  //       ? response.data.bookings
  //           .map(date => new Date(date))
  //           .filter(date => !isNaN(date)) // Filters out invalid dates
  //       : [];
  //     setBookedDates(bookings);
  //     console.log(bookedDates)

  //   } catch (error) {
  //     console.error("Error fetching booked dates:", error);
  //   }
  // };
  const fetchBookedDates = async () => {
    if (!listSelect || !listSelect._id) {
      console.log("No property selected or selected property has no _id");
      return;
    }
  
    try {
      const response = await axiosInstance.get(`/property-book-list/${listSelect._id}`);
      
      const bookings = response.data.bookings && Array.isArray(response.data.bookings)
        ? response.data.bookings
            .flatMap(booking => {
              const start = new Date(booking.checkinDate);
              const end = new Date(booking.checkoutDate);
              const dateArray = [];
  
              // Create an array of dates between start and end (exclusive)
              for (let d = start; d < end; d.setDate(d.getDate() + 1)) {
                dateArray.push(new Date(d));
              }
  
              return dateArray;
            })
            .filter(date => !isNaN(date)) 
        : [];
      
      setBookedDates(bookings);
      console.log(bookings)
    } catch (error) {
      console.error("Error fetching booked dates:", error);
    }
  };
  
  useEffect(() => {
    fetchBookedDates();
  }, [listSelect]);

  const today = new Date();

  const handleDateClick = (date) => {
    setSelectedDate(date); // Allow selection of both past and future dates
  };

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
            onChange={handleDateClick} // Allow direct selection of dates
            highlightDates={bookedDates} // Highlight booked dates
            inline
            minDate={new Date('1970-01-01')} // Allow selection of any date from the past
            excludeDates={bookedDates.filter(date => date > today)} // Prevent future booked dates from being selectable
            placeholderText="Select a Date"
            className="datepicker-custom"
            onDayClick={handleDateClick} // Handle click on day to set selected date
          />
        </div>
      </div>
    </div>
  );
}
