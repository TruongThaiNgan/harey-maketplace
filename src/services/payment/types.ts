import { AxiosResponse } from 'axios';

import { BillForm } from '@Component/Checkout';

export type Invoice = {
  paymentMethodID: string;
  amount: number;
  description: string;
};
export type ICreateSetupIntentResponse = AxiosResponse<{
  message: string;
  status: number;
  clientSecret: string;
}>;
export type IGeneralResponse = AxiosResponse<{
  message: string;
  status: number;
}>;

export type IGetInfoPaymentResponse = AxiosResponse<{
  message: string;
  status: number;
  info?: BillForm;
}>;
