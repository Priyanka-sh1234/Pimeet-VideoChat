import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pi-meet-backend-1.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;