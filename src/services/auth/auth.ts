import axios from '@Service/axios';

import { IGetAuthRequestParams, IGetAuthResponse } from './types';

export const postAuth = (params: IGetAuthRequestParams): Promise<IGetAuthResponse> => axios.post('/auth', params);
