import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import routes from '../../routes.js';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: { messages: [] },
  reducers: {
    addMessage(state, action) {
      const { message } = action.payload;
      state.messages.push(message);
    },
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;

export const sendMessage = (attributes, channelId) => async () => {
  const url = routes.channelMessagesPath(channelId);
  const response = await axios({
    method: 'post',
    url,
    data: { data: { attributes } },
    params: { channelId },
    timeout: 5000,
  });
  return response;
};
