import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer
  }
});

export default store;