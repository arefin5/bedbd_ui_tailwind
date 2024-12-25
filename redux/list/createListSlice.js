
// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import axiosInstance from '../services/axiosInstance';

// // // Initial state (Retrieve data from localStorage only on the client-side)
// // const initialState = {
// //   id: 12,
// //   formData: {},
// //   isLoading: false,
// //   lists: [],
// //   error: null,
// // };

// // // Only try to access localStorage on the client-side
// // if (typeof window !== 'undefined') {
// //   const storedId = localStorage.getItem('formId');
// //   const storedFormData = localStorage.getItem('formData');
  
// //   if (storedId) {
// //     initialState.id = JSON.parse(storedId);
// //   }

// //   if (storedFormData) {
// //     initialState.formData = JSON.parse(storedFormData);
// //   }
// // }

// // // Async action to submit form data (create/update logic)
// // export const optionalSubmit = (data, id) => async (dispatch) => {
// //   try {
// //     if (!id) {
// //       // Send request to create a new record and receive an ID
// //       const response = await axiosInstance.post('/create', data);
// //       const newId = response.data.id;
// //       dispatch(updateFormData({ id: newId, formData: data }));
// //     } else {
// //       // Send request to update the existing record
// //       await axiosInstance.put(`/update/${id}`, data);
// //       dispatch(updateFormData({ id, formData: data }));
// //     }
// //   } catch (error) {
// //     console.error('Error submitting form data:', error);
// //   }
// // };
// // export const submitList = createAsyncThunk(
// //   "form/submitList", 
// //   async (listData, { rejectWithValue }) => {
// //     console.log("submite ",listData)
// //     try {
// //       const payload = Object.fromEntries(
// //         Object.entries(listData).filter(([_, value]) => value !== undefined && value !== null)
// //       );
// //       // Make the API call with the dynamic payload
// //       const response = await axiosInstance.post('/create-list', payload);
// //       return response.data;

// //     } catch (error) {
// //       console.log(error.response?.data?.message);

// //       if (error.response && error.response.data && error.response.data.error) {
// //         return rejectWithValue(error.response.data.message || error.response.data.error); // Return actual error message
// //       }

// //       if (error.response?.data?.message) {
// //         // Specific error handling like "email already exists"
// //         return rejectWithValue(error.response.data.message);
// //       }

// //       // Fallback for other unexpected errors
// //       return rejectWithValue('An unexpected error occurred.');
// //     }
// //   }
// // );

// // const createListSlice = createSlice({
// //   name: 'createList',
// //   initialState,
// //   reducers: {
// //     updateFormData: (state, action) => {
// //       state.formData = {
// //         ...state.formData,
// //         ...action.payload,
// //       };
// //       // state.formData = action.payload;
// //       if (typeof window !== 'undefined') {
// //         const currentFormData = localStorage.getItem('formData');
// //         const parsedCurrentFormData = currentFormData ? JSON.parse(currentFormData) : {};
// //         if (JSON.stringify(parsedCurrentFormData) !== JSON.stringify(action.payload)) {
// //           localStorage.setItem('formData', JSON.stringify(action.payload));
// //         }
// //       }
// //     },
// //     setId: (state, action) => {
// //       state.id = action.payload;
// //       if (typeof window !== 'undefined') {
// //         const currentId = localStorage.getItem('formId');
// //         const parsedCurrentId = currentId ? JSON.parse(currentId) : null;
// //         if (parsedCurrentId !== action.payload) {
// //           localStorage.setItem('formId', JSON.stringify(action.payload));
// //         }
// //       }
// //     },
// //     clearFormData: (state) => {
// //       state.formData = {};
// //       if (typeof window !== 'undefined') {
// //         localStorage.removeItem('formData');
// //       }
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(submitList.pending, (state) => {
// //         state.isLoading = true;
// //         state.error = null;
// //       })
// //       .addCase(submitList.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         state.lists = action.payload;
// //       })
// //       .addCase(submitList.rejected, (state, action) => {
// //         state.isLoading = false;
// //         state.error = action.error.message;
// //       });
// //   }
// // });

// // // export const { setId, updateFormData, clearFormData } = formSlice.actions;

// // export const { updateFormData, setId, clearFormData } = createListSlice.actions;
// // export default createListSlice.reducer;
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axiosInstance from '../services/axiosInstance';

// // Load initial state from localStorage (only on the client-side)
// const loadFromLocalStorage = () => {
//   if (typeof window === 'undefined') return null;
//   const storedState = localStorage.getItem('formState');
//   return storedState ? JSON.parse(storedState) : null;
// };

// const saveToLocalStorage = (state) => {
//   if (typeof window !== 'undefined') {
//     localStorage.setItem('formState', JSON.stringify(state));
//   }
// };

// const initialState = loadFromLocalStorage() || {
//   id: 12,
//   formData: {},
//   isLoading: false,
//   lists: [],
//   error: null,
// };

// // Async action to submit form data (create/update logic)
// export const optionalSubmit = (data, id) => async (dispatch) => {
//   try {
//     if (!id) {
//       // Send request to create a new record and receive an ID
//       const response = await axiosInstance.post('/create', data);
//       const newId = response.data.id;
//       dispatch(updateFormData({ id: newId, formData: data }));
//     } else {
//       // Send request to update the existing record
//       await axiosInstance.put(`/update/${id}`, data);
//       dispatch(updateFormData({ id, formData: data }));
//     }
//   } catch (error) {
//     console.error('Error submitting form data:', error);
//   }
// };

// export const submitList = createAsyncThunk(
//   'form/submitList',
//   async (listData, { rejectWithValue }) => {
//     try {
//       const payload = Object.fromEntries(
//         Object.entries(listData).filter(([_, value]) => value !== undefined && value !== null)
//       );
//       const response = await axiosInstance.post('/create-list', payload);
//       return response.data;
//     } catch (error) {
//       if (error.response?.data?.message) {
//         return rejectWithValue(error.response.data.message);
//       }
//       return rejectWithValue('An unexpected error occurred.');
//     }
//   }
// );

// const createListSlice = createSlice({
//   name: 'createList',
//   initialState,
//   reducers: {
//     updateFormData: (state, action) => {
//       state.formData = {
//         ...state.formData,
//         ...action.payload,
//       };
//       saveToLocalStorage(state);
//     },
//     setId: (state, action) => {
//       state.id = action.payload;
//       saveToLocalStorage(state);
//     },
//     clearFormData: (state) => {
//       state.formData = {};
//       state.id = null;
//       saveToLocalStorage(state);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(submitList.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         saveToLocalStorage(state);
//       })
//       .addCase(submitList.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.lists = action.payload;
//         saveToLocalStorage(state);
//       })
//       .addCase(submitList.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload || action.error.message;
//         saveToLocalStorage(state);
//       });
//   },
// });

// // Export actions and reducer
// export const { updateFormData, setId, clearFormData } = createListSlice.actions;
// export default createListSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../services/axiosInstance';

// Utility to load state from localStorage
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
export const { updateFormData, setId, clearFormData } = createListSlice.actions;
export default createListSlice.reducer;

