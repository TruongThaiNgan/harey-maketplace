import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getListPaymentID } from '@Service/customer';
import { ResponseFetchPaymentID } from '@Service/product';
import { RootState } from '@Store/store';

export type PaymentMethodKey = {
  paymentMethodID: string;
  last4: string;
};

interface UserState {
  auth: boolean;
  listCardPaymentID: PaymentMethodKey[];
  listCardPaymentDetail: unknown[];
}
const initialState: UserState = { auth: false, listCardPaymentDetail: [], listCardPaymentID: [] };

export const fetchListCardPaymentID = createAsyncThunk<ResponseFetchPaymentID, void, { state: RootState }>(
  '/list-payment',
  async (_, thunkAPI) => {
    try {
      const res = await getListPaymentID();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data.message });
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateAuth(state, action) {
      return {
        ...state,
        auth: action.payload.auth,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListCardPaymentID.pending, (state) => {
        return {
          ...state,
          status: 'loading',
        };
      })
      .addCase(fetchListCardPaymentID.fulfilled, (state, action) => {
        return {
          ...state,
          status: 'succeeded',
          listCardPaymentID: action.payload.listPaymentID,
        };
      })
      .addCase(fetchListCardPaymentID.rejected, (state, action) => {
        return {
          ...state,
          status: 'error',
          error: action.error.message ?? '',
        };
      });
  },
});

export const { updateAuth } = userSlice.actions;
export default userSlice.reducer;
