import axios from '@Service/axios';

import { IGetCustomerRequestParams, IGetCustomerResponse, IGetListPaymentIDResponse } from './types';

export const getCustomer = (): Promise<IGetCustomerResponse> => axios.get('/customer');

export const postCustomer = (params: IGetCustomerRequestParams): Promise<IGetCustomerResponse> =>
  axios.post('/customer', params);

export const getListPaymentID = (): Promise<IGetListPaymentIDResponse> => axios.get('/payment/list-payment');
