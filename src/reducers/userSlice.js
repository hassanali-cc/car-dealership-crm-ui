import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo(state, action) {
      state.userInfo = action.payload
    },
    clearInfo(state, action) {}
  },
});

export const { userInfo, clearInfo } = userSlice.actions;

export default userSlice.reducer;
