import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cookies from 'js-cookie';
import faker from 'faker';
import rootReducer from './rootReducer.js';
import UsernameContext from './context.js';
import initSocket from './socket.js';
import App from '../components/App.jsx';

const getUserName = () => {
  if (!cookies.get('username')) {
    cookies.set('username', faker.fake('{{internet.userName}}'));
  }
  return cookies.get('username');
};

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
      <UsernameContext.Provider value={getUserName()}>
        <App />
      </UsernameContext.Provider>
    </Provider>,
    document.getElementById('chat'),
  );
};
