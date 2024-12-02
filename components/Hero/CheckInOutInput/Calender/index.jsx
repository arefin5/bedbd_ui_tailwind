"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { X } from "lucide-react";
import Month from "./Month";

// Calendar Component
const Calendar = ({type, close,  onClickHandlar, today, handleClearSelction}) => {

  const { isMapOpen } = useSelector(state => state.search.location);

  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth();
//   const today = date.getDate();


  const [currentMonth, setCurrentMonth] = useState(currMonth);
  const [currentYear, setCurrentYear] = useState(currYear);

  const nextMonth = (currentMonth + 1) % 12;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

  const handleMonthChange = (direction) => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };



  return (
    //   
    <div  className={`z-[999] transition duration-500 ease-in-out duration-700
          ${isMapOpen 
            ? "left-[300px] top-[200px]" 
            : " top-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2"} 
            absolute w-max md:w-[600px]  bg-white p-4 rounded-lg shadow-md drop-shadow-md`}>
      <div className="float-right flex">
        <button onClick={handleClearSelction} className="text-secondary-400 underline text-sm  mr-10"> clear all</button>
        <button onClick={close}><X size={24} className="icon  cursorpointer" /></button>
        
      </div>
      
        
      <div className="md:flex md:gap-4 mt-6">
        <Month
          month={currentMonth}
          year={currentYear}
          onClickHandlar={onClickHandlar}
          today={today}
          calenderType={type}
        //   SelectDate={SelectDate}
          index={0}
        />
        <Month
          month={nextMonth}
          year={nextYear}
          onClickHandlar={onClickHandlar}
          today={today}
          calenderType={type}
        //   SelectDate={SelectDate}
          index={1}
        />
      </div>

      {/* <div className="mt-4 item-right"> */}
      {/* <button className="float-right rounded-full px-4 py-2 border border-neutral-100" onClick={handleClearSelction}>Clear</button> */}
      {/* </div> */}

    </div>
  );
};

export default Calendar;