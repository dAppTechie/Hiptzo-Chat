import { configureStore } from '@reduxjs/toolkit';
import profileSliceReducer from './profileSlice';

export default configureStore({
  reducer: {
    profile: profileSliceReducer,
  },
});
