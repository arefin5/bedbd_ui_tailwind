import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { setupListeners } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { REHYDRATE } from "redux-persist";
import { HYDRATE, MakeStore } from 'next-redux-wrapper'

// function isHydrateAction(action) {
//     return action.type === REHYDRATE;
//   }
  function isHydrateAction(action) {
    return action.type === HYDRATE;
  }
export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5050/api'
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (isHydrateAction(action)) {
          return action.payload[reducerPath];
        }
      },
      extractRehydrationInfo(action, { reducerPath }) {
        if (isHydrateAction(action)) {
          return action.payload[reducerPath];
        }
      },
    tagTypes:[],
    endpoints:(builder) => ({
        getListing: builder.query({
            query: (id)=> `/get-single-list/${id}`
        }),
        // getListing: builder.query({

        //     // query: (id)=> `/get-single-list/${id}`
        //     async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        //         console.log('from query')
        //         console.log(_arg)
        //         try {
        //           const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        //         //   console.log(response.data)
        //           return { data: response.data };
        //         } catch (error) {
        //           return { error: { status: error.response?.status, data: error.message } };
        //         }
        //       },
        // }),
        getListings: builder.query({
            query: ()=> '/all-list'
        })
    })
});

// configure listeners using the provided defaults
// setupListeners(store.dispatch)   

export const { useGetListingsQuery, useGetListingQuery,  } = apiSlice;