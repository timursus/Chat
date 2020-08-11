import React from 'react';
import { useSelector } from 'react-redux';
import ChannelsList from '../features/channels/ChannelsList.jsx';
import MessagesBox from '../features/messages/MessagesBox.jsx';
import MessageForm from '../features/messages/MessageForm.jsx';

const App = () => {
  const { currentChannelId } = useSelector(
    (state) => state.channelsInfo,
  );
  return (
    <main className="row h-100">
      <section className="col-3 h-100">
        <ChannelsList currentChannelId={currentChannelId} />
      </section>
      <section className="col">
        <MessagesBox currentChannelId={currentChannelId} />
        <MessageForm currentChannelId={currentChannelId} />
      </section>
    </main>
  );
};

export default App;
