import axios from '@Service/axios';

import { IGetAuthFacebookRequestParams, IGetAuthFacebookResponse } from './types';

export const getAuthFacebook = (): Promise<IGetAuthFacebookResponse> => axios.get('/authFacebook');

export const postAuthFacebook = (params: IGetAuthFacebookRequestParams): Promise<IGetAuthFacebookResponse> =>
  axios.post('/auth/facebook', params);
