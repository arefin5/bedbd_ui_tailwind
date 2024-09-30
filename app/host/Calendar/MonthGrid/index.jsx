import { getPrevMonthDays, getMonthDays, getNextMonthDays, daysOfWeek } from './lib'

export default function MonthGrid({ month, year }) {
   // Calculate days from previous, current, and next months
   const prevMonthDays = getPrevMonthDays(year, month);
   const monthDays = getMonthDays(year, month);
   const nextMonthDays = getNextMonthDays(year, month);



   return (
       <ul className='grid grid-cols-7 mt-6'>
           {/* Days of the week headers */}
           {daysOfWeek.map((day, index) => (
               <li key={index} className='font-semibold text-center'>{day[0]}</li>
           ))}

           {/* Days from the previous month */}
           {prevMonthDays.map((day, index) => (
               <li key={`prev-${index}`} className='text-gray-200 text-center'>{day.getDate()}</li>
           ))}

           {/* Days of the current month */}
           {monthDays.map((day, index) => (
               <li key={`current-${index}`} className='text-center'>{day.getDate()}</li>
           ))}

           {/* Days from the next month */}
           {nextMonthDays.map((day, index) => (
               <li key={`next-${index}`} className='text-gray-200 text-center'>{day.getDate()}</li>
           ))}
       </ul>
   );
}
