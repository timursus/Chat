/* eslint no-param-reassign: ["error", { "props": false }] */

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../../routes.js';

const channelsSlice = createSlice({
  name: 'channels',
  initialState: { channels: [], currentChannelId: 1 },
  reducers: {
    addChannel(state, action) {
      const { channel } = action.payload;
      state.channels.push(channel);
    },
    removeChannel(state, action) {
      const { removingChannelId } = action.payload;
      state.channels = state.channels.filter((c) => c.id !== removingChannelId);
      if (state.currentChannelId === removingChannelId) {
        state.currentChannelId = 1;
      }
    },
    renameChannel(state, action) {
      const { channelId, editedChannel } = action.payload;
      const channel = state.channels.find((c) => c.id === channelId);
      channel.name = editedChannel.name;
    },
    setCurrentChannel(state, action) {
      const { id } = action.payload;
      state.currentChannelId = id;
    },
  },
});

export const {
  addChannel, removeChannel, renameChannel, setCurrentChannel,
} = channelsSlice.actions;

export default channelsSlice.reducer;

export const createNewChannel = (name) => async () => {
  const response = await axios({
    method: 'post',
    url: routes.channelsPath(),
    data: { data: { attributes: { name } } },
    timeout: 5000,
  });
  return response;
};

export const deleteChannel = (id) => async () => {
  const response = await axios({
    method: 'delete',
    url: routes.channelPath(id),
    timeout: 5000,
  });
  return response;
};

export const setChannelName = (id, name) => async () => {
  const response = await axios({
    method: 'patch',
    url: routes.channelPath(id),
    data: { data: { attributes: { name } } },
    timeout: 5000,
  });
  return response;
};
