// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   id: null,  // Store ID from the backend
//   formData: {},  // Dynamic form data
// };

// const formSlice = createSlice({
//   name: 'form',
//   initialState,
//   reducers: {
//     setId(state, action) {
//       state.id = action.payload;
//     },
//     updateFormData(state, action) {
//       state.formData = {
//         ...state.formData,
//         ...action.payload,  // Merge new dynamic form properties
//       };
//     },
//     clearFormData(state) {
//       state.id = null;
//       state.formData = {};
//     },
//   },
// });

// export const { setId, updateFormData, clearFormData } = formSlice.actions;

// export const optionalSubmit = (data, id) => async (dispatch) => {
//   if (!id) {
//     // Send request to create a new record and receive an ID
//     try {
//       const response = await axios.post('/api/form-data', data);
//       dispatch(setId(response.data.id));
//     } catch (error) {
//       console.error('Error submitting data', error);
//     }
//   } else {
//     // Send an update request with the existing ID
//     try {
//       await axios.post(`/api/form-data/${id}`, data);
//     } catch (error) {
//       console.error('Error updating data', error);
//     }
//   }
// };

// export default formSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  id: null,  // Store ID from the backend
  formData: {},  // Dynamic form data
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    updateFormData(state, action) {
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
});

export const { setId, updateFormData, clearFormData } = formSlice.actions;

// Async action to submit form data
export const optionalSubmit = (data, id) => async (dispatch) => {
  try {
    if (!id) {
      // Send request to create a new record and receive an ID
      const response = await axios.post('/api/form-data', data);
      dispatch(setId(response.data.id)); // Store new ID in Redux state
    } else {
      // Send an update request with the existing ID
      await axios.put(`/api/form-data/${id}`, data);
    }
  } catch (error) {
    console.error('Error submitting data:', error);
  }
};

export default formSlice.reducer;
