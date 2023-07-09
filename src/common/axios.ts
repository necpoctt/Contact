import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/api';

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'text/plain',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default axiosInstance;
