// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Your Redux Reducers go here
// import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // reducer: persistedReducer,
  reducer: {}, // Add your reducers here
});

const persistor = persistStore(store);

export { store, persistor };
