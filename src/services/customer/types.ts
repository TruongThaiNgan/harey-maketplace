import { AxiosResponse } from 'axios';

import { PaymentMethodKey } from '@Slice/userSlice';

export type IGetCustomerRequestParams = { email: string; password: string };

export type IGetCustomerResponse = AxiosResponse<{ message: string; status?: string; accessToken: string }>;
export type IGetListPaymentIDResponse = AxiosResponse<{
  message: string;
  status?: string;
  listPaymentID: PaymentMethodKey[];
}>;
