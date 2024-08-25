import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice.js";
import { chatSlice } from "features/chatSlice.js";

const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer, [chatSlice.reducerPath]: chatSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
