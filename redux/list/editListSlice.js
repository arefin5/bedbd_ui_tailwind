
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../services/axiosInstance';

// Initial state
const initialState = {
  editlist: [],        
  formData: {},
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

// Async action for submitting a list
export const submitList = createAsyncThunk(
  "form/submitList", 
  async (listData, { rejectWithValue }) => {
    console.log("submit ", listData);
    try {
      const payload = Object.fromEntries(
        Object.entries(listData).filter(([_, value]) => value !== undefined && value !== null)
      );
      // Make the API call with the dynamic payload
      const response = await axiosInstance.put(`/update-list/${listData.id}`, payload);
      return response.data;

    } catch (error) {
      console.error(error.response?.data?.message);

      if (error.response?.data?.error) {
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
const formSliceEdit = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    editList(state, action) {
      state.editlist = action.payload; // Store the selected property data
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
  //   removeHomeRule(state, action) {
  //     const { key } = action.payload; // Assuming the payload contains the key of the rule to remove
  //        // Log the payload for debugging
  // // Remove the home rule by deleting the specified key from homesRoules
  // if (state.editlist.homesRoules && state.editlist.homesRoules[key]) {
  //   delete state.editlist.homesRoules[key];
  //   console.log("action.payload",state.editlist); 
  // }
  //   },
//     removeHomeRule(state, action) {
//   const { key } = action.payload; // Extract the key from the payload

//   // Ensure editlist is an array
//   if (Array.isArray(state.editlist)) {
//     state.editlist = state.editlist.filter(item => item.key !== key);
//     console.log("Updated editlist:", state.editlist); // Debugging log
//   } else {
//     console.error("editlist is not an array!");
//   }
// },
// removeHomeRule(state, action) {
//   const { key } = action.payload; // Extract the key from the payload

//   if (state.editlist && typeof state.editlist === 'object') {
//     // Assuming editlist.homesRules is an object
//     console.log(state.editlist.homerule)
//     console.log("editlist:", state.editlist);
//   console.log("homerule:", state.editlist.homerule);
//   console.log("homesRoules:", state.editlist.homerule?.homesRoules);
//     if (state.editlist.homerule.homesRoules && state.editlist.homerule.homesRoules[key]) {
//       delete state.editlist.homerule.homesRoules[key];
//       console.log("Updated homesRoules:", state.editlist.homesRoules); // Debugging log
//     } else {
//       console.error("Key does not exist in homesRoules!");
//     }
//   } else {
//     console.error("editlist is not an object or is undefined!");
//   }
// }
removeHomeRule(state, action) {
  const { key } = action.payload; // Extract the key from the payload

  if (state.editlist && state.editlist.homerule && typeof state.editlist.homerule === 'object') {
    const homesRoules = state.editlist.homerule.homesRoules;
        console.log(state.editlist)
    // Check if homesRoules exists and the key exists inside it
    if (homesRoules && homesRoules.hasOwnProperty(key)) {
      // Remove the home rule by deleting the specified key
      delete homesRoules[key];
      console.log("Updated homesRoules:", homesRoules); // Debugging log
    } else {
      console.error("Key does not exist in homesRoules!");
    }
  } else {
    console.error("editlist or homerule is not an object or is undefined!");
  }
}
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

// Export actions and reducer
export const { setId, updateFormData, clearFormData, editList, removeHomeRule } = formSliceEdit.actions;

export default formSliceEdit.reducer;
