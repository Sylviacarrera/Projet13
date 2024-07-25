import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isEditing: false
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
      state.isEditing = false
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload
    }
  },
});

export const { setToken, setUser, clearUser, setIsEditing } = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;
export const selectIsEditing = (state) => state.user.isEditing;
