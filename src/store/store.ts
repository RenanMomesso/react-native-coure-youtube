import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import quizzReducer from './reducers/quizzReducer';
import { quizzApi } from './quizzApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['quizzApi'],
};

const rootReducer = combineReducers({
  quizzReducer: quizzReducer,
  user: userReducer,
  [quizzApi.reducerPath]: quizzApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      quizzApi.middleware,
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
