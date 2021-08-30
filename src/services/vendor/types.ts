import { AxiosResponse } from 'axios';

export type IGetVendorRequestParams = {
  email: string;
  firstName: string;
  lastName: string;
  shopName: string;
  shopUrl: string;
  phoneNumber: string;
  password: string;
};

export type IGetVendorResponse = AxiosResponse<{ message: string; status?: string }>;
