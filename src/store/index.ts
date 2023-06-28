import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['quizzReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
