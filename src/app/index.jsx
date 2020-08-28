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

export default (channels, currentChannelId, messages) => {
  const preloadedState = {
    channelsInfo: { channels, currentChannelId },
    messagesInfo: { messages },
  };
  const store = configureStore({ reducer: rootReducer, preloadedState });

  initSocket(store.dispatch);

  if (!cookies.get('username')) {
    cookies.set('username', faker.fake('{{internet.userName}}'));
  }

  render(
    <Provider store={store}>
      <UsernameContext.Provider value={cookies.get('username')}>
        <App />
      </UsernameContext.Provider>
    </Provider>,
    document.getElementById('chat'),
  );
};
