export default function convertToString(value) {
    if (value === null || value === undefined) {
      return ''; 
    }
    if (typeof value === 'string') {
        return value.trim(); // Trim the string
      }
    return value.toString(); // Convert other types to string
  }