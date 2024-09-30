'use client'
// Helper function to get days in a month
const getDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

// Helper function to check if a date is today
const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

// Helper function to check if a date is in the past
const isPastDate = (date) => {
  const today = new Date();
  return date < today.setHours(0, 0, 0, 0);
};

// Helper function to check if a date is within a range
const isWithinRange = (date, startDate, endDate) => {
  return startDate && endDate && date >= startDate && date <= endDate;
};

const Calendar = ({ date, title, startDate, endDate, onSelectDate }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const days = getDaysInMonth(year, month);

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            className={`p-2 text-center rounded cursor-pointer ${
              isToday(day) ? 'bg-blue-500 text-white' : 
              isWithinRange(day, startDate, endDate) ? 'bg-blue-200' : 
              isPastDate(day) ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-100'
            }`}
            onClick={() => !isPastDate(day) && onSelectDate(day)}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;