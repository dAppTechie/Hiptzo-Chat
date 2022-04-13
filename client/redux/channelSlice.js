import { createSlice } from '@reduxjs/toolkit';

export const channelSlice = createSlice({
  name: 'channel',
  initialState: {
    channelId: null,
  },

  reducers: {
    enterChannel: (state, action) => {
      state.channelId = action.payload.roomId;
    },
  },
});

export const { enterChannel } = channelSlice.actions;

export default channelSlice.reducer;
