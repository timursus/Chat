import React from 'react';
import { useSelector } from 'react-redux';

const timeFormatter = new Intl.DateTimeFormat([], { timeStyle: 'short' });

const renderMessage = ({
  id,
  body,
  username,
  date,
}) => {
  const sendTime = timeFormatter.format(date);
  return (
    <div key={id} className="card mb-2">
      <div className="card-body py-2">
        <h6 className="card-title mb-1">
          {`${username}`}
          <span className="badge badge-light text-muted font-weight-normal ml-2">{sendTime}</span>
        </h6>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

const MessagesBox = ({ currentChannelId }) => {
  const currentChannelMessages = useSelector(
    (state) => state.messagesInfo.messages.filter((m) => m.channelId === currentChannelId),
  );
  return (
    <div className="h-100 overflow-auto py-2">
      <div className="container d-flex flex-column align-items-start">
        {currentChannelMessages.map(renderMessage)}
      </div>
    </div>
  );
};

export default MessagesBox;
