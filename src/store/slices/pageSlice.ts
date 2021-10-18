import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ProductItem } from '@Component/PageLoad/interfaces';
import {
  getListProduct,
  getPageHome,
  getProductByName,
  getTrending,
  HomePage,
  IGetPageRequestParams,
  OneProduct,
  Page,
} from '@Service/product';
import { RootState } from '@Store/store';
import { convertName, convertSort } from '@Util/convert';

import { Entities, IError, IGetPageThunkParams, PageState, ProductInHomePage, TypePage } from './interfaces';

const initialState: PageState = {
  status: 'idle',
  error: '',
  product: [],
  accessories: [],
  computers: [],
  camerasPhotos: [],
  mobilesTablets: [],
  tvAudio: [],
  consoleGame: [],
  gadgets: [],
  toolsStorage: [],
  watches: [],
  entities: {} as Entities,
  productInHome: {} as ProductInHomePage,
  mapNameToId: {},
};

const checkDataExist = (data: number[], { page, limit }: IGetPageRequestParams): boolean => {
  const start = (page - 1) * limit;
  const listData = data.slice(start, start + limit);
  if (listData.length === 0) return false;
  return data.slice(start, start + limit).every((value) => value !== 0);
};

export const getEntities = (
  data: PageState,
  target: number[],
  { page, limit }: IGetPageRequestParams,
): ProductItem[] => {
  const start = (page - 1) * limit;
  const listProduct = target.slice(start, start + limit);
  const hasExist = listProduct.every((value) => value !== 0);

  if (!hasExist) return [];
  return listProduct.map((id) => data.entities[id]);
};

export const fetchPage = createAsyncThunk<Page, IGetPageThunkParams, { state: RootState }>(
  '/product/fetchPage',
  async ({ page, limit, sort, type, getAPI }, thunkAPI) => {
    try {
      const data = thunkAPI.getState().page;
      const hasExist = checkDataExist(data[type], { page, limit });
      if (hasExist && sort === 'toolBar.default')
        return {
          message: 'ok',
          numberProduct: data[type].length,
          productList: getEntities(data, data[type], { page, limit }),
        };
      const res = await getAPI({ page, limit, sort: convertSort(sort) });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data.message });
    }
  },
);
export const fetchProductList = createAsyncThunk<Page, number[], { state: RootState }>(
  '/product/fetchListProduct',
  async (list, thunkAPI) => {
    try {
      const { cart, page } = thunkAPI.getState();
      const listCart = Object.entries(cart.cart);
      const hasExist = listCart.every(([id]) => !!page.entities[+id]);
      if (hasExist)
        return {
          message: 'ok',
          numberProduct: listCart.length,
          productList: listCart.map(([id]) => page.entities[+id]),
        };
      const res = await getListProduct(list);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data.message });
    }
  },
);
export const fetchOneProduct = createAsyncThunk<OneProduct, string, { state: RootState }>(
  '/product/fetchOneProduct',
  async (name, thunkAPI) => {
    try {
      const res = await getProductByName(name);
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
export const fetchTrendingList = createAsyncThunk<Page, TypePage, { state: RootState }>(
  '/product/fetchTrending',
  async (type, thunkAPI) => {
    try {
      const getAPI = getTrending(type);
      const res = await getAPI();
      return res.data;
    } catch (error: unknown) {
      const err = error as IError;
      return thunkAPI.rejectWithValue({ error: err?.response.data.message });
    }
  },
);

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
      .addCase(fetchPage.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchPage.fulfilled, (state, action) => {
        const newState = { ...state };
        const { productList } = action.payload;
        if (!productList)
          return {
            ...state,
            status: 'error',
          };
        const { page, limit, type } = action.meta.arg;
        const start = (page - 1) * limit;
        const newId = productList.map(({ id }) => id);

        if (state[type].length === 0) {
          const { numberProduct } = action.payload;
          newState[type] = Array.from({ length: +numberProduct }, () => 0);
        }

        newState[type] = [...newState[type].slice(0, start), ...newId, ...newState[type].slice(start + limit)];
        productList.forEach((value) => {
          newState.entities = { ...newState.entities, [value.id]: value };
          newState.mapNameToId = { ...newState.mapNameToId, [convertName(value.title)]: value.id };
        });

        return { ...newState, status: 'succeeded' };
      })
      .addCase(fetchPage.rejected, (state, action) => {
        return {
          ...state,
          status: 'error',
          error: action.error.message ?? '',
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
        const { productList, bestSellerList, hotDealList, lastChanceList, trendingList, latestList } = action.payload;
        productList.forEach((value) => {
          newState.entities = { ...newState.entities, [value.id]: value };
          newState.mapNameToId = { ...newState.mapNameToId, [convertName(value.title)]: value.id };
        });

        return {
          ...newState,
          status: 'succeeded',
          productInHome: { bestSellerList, hotDealList, lastChanceList, trendingList, latestList },
        };
      })
      .addCase(fetchHomePage.rejected, (state, action) => {
        return {
          ...state,
          status: 'error',
          error: action.error.message ?? '',
        };
      })
      .addCase(fetchProductList.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        const newState = { ...state };
        const { productList } = action.payload;
        productList.forEach((value) => {
          newState.entities = { ...newState.entities, [value.id]: value };
          newState.mapNameToId = { ...newState.mapNameToId, [convertName(value.title)]: value.id };
        });
        return {
          ...newState,
          status: 'succeeded',
        };
      })
      .addCase(fetchProductList.rejected, (state, action) => {
        return {
          ...state,
          status: 'error',
          error: action.error.message ?? '',
        };
      })
      .addCase(fetchTrendingList.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchTrendingList.fulfilled, (state, action) => {
        const newState = { ...state };
        const { productList } = action.payload;
        productList.forEach((value) => {
          newState.entities = { ...newState.entities, [value.id]: value };
          newState.mapNameToId = { ...newState.mapNameToId, [convertName(value.title)]: value.id };
        });
        newState.productInHome = {
          ...newState.productInHome,
          trendingList: productList.map(({ id }) => +id),
        };
        return {
          ...newState,
          status: 'succeeded',
        };
      })
      .addCase(fetchTrendingList.rejected, (state, action) => {
        return {
          ...state,
          status: 'error',
          error: action.error.message ?? '',
        };
      })
      .addCase(fetchOneProduct.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchOneProduct.fulfilled, (state, action) => {
        const newState = { ...state };
        const { infoProduct } = action.payload;
        newState.entities = { ...newState.entities, [infoProduct.id]: infoProduct };
        newState.mapNameToId = { ...newState.mapNameToId, [convertName(infoProduct.title)]: infoProduct.id };
        return {
          ...newState,
          status: 'succeeded',
        };
      })
      .addCase(fetchOneProduct.rejected, (state, action) => {
        return {
          ...state,
          status: 'error',
          error: action.error.message ?? '',
        };
      });
  },
});

export const { resetPageState } = pageSlice.actions;

export default pageSlice.reducer;
