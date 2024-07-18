import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null
    },
  },
});

export const { setToken, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state) => state.user.user;
export const selectToken = state => state.user.token
