import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authSliceReducer from "./features/auth/authSlice";
import listSlice from "./list/listSlice";
import searchSlice from "./features/search/searchSlice"
import form from "./list/createListSlice"
import editForm  from "./list/editListSlice"
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        search: searchSlice,
        listSlice,
        form,
        editForm
        // used rtk-query
        // listingSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddlewares) => 
        getDefaultMiddlewares()
            .concat(apiSlice.middleware)

})