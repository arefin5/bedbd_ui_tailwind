
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../services/axiosInstance';

// Initial state
const initialState = {
  id: null,        // Store ID from the backend
  formData: {},    // Dynamic form data
  isLoading: false,
  lists: [],
  error: null,
};

// Async action to submit form data (create/update logic)
export const optionalSubmit = (data, id) => async (dispatch) => {
  try {
    if (!id) {
      // Send request to create a new record and receive an ID
      const response = await axiosInstance.post('/api/form-data', data);
      dispatch(setId(response.data.id)); // Store new ID in Redux state
    } else {
      // Send an update request with the existing ID
      await axiosInstance.put(`/api/form-data/${id}`, data);
    }
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};

// // Async thunk to submit the list
// export const submitList = createAsyncThunk(
//   "form/submitList", 
//   async (_, { getState }) => {
//     const { formData } = getState().form; // Get form data from the Redux state
//     const response = await axiosInstance.post('/create-list', formData);
//     return response.data;
//   }
// );
// Async thunk to submit the list
// export const submitList = createAsyncThunk(
//   "form/submitList", 
//   async (formData, { getState }) => {
//     console.log("formData",formData)
//     // const { formData } = getState().form; // Get form data from the Redux state
//     const response = await axiosInstance.post('/create-list', formData);
//     // formData={}
//     return response.data;
//   }
// );
export const submitList = createAsyncThunk(
  "form/submitList", 
  async (listData, { rejectWithValue }) => {
    console.log("submite ",listData)
    try {
      const payload = Object.fromEntries(
        Object.entries(listData).filter(([_, value]) => value !== undefined && value !== null)
      );
      // Make the API call with the dynamic payload
      const response = await axiosInstance.post('/create-list', payload);
      return response.data;

    } catch (error) {
      console.log(error.response?.data?.message);

      if (error.response && error.response.data && error.response.data.error) {
        return rejectWithValue(error.response.data.message || error.response.data.error); // Return actual error message
      }

      if (error.response?.data?.message) {
        // Specific error handling like "email already exists"
        return rejectWithValue(error.response.data.message);
      }

      // Fallback for other unexpected errors
      return rejectWithValue('An unexpected error occurred.');
    }
  }
);

// Redux slice
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    updateFormData(state, action) {
      console.log("redux", action.payload);
      console.log("from redux form data ", state.formData);
      // Merge new dynamic form properties into existing formData
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    clearFormData(state) {
      state.id = null;
      state.formData = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.lists = action.payload;
      })
      .addCase(submitList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export const { setId, updateFormData, clearFormData } = formSlice.actions;

export default formSlice.reducer;
