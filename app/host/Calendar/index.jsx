
// "use client";
// import React, { useEffect, useState } from 'react';
// import axiosInstance from '@/redux/services/axiosInstance';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import Icon from "/components/Icon";

// export default function Calendar({ listSelect }) {
//   const [bookedDates, setBookedDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
   
//   const fetchBookedDates = async () => {
//     if (!listSelect || !listSelect._id) {
//       console.log("No property selected or selected property has no _id");
//       return;
//     }

//     try {
//       const response = await axiosInstance.get(`/property-book-list/${listSelect._id}`);
//       // setBookedDates(response.data.bookings.map(date => new Date(date)));
//       const bookings = response.data.bookings && Array.isArray(response.data.bookings)
//       ? response.data.bookings.map(date => new Date(date))
//       : [];
    
//     setBookedDates(bookings);
//     } catch (error) {
//       console.error("Error fetching booked dates:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBookedDates();
//   }, [listSelect]); // Fetch dates only when listSelect changes

//   return (
//     <div className='py-6 px-4 w-full max-w-sm bg-secondary-50 rounded-lg'>
//       <div className='text-neutral-500 flex justify-between'>
//         <div className='font-semibold'>
//           <span className='block'>Booked Date</span>
//           <span>{listSelect ? `(${listSelect.propertyTitle})` : "(Select a property)"}</span>
//         </div>
//         <div className='border-none text-sm font-medium transition ease-in-out delay-150 flex items-center relative mr-4'>
//           <Icon name="calendar" className="mr-2" />
//           <DatePicker
//             selected={selectedDate}
//             onChange={(date) => setSelectedDate(date)}
//             highlightDates={bookedDates}
//             inline
//             minDate={new Date()}
//             excludeDates={bookedDates}
//             placeholderText="Select a Date"
//             className="datepicker-custom"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
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
    if (!listSelect || !listSelect._id) {
      console.log("No property selected or selected property has no _id");
      return;
    }

    try {
      const response = await axiosInstance.get(`/property-book-list/${listSelect._id}`);
      
      // Ensure dates are valid before mapping them
      const bookings = response.data.bookings && Array.isArray(response.data.bookings)
        ? response.data.bookings
            .map(date => new Date(date))
            .filter(date => !isNaN(date)) // Filters out invalid dates
        : [];
      
      setBookedDates(bookings);
    } catch (error) {
      console.error("Error fetching booked dates:", error);
    }
  };

  useEffect(() => {
    fetchBookedDates();
  }, [listSelect]); // Fetch dates only when listSelect changes

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
