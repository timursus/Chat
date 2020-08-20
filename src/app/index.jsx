import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer.js';
import App from './App.jsx';
import UsernameContext from './context.js';
import handleSocket from './socket.js';

export default (channels, currentChannelId, messages, username, socket) => {
  const preloadedState = {
    channelsInfo: { channels, currentChannelId },
    messagesInfo: { messages },
  };
  const store = configureStore({ reducer: rootReducer, preloadedState });

  render(
    <Provider store={store}>
      <UsernameContext.Provider value={username}>
        <App />
      </UsernameContext.Provider>
    </Provider>,
    document.getElementById('chat'),
  );

  handleSocket(socket, store.dispatch);
};
