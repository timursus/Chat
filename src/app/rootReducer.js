import { combineReducers } from '@reduxjs/toolkit';
import channelsReducer from '../features/channels/channelsSlice.js';
import messagesReducer from '../features/messages/messagesSlice.js';

export default combineReducers({
  channelsInfo: channelsReducer,
  messagesInfo: messagesReducer,
});
