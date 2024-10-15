import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authSliceReducer from "./features/auth/authSlice";
import listSlice from "./list/listSlice";
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        listSlice,

        // used rtk-query
        // listingSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddlewares) => 
        getDefaultMiddlewares()
            .concat(apiSlice.middleware)

})

// export const wrapper = createWrapper(makeStore, { debug: true });