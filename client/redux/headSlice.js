import { createSlice } from '@reduxjs/toolkit';

export const headSlice = createSlice({
  name: 'header',
  initialState: {
    value: 'navbar',
  },

  reducers: {
    setDefaultHeader: (state) => {
      state.value = 'navbar';
    },
    setChangeUserName: (state) => {
      state.value = 'userName';
    },
    setSearchBar: (state) => {
      state.value = 'searchBar';
    },
    currentHeader: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {
  setDefaultHeader,
  setChangeUserName,
  setSearchBar,
  currentHeader,
} = headSlice.actions;

export default headSlice.reducer;
