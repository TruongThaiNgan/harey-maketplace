import { Action, AnyAction, CombinedState, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';
import { PersistPartial } from 'redux-persist/es/persistReducer';

import { LOG_OUT } from '@Constant/auth';
import pageReducer from '@Slice/pageSlice';
import userReducer from '@Slice/userSlice';

type RootReducer = CombinedState<{
  user: ReturnType<typeof userReducer> & PersistPartial;
  page: ReturnType<typeof pageReducer> & PersistPartial;
}>;
type State = RootReducer | undefined;
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
};
const productPersistConfig = {
  key: 'product',
  storage: storageSession,
  whiteList: ['page'],
};
const appReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  page: persistReducer(productPersistConfig, pageReducer),
});

const rootReducer = (state: State, action: AnyAction): RootReducer => {
  if (action.type === LOG_OUT) state = undefined;
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
    }),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
