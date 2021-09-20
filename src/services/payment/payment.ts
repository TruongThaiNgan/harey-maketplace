import { BillForm } from '@Component/Checkout';
import axios from '@Service/axios';

import { ICreateSetupIntentResponse, IGeneralResponse, IGetInfoPaymentResponse, Invoice } from './types';

export const createSetupIntent = (): Promise<ICreateSetupIntentResponse> => axios.post('/payment/setup-intent');

export const createInvoice = (data: Invoice): Promise<IGeneralResponse> =>
  axios.post('/payment/invoice', {
    invoice: data,
  });

export const createInfoPayment = (data: BillForm): Promise<IGeneralResponse> => axios.post('/payment/info', data);

export const getInfoPayment = (): Promise<IGetInfoPaymentResponse> => axios.get('/payment/info');

export const createPaymentMethod = (data: { paymentID: string | undefined }): Promise<IGeneralResponse> =>
  axios.post('/payment/payment-method', data);
