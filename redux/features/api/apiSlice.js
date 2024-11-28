import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://backend.bedbd.com/api'
        // baseUrl: 'http://localhost:5001/api'

    }),

    tagTypes:[],
    endpoints:(builder) => ({
        getListing: builder.query({
            query: (id)=> `/get-single-list/${id}`
        }),
        getListings: builder.query({
            query: ()=> '/all-list'
        }), 
        getMapListings: builder.query({
            query: ({latitude, longitude, distance })=> `/sort-by-location?latitude=${latitude}&longitude=${longitude}&maxDistance=${distance}`
        }),
    })
});

export const { 
        useGetListingsQuery, 
        useGetListingQuery, 
        useGetMapListingsQuery 
    } = apiSlice;