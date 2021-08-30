import axios from '@Service/axios';

import { IGetVendorRequestParams, IGetVendorResponse } from './types';

export const getVendor = (): Promise<IGetVendorResponse> => axios.get('/vendor');

export const postVendor = (params: IGetVendorRequestParams): Promise<IGetVendorResponse> =>
  axios.post('/vendor', params);
