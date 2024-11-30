import { useSelector } from "react-redux";

export default function Month({ month, year, calenderType, onClickHandlar, today, index }) {
  const { selectedDate } = useSelector((state) => state.search);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  const lastDateofPreviousMonth = new Date(year, month, 0).getDate();
  const previousMonthDateArray = [];
  const currentMonthDateArray = [];
  const nextMonthDateArray = [];

  let firstDayOfMonth = new Date(year, month, 1).getDay();
  let lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  // Add days from the previous month
  for (let i = 0; i < firstDayOfMonth; i++) {
    const d = lastDateofPreviousMonth - firstDayOfMonth + 1 + i;
    const m = month === 0 ? 11 : month - 1;
    const y = month === 0 ? year - 1 : year;
    previousMonthDateArray.push(new Date(y, m, d));
  }

  // Add current month days
  for (let i = 1; i <= lastDateOfMonth; i++) {
    currentMonthDateArray.push(new Date(year, month, i));
  }

  // Add days from the next month
  let lastDayOfMonth = new Date(year, month, lastDateOfMonth).getDay();
  for (let i = 1; i < 7 - lastDayOfMonth; i++) {
    const m = month === 11 ? 0 : month + 1;
    const y = month === 11 ? year + 1 : year;
    nextMonthDateArray.push(new Date(y, m, i));
  }

  return (
    <div className="w-full">
      <div className="text-center text-base font-medium text-neutral-400">
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
        {previousMonthDateArray.map((date, idx) =>
          index === 1 ? (
            <div className="text-base font-normal text-neutral-200" key={`prev-${idx}`} />
          ) : (
            <div className="p-2 text-center text-base font-normal text-neutral-200" key={`prev-${idx}`}>
              {/* Previous month dates */}
            </div>
          )
        )}
        {currentMonthDateArray.map((date, idx) => {
          const isSelected =
            (selectedDate[0] > 0 && selectedDate[1] > 0 && selectedDate[0] <= date.getTime() && selectedDate[1] >= date.getTime()) ||
            (selectedDate[0] > 0 && selectedDate[1] === 0 && selectedDate[0] === date.getTime()) ||
            (selectedDate[0] === 0 && selectedDate[1] > 0 && selectedDate[1] === date.getTime());

          const isDisabled = date.getTime() < today.getTime();

          return (
            <div
              key={`current-${idx}`}
              onClick={!isDisabled ? () => onClickHandlar(date, calenderType) : undefined}
              className={`p-2 text-center text-base font-medium ${
                isDisabled
                  ? 'text-neutral-200 cursor-not-allowed'
                  : isSelected
                  ? 'selected-date'
                  : 'text-[#33333] cursor-pointer'
              }`}
            >
              {date.getDate()}
            </div>
          );
        })}
        {nextMonthDateArray.map((date, idx) =>
          index === 0 ? (
            <div className="text-base font-normal text-neutral-200" key={`next-${idx}`} />
          ) : (
            <div className="p-2 text-center text-base font-normal text-neutral-200" key={`next-${idx}`}>
              {/* Next month dates */}
            </div>
          )
        )}
      </div>
    </div>
  );
}