import axios from 'axios';
import Logout from './Logout'; // Adjust path as needed
const baseur="https://backend.bedbd.com/api" 
// const baseur="http://localhost:5001/api"
const axiosInstance = axios.create({
  baseURL: baseur,
  headers: {
    'Content-Type': 'application/json',
  },
});

const { handleLogout } = Logout();


axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("401 error detected.");
      handleLogout(); // Call the separate logout handler function
    } else {
      console.error("Axios Error:", error); // Log other errors
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
