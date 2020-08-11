import { createSlice } from '@reduxjs/toolkit';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: { channels: [], currentChannelId: 1 },
  reducers: {
    addChannel(state, action) {
      const { name } = action.payload;
      state.channels.push({ name });
    },
    setCurrentChannel(state, action) {
      const { id } = action.payload;
      state.currentChannelId = id; // eslint-disable-line
    },
  },
});

export const { addChannel, setCurrentChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
