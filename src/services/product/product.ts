import axios from '@Service/axios';

import { IGetProductResponse, IPostProductRequestParams, IPostProductResponse } from './types';

export const getProduct = (): Promise<IGetProductResponse> => axios.get('/shop/product');

export const postProduct = (params: IPostProductRequestParams): Promise<IPostProductResponse> =>
  axios.post('/product', params);
