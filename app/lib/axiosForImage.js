import axios from 'axios';

const axiosForImage = axios.create({
  baseURL: 'https://backend.bedbd.com/api/',
  crossOrigin: 'anonymous', // Set this globally for all requests
});

export default axiosForImage;
