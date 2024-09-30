'use client'
import Calendar from './Calendar';
import { useState } from 'react';



function addMonths(date, months) {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}

export default function CalenderComposition() {
    const today = new Date();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function handleSelectDate(date) {
    if (!startDate || (startDate && endDate)) {
              setStartDate(date);
              setEndDate(null);
            } else if (date < startDate) {
              setStartDate(date);
            } else {
              setEndDate(date);
            }
  }

    return (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Dual Calendar</h1>
          <div className="flex space-x-4">
            <Calendar 
              date={today} 
              title="Calendar 1" 
              startDate={startDate} 
              endDate={endDate} 
              onSelectDate={handleSelectDate} 
            />
            <Calendar 
              date={addMonths(today, 1)} 
              title="Calendar 2" 
              startDate={startDate} 
              endDate={endDate} 
              onSelectDate={handleSelectDate} 
            />
          </div>
          <div className="mt-4">
            <p>Start Date: {startDate ? startDate.toDateString() : 'None'}</p>
            <p>End Date: {endDate ? endDate.toDateString() : 'None'}</p>
          </div>
        </div>
      );
}



// import React, { useState } from 'react';

// // Helper function to add months
// const addMonths = () => {
//   const result = new Date(date);
//   result.setMonth(result.getMonth() + months);
//   return result;
// };
// const Main = () => {
//   const today = new Date();
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handleSelectDate = (date) => {
//     if (!startDate || (startDate && endDate)) {
//       setStartDate(date);
//       setEndDate(null);
//     } else if (date < startDate) {
//       setStartDate(date);
//     } else {
//       setEndDate(date);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Dual Calendar</h1>
//       <div className="flex space-x-4">
//         <Calendar 
//           date={today} 
//           title="Calendar 1" 
//           startDate={startDate} 
//           endDate={endDate} 
//           onSelectDate={handleSelectDate} 
//         />
//         <Calendar 
//           date={addMonths(today, 1)} 
//           title="Calendar 2" 
//           startDate={startDate} 
//           endDate={endDate} 
//           onSelectDate={handleSelectDate} 
//         />
//       </div>
//       <div className="mt-4">
//         <p>Start Date: {startDate ? startDate.toDateString() : 'None'}</p>
//         <p>End Date: {endDate ? endDate.toDateString() : 'None'}</p>
//       </div>
//     </div>
//   );
// };

// export default Main;