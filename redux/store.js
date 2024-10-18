import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authSliceReducer from "./features/auth/authSlice";
import listSlice from "./list/listSlice";
import form from "./list/createListSlice"
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        listSlice,
        form,
        // used rtk-query
        // listingSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddlewares) => 
        getDefaultMiddlewares().concat(apiSlice.middleware)
})