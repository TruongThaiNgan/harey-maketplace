import { ProductItem } from '@Hoc/interfaces';
import { RootState } from '@Store/store';

import { IGetPageThunkParams, ProductInHome, Status, TypePage } from './interfaces';
import { getEntities } from './pageSlice';
import { PaymentMethodKey } from './userSlice';

// user slice
export const getAuth = (state: RootState): boolean => state?.user?.auth || false;

export const getListPaymentIDFromStore = (state: RootState): PaymentMethodKey[] => state.user.listCardPaymentID;

// page slice
export const getPageProductStatus = (state: RootState): Status => state.page.status;

export const getNumberProduct =
  (type: TypePage): ((state: RootState) => number) =>
  (state: RootState): number =>
    state.page[type].length;

export const getPageData =
  ({ page, limit, type }: Omit<IGetPageThunkParams, 'getAPI'>): ((state: RootState) => ProductItem[]) =>
  (state: RootState): ProductItem[] =>
    getEntities(state.page, state.page[type], { page, limit });

export const getProductInHome = (state: RootState): ProductInHome => {
  const listProduct = state.page.productInHome;
  const entries = Object.entries(listProduct);
  let list = {} as ProductInHome;
  entries.forEach(([key, value]) => {
    list = { ...list, [key]: value.map((id) => state.page.entities[id]) };
  });
  return list;
};

export const getInfoPageByName =
  (name: string): ((state: RootState) => ProductItem) =>
  (state: RootState): ProductItem => {
    const id = state.page.mapNameToId[name];
    return state.page.entities[id];
  };
export const getIdByName =
  (name: string): ((state: RootState) => number) =>
  (state: RootState) =>
    state.page.mapNameToId[name];

export const getTrendingList = (state: RootState): ProductItem[] =>
  state.page.productInHome.trendingList?.map((id) => state.page.entities[id]);
