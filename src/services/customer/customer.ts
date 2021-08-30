import axios from '@Service/axios';

import { IGetCustomerRequestParams, IGetCustomerResponse } from './types';

export const getCustomer = (): Promise<IGetCustomerResponse> => axios.get('/customer');

export const postCustomer = (params: IGetCustomerRequestParams): Promise<IGetCustomerResponse> =>
  axios.post('/customer', params);
