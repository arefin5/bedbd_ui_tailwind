'use client'
import { useState } from 'react';
import MonthGrid from './MonthGrid'
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Calender() {

  const monthsOfYear = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());



  function handlePrevMonth() {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }
  function handleNextMonth() {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }

  return (
    <div className='py-6 px-4 w-full max-w-sm bg-secondary-50 rounded-lg'>
      <div className='text-neutral-500 flex justify-between'>
        <div className='font-semibold' >
          <span className='block'>
            Booked Date 
          </span>
          <span>(Nahar Manjil)</span>
        </div>
        
        <div className='border-none text-sm font-medium transition ease-in-out delay-150 flex items-center relative mr-4'>
          <button onClick={handlePrevMonth} className='icon opacity-10 hover:opacity-70 absolute -left-4'>
            <ChevronLeft />
          </button>
          <span className='w-32 text-center'>{monthsOfYear[month - 1]} {year}</span>
          <button onClick={handleNextMonth} className='icon opacity-10 hover:opacity-70 absolute -right-4'>
            <ChevronRight />
          </button>
        </div>
      </div>
      <MonthGrid month={month} year={year} />
    </div>
  );
}
