import { configureStore } from '@reduxjs/toolkit';
import profileSliceReducer from './profileSlice';
import headSliceReducer from './headSlice';

export default configureStore({
  reducer: {
    profile: profileSliceReducer,
    header: headSliceReducer,
  },
});
