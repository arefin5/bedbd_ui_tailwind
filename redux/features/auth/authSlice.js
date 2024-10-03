
import axiosInstance from '@/redux/services/axiosInstance';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Load token and user from localStorage if available
const token =  null;
const user = null;

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      
      const response = await axiosInstance.post('/login', { email, password });
      // Return the token and user data
      return response.data;
    } catch (error) {
      // console.log("error", error.response);

      if (error.response && error.response.data && error.response.data.error) {
        return rejectWithValue(error.response.data.error); // Return the actual error message
      }

      // Fallback for unexpected errors
      return rejectWithValue('An unexpected error occurred.');
    }
  }
);
export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.post('/singup-user', { email, password });
        // Return the token and user data/singup-user
        console.log(response.data)

        return response.data;

      } catch (error) {
           // console.log("error", error.response);

      if (error.response && error.response.data && error.response.data.error) {
        return rejectWithValue(error.response.data.error); // Return the actual error message
      }

      // Fallback for unexpected errors
      return rejectWithValue('An unexpected error occurred.');
        
      }
    }
  );
  export const forgetpass = createAsyncThunk(
    'auth/forgetPassword',
    async ({ email, }, { rejectWithValue }) => {
      try {
        const response = await axiosInstance.post('/forget-password', { email});
        // Return the token and user data/singup-user
        console.log(response.data)

        return response.data;

      } catch (error) {
        
           console.log("error 3", error.response.data.error);
      if (error.response && error.response.data && error.response.data.error) {
        return rejectWithValue(error.response.data.error); // Return the actual error message
      }

      // Fallback for unexpected errors
      return rejectWithValue('An unexpected error occurred.');
      }
    }
  );
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: user,
    token: token,
    loading: false,
    error: null,
    useemail:null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('email');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        // Store token and user data in localStorage
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        // Store token and user data in localStorage
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('user', JSON.stringify(action.payload.user));
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }).addCase(forgetpass.pending,(state)=>{
        state.loading=true;
        state.error=false;
        localStorage.removeItem('token');
      localStorage.removeItem('user');
      })
      .addCase(forgetpass.fulfilled, (state, action) => {
  state.loading = false;
  // Store email in localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem("useemail")
  // Store email if available in action.payload
  if (action.payload.email) {
    localStorage.setItem('useemail', JSON.stringify(action.payload.email));
    state.useemail = action.payload.email; // Store in state as well
  }
})
      .addCase(forgetpass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
