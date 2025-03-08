import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./data/userSlice.js";
import { apiSlice } from "./api/apiSlice.js";

export const store = configureStore({
    reducer: {
        user: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
