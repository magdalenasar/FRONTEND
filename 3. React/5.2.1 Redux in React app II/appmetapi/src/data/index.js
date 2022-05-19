import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todoApi from "./todoApi";

const store = configureStore({
  reducer: combineReducers({
    [counterSlice.name]: counterSlice.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  }),
});

export default store;
