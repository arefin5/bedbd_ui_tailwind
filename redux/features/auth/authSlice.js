
import axiosInstance from '@/redux/services/axiosInstance';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Load token and user from localStorage if available

// Initialize user and token from localStorage
let initialToken = null;
let initialUser = null;
let phone=null;
if (typeof window !== 'undefined') { // Check if we are on the client-side
    initialToken = localStorage.getItem('token');
    initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    
}
let token = null;
let user = null;

if (typeof window !== 'undefined') {
    token = localStorage.getItem('token') || null; // Get token from localStorage
    user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null; // Get user from localStorage and parse JSON
}


// const token = localStorage.getItem('token') || null;
//     const user = localStorage.getItem('user') || null;
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
export const loginUserPhone = createAsyncThunk(
  'auth/loginUserphone',
  async ({ phone }, { rejectWithValue }) => {
    try {
      console.log("start api callling .....",phone)
      const response = await axiosInstance.post('/generate-otp-phone', { phone });
      // Return the token and user data
      // console.log("finised")
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
        // console.log(response.data)

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
export const verifyOtp = createAsyncThunk(
  'auth/verify-otp-phone',
  async ({ phone,otp }, { rejectWithValue }) => {
    try {
      console.log("start api callling .....",phone)
      const response = await axiosInstance.post('/verify-otp-phone', { phone,otp });
      // Return the token and user data
      // console.log("finised")
      // console.log(response.data);
      
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

  export const loadUserFromStorage = () => (dispatch) => {
  if (typeof window !== 'undefined') { // Ensure this only runs on the client
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      dispatch(loginUser.fulfilled({ token, user: JSON.parse(user) })); // Populate Redux state with token and user
    }
  }
};
export const userEdit = createAsyncThunk(
  'auth/user-edit',
  async ({ phone,email,fname,lname,parmanentAddress}, { rejectWithValue }) => {
    try {
      console.log("start api callling .....",phone)
      const response = await axiosInstance.put('/edit-profile', { phone,email,fname,lname,parmanentAddress });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        return rejectWithValue(error.response.data.error); // Return the actual error message
      }
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
    userPhone:null,

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
      }).addCase(loginUserPhone.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserPhone.rejected,(state,action)=>{
        state.loading=false;
        state.error=action.payloadl;
      })
      .addCase(loginUserPhone.fulfilled, (state, action) => {
  state.loading = false;
  // Store email in localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem("useemail");
  localStorage.removeItem("userPhone")
  // Store email if available in action.payload
  if (action.payload.phone) {
    localStorage.setItem('userPhone', JSON.stringify(action.payload.phone));
    state.userPhone = action.payload.phone; // Store in state as well
  }
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
      .addCase(verifyOtp.pending, (state) => {
    state.loading = true;
    state.error = null;
    localStorage.removeItem('token');
})
.addCase(verifyOtp.fulfilled, (state, action) => {
    state.loading = false;
    state.token = action.payload.token;
    state.user = action.payload.user;
    // Store token and user data in localStorage
    localStorage.setItem('token', action.payload.token);
    localStorage.setItem('user', JSON.stringify(action.payload.user));
    localStorage.removeItem('phone'); // Corrected key
})
.addCase(verifyOtp.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
    console.error("OTP verification failed:", action.payload); // Log the actual error
})



      .addCase(userEdit.pending, (state) => {
    state.loading = true;
    state.error = null;
})
.addCase(userEdit.fulfilled, (state, action) => {
    state.loading = false;
    state.user = action.payload.user;
    // Store token and user data in localStorage
    localStorage.setItem('user', JSON.stringify(action.payload.user));
    localStorage.removeItem('phone'); // Corrected key
})
.addCase(userEdit.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
})

  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
