// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReducer from './usersSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, usersReducer);

const store = configureStore({
  reducer: {
    users: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
