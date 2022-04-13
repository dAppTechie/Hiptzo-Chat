import { configureStore } from '@reduxjs/toolkit';
import profileSliceReducer from './profileSlice';
import headSliceReducer from './headSlice';
import channelSliceReducer from './channelSlice';

export default configureStore({
  reducer: {
    profile: profileSliceReducer,
    header: headSliceReducer,
    channel: channelSliceReducer,
  },
});
