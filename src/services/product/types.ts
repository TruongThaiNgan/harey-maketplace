import { AxiosResponse } from 'axios';

import { ProductItem } from '@Hoc/interfaces';

export type IGetPageProductRequestParams = {
  page: number;
  limit: number;
};

export type Page = {
  message: string;
  status?: string;
  productList: ProductItem[];
  numberProduct: number;
};

export type IGetPageProductResponse = AxiosResponse<Page>;
export type IGetProductByNameResponse = AxiosResponse<{
  message: string;
  status?: string;
  infoProduct: unknown;
}>;

export interface HomePage {
  message: string;
  status?: string;
  productList: ProductItem[];
  trendingList: number[];
  lastChanceList: number[];
  bestSellerList: number[];
  hotDealList: number[];
}

export type IGetPageHomeResponse = AxiosResponse<HomePage>;
interface IProductQuery {
  page: number;
  limit: number;
}
export type IProductQueryKey = [string, IProductQuery];

export type IPostProductRequestParams = { temp: string };
export type IPostProductResponse = AxiosResponse<{ message: string; status?: string }>;
