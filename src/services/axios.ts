import axios from 'axios';

import { getAccessToken } from '@Util/localStorageService';

axios.interceptors.request.use(
  (request) => {
    const token = getAccessToken();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    request.params = request.params || {};
    request.params.lang = 'vi';
    return request;
  },
  (error) => {
    Promise.reject(error);
  },
);

axios.defaults.baseURL = process.env.REACT_APP_BACKEND!;

export default axios;
