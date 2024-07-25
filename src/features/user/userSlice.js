import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postUser } from './userApi';

export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async (token, { rejectWithValue }) => {
    try {
      const response = await postUser(token);
      return response.body;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setToken, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;
