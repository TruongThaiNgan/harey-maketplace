import { AxiosResponse } from 'axios';

export type IGetAuthFacebookRequestParams = {
  userID: string;
  accessToken: string;
};

export type IGetAuthFacebookResponse = AxiosResponse<{
  message: string;
  status?: string;
  id: string;
  accessToken: string;
}>;
