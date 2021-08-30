import axios from '@Service/axios';

import {
  IGetProductByNameResponse,
  IGetPageProductRequestParams,
  IGetPageProductResponse,
  IGetPageHomeResponse,
} from './types';

export const getPageProduct = (params: IGetPageProductRequestParams): Promise<IGetPageProductResponse> =>
  axios.get('/shop/product', { params });
export const getPageAccessories = (params: IGetPageProductRequestParams): Promise<IGetPageProductResponse> =>
  axios.get('/shop/accessories', { params });

export const getPageHome = (): Promise<IGetPageHomeResponse> => axios.get('/shop/home-page');

export const getProductByName = (name: string): Promise<IGetProductByNameResponse> =>
  axios.get(`/shop/product/${name}`);
