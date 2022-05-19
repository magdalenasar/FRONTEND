import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 123,
};

const counterSlice = createSlice({
  name: "counterState",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    set(state, { payload: nr }) {
      state.counter = nr;
    },
  },
});

export default counterSlice;
export const { increment, decrement, set } = counterSlice.actions;
