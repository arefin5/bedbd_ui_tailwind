export default function formatTimestampPretty(timestamp) {
    if (typeof timestamp !== 'number' || isNaN(timestamp)) {
        throw new Error("Invalid timestamp provided.");
      }
    
      const date = new Date(timestamp);
    
      if (isNaN(date)) {
        throw new Error("Invalid Date derived from timestamp.");
      }
    
      const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
    
      const day = date.getDate();
      const month = months[date.getMonth()]; // Months are 0-indexed
      const year = date.getFullYear();
    
      return `${day} ${month} ${year}`;
  }