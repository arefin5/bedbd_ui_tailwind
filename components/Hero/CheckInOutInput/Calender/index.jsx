"use client";
import { useState } from "react";

// Helper Functions
const nextDay = (day) => {
  const date = new Date(day * 1000);
  date.setDate(date.getDate() + 1);
  return Math.floor(date.getTime() / 1000);
};

const previousDay = (day) => {
  const date = new Date(day * 1000);
  date.setDate(date.getDate() - 1);
  return Math.floor(date.getTime() / 1000);
};

// Month Component
const Month = ({ month, year,onClickHandlar, selectedDate, today, index }) => {



  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const days = [];
  let firstDayOfMonth = new Date(year, month, 1).getDay();
  let lastDateOfMonth = new Date(year, month + 1, 0).getDate();

const lastDateofPreviousMonth = new Date(year, month, 0).getDate()
const firstDateOfNextMonth = new Date(year, month + 1, 1)


const monthDateArray = []


const previousMonthDateArray = []

  // Add empty slots for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    const d =  lastDateofPreviousMonth - (firstDayOfMonth-1) + i 
    const m = month === 0 ? 11 : month-1
    const y = month === 0 ? (year-1) : year
    const date  = new Date(y, m, d)
    previousMonthDateArray.push(date)

    // console.log(d)
    // console.log(m)
    // console.log(y)
    // if(index === 0){
    //     days.push(<div className="p-2 text-center text-base font-normal text-neutral-200" key={`empty-${i}`}> 
    //         {lastDateofPreviousMonth - (firstDayOfMonth-1) + i }
    //     </div>);
    // }else{
    //     days.push(<div className="text-base font-normal text-neutral-200" key={`empty-${i}`}/>);
    // }
    
  }

  const currentMonthDateArray = []
  // Add actual days of the current month   
  for (let i = 1; i <= lastDateOfMonth; i++) {
    const date = new Date(year, month, i)
    currentMonthDateArray.push(date)
    // days.push(
    //   <div className="selected-date p-2 text-center text-base font-medium text-[#33333]"
    //     key={`day-${i}`}
    //     onClick={() => SelectDate(new Date(year, month, i))}>
    //     {i}
    //   </div>
    // );
  }

  const nextMonthDateArray = []

  // Add empty slots for days after the last day of the month
  let lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay();
  for (let i = 1; i < 7 - lastDayOfMonth; i++) {
    const m = month === 11 ? 0 : month + 1
    const y = month === 11 ? (year+1) : year
    const date = new Date(y, m, i)

    nextMonthDateArray.push(date)
    // if(index===1){
    //     days.push(  <div className=" p-2 text-center text-base font-normal text-neutral-200" key={`extra-${i}`}>
    //                     {i}
    //                 </div>);
    // }else{
    //     days.push(<div className="text-base font-normal text-neutral-200" key={`extra-${i}`}/>);
    // }
  }


  return (
    <div className="w-full ">
        <div className="text-center text-base font-medium text-neutral-400 ">
            {`${months[month]} ${year}`}
        </div>
      <div className="grid grid-cols-7 mt-4">
        {daysOfWeek.map((day, idx) => (
            <div key={`dayOfWeek-${idx}`} className="p-2 text-center text-secondary-400 text-base font-medium">
                {day}
            </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {
            previousMonthDateArray.map((date, idx)=>
                index === 1 
                    ?   <div className="text-base font-normal text-neutral-200" key={`empty-${idx}`}/>
                    :   <div className="p-2 text-center text-base font-normal text-neutral-200" key={`empty-${idx}`}> 
                    {date.getDate()}
                </div>
            )
        }{
            currentMonthDateArray.map((date, idx)=>{
                const isSelected  = (selectedDate.length === 1) 
                                        ? selectedDate[0] === date?.getTime()
                                        : (selectedDate.length === 2)
                                            ? (selectedDate[0] <= date?.getTime()) && (date?.getTime() <= selectedDate[1])
                                            : false
                    

                return (<div onClick={()=>onClickHandlar(date)} className={`${isSelected && 'selected-date' } calender-day p-2 text-center text-base font-medium text-[#33333]`}
                    key={`day-${idx}`}>
                    {date.getDate()}
                  </div>)
            })
        }{
            nextMonthDateArray.map((date, idx)=>
                index === 0 
                    ? <div className="text-base font-normal text-neutral-200" key={`extra-${idx}`}/>
                    : <div className=" p-2 text-center text-base font-normal text-neutral-200" key={`extra-${idx}`}>
                    {date.getDate()}
                </div>
            )
        }
        {/* {days} */}
      </div>
    </div>
  );
};

// Calendar Component
const Calendar = ({selectedDate, onClickHandlar, today, handleClearSelction}) => {

  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth();
//   const today = date.getDate();

console.log(selectedDate)

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
    <div  className="absolute top-full md:left-1/2 w-max md:w-[600px] md:-translate-x-1/2 bg-white p-4 rounded-lg shadow-md drop-shadow-md">
        <h4 className="text-2xl font-semibold text-center text-neutral-600"> Select Date</h4>
        {/* Need to fix leter  */}
      {/* <div>
        <div onClick={() => handleMonthChange(-1)}>{"<"}</div>
        <span>{`${currentMonth + 1}/${currentYear}`}</span>
        <div onClick={() => handleMonthChange(1)}>{">"}</div>
      </div> */}
      <div className="md:flex md:gap-4 mt-6">
        <Month
          month={currentMonth}
          year={currentYear}
          selectedDate={selectedDate}
          onClickHandlar={onClickHandlar}
          today={today}
        //   SelectDate={SelectDate}
          index={0}
        />
        <Month
          month={nextMonth}
          year={nextYear}
          selectedDate={selectedDate}
          onClickHandlar={onClickHandlar}
          today={today}
        //   SelectDate={SelectDate}
          index={1}
        />
      </div>
      <div className="mt-4 item-right">
      <button className="float-right rounded-full px-4 py-2 border border-neutral-100" onClick={handleClearSelction}>Clear</button>
      </div>
     
    </div>
  );
};

export default Calendar;