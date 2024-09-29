
import { apiSlice } from "../api/apiSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
       register: builder.mutation({
        query: (data) => ({
            url: "/register",
            method:'POST',
            body: data,
        }), 
        async  onQueryStarted (arg, {queryFulfilled, dispatch}) {
            try {
                const result = await queryFulfilled;
                localStorage.setItem(
                                'auth', 
                                JSON.stringify({
                                        accessToken: result.data.accessToken,
                                        user: result.data.user
                                    }));
                dispatch(
                    userLoggedIn({
                        accessToken: result.data.accessToken,
                        user: result.data.user,
                    })
                );
            } catch (error) {
                
            }
        }

       }),

       login: builder.mutation({
        query: (data) => ({
            url: "/login",
            method:'POST',
            body: data,
        }),
        async  onQueryStarted (arg, {queryFulfilled, dispatch}) {
            try {
                const result = await queryFulfilled;
                localStorage.setItem(
                                'auth', 
                                JSON.stringify({
                                        accessToken: result.data.accessToken,
                                        user: result.data.user
                                    }))
            } catch (error) {
                
            }
        }
       })
    })
})

export const { useLoginMutation, useRegisterMutation  } =  authApi