import React from 'react';
import { useSelector } from 'react-redux';

const MessagesBox = ({ currentChannelId }) => {
  const { messages } = useSelector(
    (state) => state.messagesInfo,
  );
  return (
    <div className="border border-primary rounded overflow-auto text-break h-100 mb-2 p-2">
      {messages
        .filter(({ channelId }) => channelId === currentChannelId)
        .map(({ message, id, username }) => (
          <div key={id}>
            <strong className="text-monospace">{`${username}: `}</strong>
            <span>{message}</span>
          </div>
        ))}
    </div>
  );
};

export default MessagesBox;