import axios, { AxiosError } from 'axios';

import { getAccessToken } from '@Util/localStorageService';
import store from '@Store/store';
import { updateAuth } from '@Slice/userSlice';

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

type ErrorRespone = {
  message: string;
  code: string;
};

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorRespone>) => {
    if (error.response?.status === 401 && error.response?.data.message === 'Invalid Token') {
      store.dispatch(updateAuth({ auth: false }));
    }
  },
);

axios.defaults.baseURL = process.env.REACT_APP_BACKEND!;

export default axios;
