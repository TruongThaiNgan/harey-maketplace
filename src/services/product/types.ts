import { AxiosResponse } from 'axios';

import { ProductItem } from '@Hoc/interfaces';
import { PaymentMethodKey } from '@Slice/userSlice';

export type IGetPageRequestParams = {
  page: number;
  limit: number;
};

export type Page = {
  message: string;
  status?: string;
  productList: ProductItem[];
  numberProduct: number;
};
export type OneProduct = {
  message: string;
  status?: string;
  infoProduct: ProductItem;
};

export type IGetPageProductResponse = AxiosResponse<Page>;
export type IGetProductByNameResponse = AxiosResponse<OneProduct>;

export interface HomePage {
  message: string;
  status?: string;
  productList: ProductItem[];
  trendingList: number[];
  lastChanceList: number[];
  bestSellerList: number[];
  hotDealList: number[];
  latestList: number[];
}

export type IGetPageHomeResponse = AxiosResponse<HomePage>;
interface IProductQuery {
  page: number;
  limit: number;
}
export type IProductQueryKey = [string, IProductQuery];

export type IPostProductRequestParams = { temp: string };
export type IPostProductResponse = AxiosResponse<{ message: string; status?: string }>;

export type ResponseFetchPaymentID = {
  message: string;
  status?: string;
  listPaymentID: PaymentMethodKey[];
};
