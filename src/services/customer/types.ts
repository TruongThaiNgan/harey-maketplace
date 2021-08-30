import { AxiosResponse } from 'axios';

export type IGetCustomerRequestParams = { email: string; password: string };

export type IGetCustomerResponse = AxiosResponse<{ message: string; status?: string }>;
