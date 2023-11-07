import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // action = {payload: {amount: n}}
    incrementBy: (state, { payload }) => {
      state.value += payload.amount;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;

export default counterSlice.reducer;
