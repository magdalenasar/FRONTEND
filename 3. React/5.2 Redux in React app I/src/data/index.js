import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import todoSlice from "./todo";
import colorSlice from "./color";

const store = configureStore({
  reducer: combineReducers({
    [counterSlice.name]: counterSlice.reducer,
    [todoSlice.name]: todoSlice.reducer,
    [colorSlice.name]: colorSlice.reducer,
  }),
});

export default store;
