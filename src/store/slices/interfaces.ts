import { ProductItem } from '@Hoc/interfaces';
import { HomePage, IGetPageRequestParams, IGetPageProductResponse } from '@Service/product';

export type Status = 'idle' | 'loading' | 'succeeded' | 'error';
export interface Entities {
  [key: number]: ProductItem;
}
export interface ICartItem extends ProductItem {
  amount: number;
}

export type ProductInHomePage = Omit<HomePage, 'message' | 'status' | 'productList'>;
export type ProductInHome = {
  trendingList: ProductItem[];
  lastChanceList: ProductItem[];
  bestSellerList: ProductItem[];
  hotDealList: ProductItem[];
  latestList: ProductItem[];
};
export type Cart = {
  [id: string]: number;
};

export type MapName = {
  [name: string]: number;
};
export type CartPage = {
  cart: Cart;
};
export interface PageState {
  status: Status;
  error: string;
  product: number[];
  accessories: number[];
  computers: number[];
  camerasPhotos: number[];
  mobilesTablets: number[];
  tvAudio: number[];
  consoleGame: number[];
  gadgets: number[];
  toolsStorage: number[];
  watches: number[];
  productInHome: ProductInHomePage;
  entities: Entities;
  mapNameToId: MapName;
}

export type TypePage =
  | 'product'
  | 'accessories'
  | 'computers'
  | 'camerasPhotos'
  | 'mobilesTablets'
  | 'tvAudio'
  | 'consoleGame'
  | 'gadgets'
  | 'toolsStorage'
  | 'watches';
export interface IGetPageThunkParams extends IGetPageRequestParams {
  type: TypePage;
  getAPI: (params: IGetPageRequestParams) => Promise<IGetPageProductResponse>;
}

export type IError = {
  response: {
    data: {
      message: string;
    };
  };
};

export type ErrStripe = {
  message: string;
};
