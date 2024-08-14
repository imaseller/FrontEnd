import axios from 'axios';
import Cookies from 'js-cookie';

export const Axios = axios.create({
  baseURL: 'https://stylewh.com',
  withCredentials: true,
});

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (window.location.pathname === '/auth/login') {
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
