
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../services/axiosInstance';

const loadFromLocalStorage = () => {
  if (typeof window === 'undefined') return null;
  const storedState = localStorage.getItem('formState');
  return storedState ? JSON.parse(storedState) : null;
};

// Utility to update specific fields in localStorage
const updateLocalStorage = (key, value) => {
  if (typeof window !== 'undefined') {
    const storedState = localStorage.getItem('formState');
    const currentState = storedState ? JSON.parse(storedState) : {};
    const updatedState = { ...currentState, [key]: value };
    localStorage.setItem('formState', JSON.stringify(updatedState));
  }
};

// Initial state (load from localStorage if available)
const initialState = loadFromLocalStorage() || {
  id: 12,
  formData: {},
  isLoading: false,
  lists: [],
  error: null,
};

// Async action to submit form data (create/update logic)
export const optionalSubmit = (data, id) => async (dispatch) => {
  try {
    if (!id) {
      const response = await axiosInstance.post('/create', data);
      const newId = response.data.id;
      dispatch(updateFormData({ id: newId, formData: data }));
    } else {
      await axiosInstance.put(`/update/${id}`, data);
      dispatch(updateFormData({ id, formData: data }));
    }
  } catch (error) {
    console.error('Error submitting form data:', error);
  }
};

export const submitList = createAsyncThunk(
  'form/submitList',
  async (listData, { rejectWithValue }) => {
    try {
      const payload = Object.fromEntries(
        Object.entries(listData).filter(([_, value]) => value !== undefined && value !== null)
      );
      const response = await axiosInstance.post('/create-list', payload);
      return response.data;
    } catch (error) {
      if (error.response?.data?.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('An unexpected error occurred.');
    }
  }
);

const createListSlice = createSlice({
  name: 'createList',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
      updateLocalStorage('formData', state.formData);
    },
    setId: (state, action) => {
      state.id = action.payload;
      updateLocalStorage('id', state.id);
    },
    clearFormData: (state) => {
      state.formData = {};
      updateLocalStorage('formData', state.formData);
    },
    removeImageFromList: (state, action) => {
      const { index } = action.payload;
      // Remove image from the images array
      state.formData.images = state.formData.images.filter((_, imgIndex) => imgIndex !== index);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        updateLocalStorage('isLoading', state.isLoading);
      })
      .addCase(submitList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.lists = action.payload;
        updateLocalStorage('lists', state.lists);
        updateLocalStorage('isLoading', state.isLoading);
      })
      .addCase(submitList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
        updateLocalStorage('isLoading', state.isLoading);
        updateLocalStorage('error', state.error);
      });
  }
});

// Export actions and reducer
export const { updateFormData, setId, clearFormData ,removeImageFromList} = createListSlice.actions;
export default createListSlice.reducer;

