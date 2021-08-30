import { AxiosResponse } from 'axios';

import { ProductItem } from '@Page/Shop';

export type IGetProductRequestParams = Record<string, never>;
export type IGetProductResponse = AxiosResponse<{ message: string; status?: string; productList: ProductItem[] }>;

export type IPostProductRequestParams = { temp: string };
export type IPostProductResponse = AxiosResponse<{ message: string; status?: string }>;
