import { configureStore } from '@reduxjs/toolkit';
import dealReducer from './reducers/dealSlice.js';
import userReducer from './reducers/userSlice.js';

const store = configureStore({
  reducer: {
    deal: dealReducer,
    user: userReducer,
  },
});

export default store;
