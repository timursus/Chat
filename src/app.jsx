import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';

export default (channels, currentChannelId) => {
  render(
    <App channels={channels} currentChannelId={currentChannelId} />,
    document.getElementById('chat'),
  );
};
