import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import todoSlice from "./todo";

const store = configureStore({
  reducer: counterReducers({
    [counterSlice.name]: counterSlice.reducer,
    [todoSlace.name]: todoSlice.reducer,
  }),
});

export default store;
