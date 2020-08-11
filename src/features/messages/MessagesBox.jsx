import React from 'react';
import { useSelector } from 'react-redux';

const MessagesBox = ({ currentChannelId }) => {
  const { messages } = useSelector(
    (state) => state.messagesInfo,
  );
  return (
    <section className="border overflow-auto h-50">
      {messages
        .filter(({ channelId }) => channelId === currentChannelId)
        .map(({ message, id, username }) => <div key={id}>{`${username}: ${message}`}</div>)}
    </section>
  );
};

export default MessagesBox;
