import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import todoApi from "./todoApi";

const store = configureStore({
  reducer: combineReducers({
    [todoApi.reducerPath]: todoApi.reducer,
  }),
  middleware: (getDefaultMiddleWare) => [
    ...getDefaultMiddleWare(),
    todoApi.middleware,
  ],
});

//refetchOnFocus, refetchOnReconnect
setupListeners(store.dispatch);

export default store;
