// Days of the week and months of the year
export const daysOfWeek = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
];

const monthMapping = {
    "january": 0,
    "february": 1,
    "march": 2,
    "april": 3,
    "may": 4,
    "june": 5,
    "july": 6,
    "august": 7,
    "september": 8,
    "october": 9,
    "november": 10,
    "december": 11
};

function getMonthIndex(month) {
    if (typeof month === 'string') {
      const lowerCaseMonth = month.toLowerCase();
      if (monthMapping.hasOwnProperty(lowerCaseMonth)) {
          return monthMapping[lowerCaseMonth];
      } else if (!isNaN(month)) {
          // If the string is numeric, convert to number and adjust for 0-based index
          const monthNumber = parseInt(month, 10);
          if (monthNumber >= 1 && monthNumber <= 12) {
              return monthNumber - 1;
          }
      }
  } else if (typeof month === 'number') {
      // Ensure the month number is between 1 and 12
      if (month >= 1 && month <= 12) {
          return month - 1; // Convert 1-based month to 0-based index
      }
  }
  throw new Error("Invalid month parameter");
}

export function getPrevMonthDays(year, month) {
    const monthIndex = getMonthIndex(month);
    const date = new Date(year, monthIndex, 0); // Last day of the previous month
    const prevMonthLastDate = date.getDate();
    const prevMonthLastDay = date.getDay();
    if((prevMonthLastDay + 1) < 7 )
     return Array.from({ length: prevMonthLastDay + 1 }, (_, idx) => new Date(date.getFullYear(), date.getMonth(), prevMonthLastDate - prevMonthLastDay + idx));
    else return []
}

export function getMonthDays(year, month) {
    const monthIndex = getMonthIndex(month);
    const date = new Date(year, monthIndex + 1, 0); // Last day of the current month
    const numberOfDays = date.getDate();
    return Array.from({ length: numberOfDays }, (_, idx) => new Date(date.getFullYear(), date.getMonth(), idx + 1));
}

export function getNextMonthDays(year, month) {
    const monthIndex = getMonthIndex(month);
    const date = new Date(year, monthIndex + 1, 1); // First day of the next month
    const nextMonthFirstDay = date.getDay();
    if (nextMonthFirstDay > 0) {
        return Array.from({ length: daysOfWeek.length - nextMonthFirstDay }, (_, idx) => new Date(date.getFullYear(), date.getMonth(), idx + 1));
    } else {
        return [];
    }
}
