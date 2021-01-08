import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer.js';
import initSocket from './socket.js';
import App from '../components/App.jsx';

export default (channels, currentChannelId, messages) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
      channelsInfo: { channels, currentChannelId },
      messagesInfo: { messages },
    },
  });

  initSocket(store.dispatch);

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('chat'),
  );
};
