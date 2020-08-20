import React from 'react';
import { useSelector } from 'react-redux';
import ChannelsHeader from '../features/channels/ChannelsHeader.jsx';
import ChannelsMenu from '../features/channels/ChannelsMenu.jsx';
import ChannelDetails from '../features/channels/ChannelDetails.jsx';
import MessagesBox from '../features/messages/MessagesBox.jsx';
import MessageForm from '../features/messages/MessageForm.jsx';

const App = () => {
  const { channels, currentChannelId } = useSelector(
    (state) => state.channelsInfo,
  );
  const currentChannel = channels.find((c) => c.id === currentChannelId);

  return (
    <main className="row pb-5 h-100">
      <section className="col-3 h-100">
        <ChannelsHeader />
        <div className="h-100 overflow-auto">
          <ChannelsMenu currentChannelId={currentChannelId} />
        </div>
      </section>
      <section className="col d-flex flex-column h-100">
        <ChannelDetails currentChannel={currentChannel} />
        <MessagesBox currentChannelId={currentChannelId} />
        <MessageForm currentChannelId={currentChannelId} />
      </section>
    </main>
  );
};

export default App;
