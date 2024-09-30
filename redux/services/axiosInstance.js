import axios from 'axios';

// Create a custom axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5050/api', // Your API base URL
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to include token
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from localStorage (or wherever you're storing it)
    const token = localStorage.getItem('token'); 
    // const token=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNiNmZmMzZmY2YyMzQ1NDJiZWRkNTgiLCJpYXQiOjE3Mjc2Mzc5OTQsImV4cCI6MTcyODI0Mjc5NH0.yxepmERk_aBaxBCZANqSzu8sxpIPDaj-LNURxGN3x2I`
    // If token exists, attach it to the Authorization header


    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Do something with the request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
