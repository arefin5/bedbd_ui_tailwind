import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5050/api'
    }),
    tagTypes:[],
    endpoints:(builder) => ({
        getListings: builder.query({
            query: ()=> '/all-list'
        })
    })
});

export const { useGetListingsQuery } = apiSlice;