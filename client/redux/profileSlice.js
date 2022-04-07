import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    value: 'room',
  },

  reducers: {
    setDefaultProfile: (state) => {
      state.value = 'room';
    },
    setUserProfile: (state) => {
      state.value = 'user';
    },
    setProfile: (state) => {
      state.value = 'profile';
    },
    currentProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDefaultProfile, setUserProfile, setProfile, currentProfile } =
  profileSlice.actions;

export default profileSlice.reducer;
