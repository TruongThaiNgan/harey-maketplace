import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ProductItem } from '@Hoc/interfaces';
import {
  getPageAccessories,
  getPageHome,
  getPageProduct,
  HomePage,
  IGetPageProductRequestParams,
  Page,
} from '@Service/product';
import { RootState } from '@Store/store';

type Status = 'idle' | 'loading' | 'successed' | 'error';
interface Entities {
  [key: number]: ProductItem;
}

type ProductInHomePage = Omit<HomePage, 'message' | 'status' | 'productList'>;
type ProductInHome = {
  trendingList: ProductItem[];
  lastChanceList: ProductItem[];
  bestSellerList: ProductItem[];
  hotDealList: ProductItem[];
};
interface PageState {
  status: Status;
  error: string;
  id: number[];
  accessories: number[];
  productInHome: ProductInHomePage;
  entities: Entities;
}

const initialState: PageState = {
  status: 'idle',
  error: '',
  id: [],
  accessories: [],
  entities: {} as Entities,
  productInHome: {} as ProductInHomePage,
};

const checkDataExist = (data: number[], { page, limit }: IGetPageProductRequestParams): boolean => {
  const start = (page - 1) * limit;
  const listData = data.slice(start, start + limit);
  if (listData.length === 0) return false;
  return data.slice(start, start + limit).every((value) => value !== 0);
};

const getEntities = (
  data: PageState,
  target: number[],
  { page, limit }: IGetPageProductRequestParams,
): ProductItem[] => {
  const start = (page - 1) * limit;
  const listProduct = target.slice(start, start + limit);
  const hasExist = listProduct.every((value) => value !== 0);

  if (!hasExist) return [];
  return listProduct.map((id) => data.entities[id]);
};

export const fetchPageProduct = createAsyncThunk<Page, IGetPageProductRequestParams, { state: RootState }>(
  '/product/fetchPageProduct',
  async (params, thunkAPI) => {
    try {
      const data = thunkAPI.getState().page;
      const hasExist = checkDataExist(data.id, params);

      if (hasExist)
        return {
          message: 'ok',
          numberProduct: data.id.length,
          productList: getEntities(data, data.id, params),
        };
      const res = await getPageProduct(params);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data.message });
    }
  },
);

export const fetchPageAccessories = createAsyncThunk<Page, IGetPageProductRequestParams, { state: RootState }>(
  '/product/fetchPageAccessories',
  async (params, thunkAPI) => {
    try {
      const data = thunkAPI.getState().page;
      const hasExist = checkDataExist(data.accessories, params);

      if (hasExist)
        return {
          message: 'ok',
          numberProduct: data.accessories.length,
          productList: getEntities(data, data.accessories, params),
        };
      const res = await getPageAccessories(params);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data.message });
    }
  },
);
export const fetchHomePage = createAsyncThunk<HomePage>('/product/fetchHomePage', async (_, thunkAPI) => {
  try {
    const res = await getPageHome();
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.response.data.message });
  }
});

export const pageSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetPageState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageProduct.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchPageProduct.fulfilled, (state, action) => {
        const newState = { ...state };
        const { productList } = action.payload;
        const { page, limit } = action.meta.arg;
        const start = (page - 1) * limit;
        const newId = productList.map(({ id }) => id);

        if (state.id.length === 0) {
          const { numberProduct } = action.payload;
          newState.id = Array.from({ length: +numberProduct }, () => 0);
        }

        newState.id = [...newState.id.slice(0, start), ...newId, ...newState.id.slice(start + limit)];
        productList.forEach((value) => {
          newState.entities = { ...newState.entities, [value.id]: value };
        });

        return { ...newState, status: 'successed' };
      })
      .addCase(fetchPageProduct.rejected, (state, action) => {
        return {
          ...state,
          status: 'error',
          error: action.error.message || '',
        };
      })
      .addCase(fetchPageAccessories.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchPageAccessories.fulfilled, (state, action) => {
        const newState = { ...state };
        const { productList } = action.payload;
        const { page, limit } = action.meta.arg;
        const start = (page - 1) * limit;
        const newId = productList.map(({ id }) => id);

        if (state.accessories.length === 0) {
          const { numberProduct } = action.payload;
          newState.accessories = Array.from({ length: +numberProduct }, () => 0);
        }

        newState.accessories = [
          ...newState.accessories.slice(0, start),
          ...newId,
          ...newState.accessories.slice(start + limit),
        ];
        productList.forEach((value) => {
          newState.entities = { ...newState.entities, [value.id]: value };
        });

        return { ...newState, status: 'successed' };
      })
      .addCase(fetchPageAccessories.rejected, (state, action) => {
        return {
          ...state,
          status: 'error',
          error: action.error.message || '',
        };
      })
      .addCase(fetchHomePage.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchHomePage.fulfilled, (state, action) => {
        const newState = { ...state };
        const { productList, bestSellerList, hotDealList, lastChanceList, trendingList } = action.payload;
        productList.forEach((value) => {
          newState.entities = { ...newState.entities, [value.id]: value };
        });

        return {
          ...newState,
          status: 'successed',
          productInHome: { bestSellerList, hotDealList, lastChanceList, trendingList },
        };
      })
      .addCase(fetchHomePage.rejected, (state, action) => {
        return {
          ...state,
          status: 'error',
          error: action.error.message || '',
        };
      });
  },
});

export const { resetPageState } = pageSlice.actions;
export const getPageProductStatus = (state: RootState): Status => state.page.status;
export const getNumberProduct = (state: RootState): number => state.page.id.length;
export const getNumberAccessories = (state: RootState): number => state.page.accessories.length;
export const getPageProductData =
  ({ page, limit }: IGetPageProductRequestParams): ((state: RootState) => ProductItem[]) =>
  (state: RootState): ProductItem[] =>
    getEntities(state.page, state.page.id, { page, limit });
export const getPageAccessoriesData =
  ({ page, limit }: IGetPageProductRequestParams): ((state: RootState) => ProductItem[]) =>
  (state: RootState): ProductItem[] =>
    getEntities(state.page, state.page.accessories, { page, limit });
export const getProductInHome = (state: RootState): ProductInHome => {
  const listProduct = state.page.productInHome;
  const entries = Object.entries(listProduct);
  let list = {} as ProductInHome;
  entries.forEach(([key, value]) => {
    list = { ...list, [key]: value.map((id) => state.page.entities[id]) };
  });
  return list;
};
export default pageSlice.reducer;
