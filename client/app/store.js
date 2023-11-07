import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import counterSliceReducer from "../features/counterSlice";
import authSliceReducer from "../features/authSlice";

import api from "../features/api";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    counter: counterSliceReducer,
    auth: authSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

setupListeners(store.dispatch)

export default store;
