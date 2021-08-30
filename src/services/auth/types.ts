import { AxiosResponse } from 'axios';

export type IGetAuthRequestParams = {
  email: string;
  password: string;
};

export type IGetAuthResponse = AxiosResponse<{ message: string; status?: string; id: string; accessToken: string }>;
