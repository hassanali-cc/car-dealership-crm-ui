import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo(state, action) {
      state.userId = action.payload.id
      state.name = action.payload.name
    },
    clearInfo(state, action) {}
  },
});

export const { userInfo, clearInfo } = userSlice.actions;

export default userSlice.reducer;
