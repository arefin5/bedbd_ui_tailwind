import axiosInstance from "../services/axiosInstance.js";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    isLoading: false,
    error: null,
    lists: [] // Handles lists only
};
export const apiData = createAsyncThunk("apidata", async () => {
    const response = await axiosInstance.get('/all-list');
    return response.data;
  });
const Slice = createSlice({
    name: 'listSlice', // Renamed for clarity
    initialState,
    reducers: {}, // No reducers needed since we're only handling the async data fetching
    extraReducers: (builder) => {
        builder.addCase(apiData.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(apiData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.lists = action.payload;
        });
        builder.addCase(apiData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export default Slice.reducer;
