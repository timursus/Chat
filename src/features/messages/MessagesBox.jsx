import React from 'react';
import { useSelector } from 'react-redux';

const renderMessage = ({ id, message, username }) => (
  <div key={id} className="card mb-2">
    <div className="card-body py-2">
      <div><strong>{`${username}: `}</strong></div>
      <p className="card-text">{message}</p>
    </div>
  </div>
);

const MessagesBox = ({ currentChannelId }) => {
  const currentChannelMessages = useSelector(
    (state) => state.messagesInfo.messages.filter((m) => m.channelId === currentChannelId),
  );
  return (
    <div className="container-xl h-100 overflow-auto px-0 py-1">
      {currentChannelMessages.map(renderMessage)}
    </div>
  );
};

export default MessagesBox;
