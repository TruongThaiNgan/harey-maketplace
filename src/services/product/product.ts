import axios from '@Service/axios';
import { TypePage } from '@Slice/interfaces';

import {
  IGetProductByNameResponse,
  IGetPageRequestParams,
  IGetPageProductResponse,
  IGetPageHomeResponse,
} from './types';

export const getPage =
  (type: TypePage): ((params: IGetPageRequestParams) => Promise<IGetPageProductResponse>) =>
  (params: IGetPageRequestParams): Promise<IGetPageProductResponse> =>
    axios.get(`/shop/${type}`, { params });

export const getPageHome = (): Promise<IGetPageHomeResponse> => axios.get('/shop/home-page');

export const getTrending = (type: TypePage) => (): Promise<IGetPageProductResponse> =>
  axios.get(`/shop/${type}`, {
    params: {
      page: 1,
      limit: 8,
    },
  });

export const getProductByName = (name: string): Promise<IGetProductByNameResponse> =>
  axios.get(`/shop/product/${name}`);
export const getListProduct = (list: number[]): Promise<IGetPageProductResponse> =>
  axios.get(`/shop/list-product`, {
    params: {
      list,
    },
  });
