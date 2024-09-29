import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    accessToken: undefined,
    user: undefined,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        useLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken
            state.user = action.payload.user 
        },
        useLoggedOut: (state, action) => {
            state.accessToken = undefined
            state.user = undefined
        }
    }
})

export const { useLoggedIn, useLoggedOut } = authSlice.actions
export default authSlice.reducer