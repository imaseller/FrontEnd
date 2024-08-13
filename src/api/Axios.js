import axios from 'axios';
import Cookies from 'js-cookie';

export const Axios = axios.create({
  baseURL: 'http://18.189.59.233:8080',
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
