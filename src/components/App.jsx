import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ChannelsHeader from '../features/channels/ChannelsHeader.jsx';
import ChannelsMenu from '../features/channels/ChannelsMenu.jsx';
import ChannelDetails from '../features/channels/ChannelDetails.jsx';
import MessagesBox from '../features/messages/MessagesBox.jsx';
import MessageForm from '../features/messages/MessageForm.jsx';
import getModal from '../features/channels/modals';

const renderModal = (modalInfo, hideModal) => {
  if (!modalInfo.type) {
    return null;
  }
  const Modal = getModal(modalInfo.type);
  return <Modal modalInfo={modalInfo} onHide={hideModal} />;
};

const App = () => {
  const { channels, currentChannelId } = useSelector(
    (state) => state.channelsInfo,
  );
  const currentChannel = channels.find((c) => c.id === currentChannelId);

  const [modalInfo, setModalInfo] = useState({ type: null, currentChannel: null });
  const showModal = (type, channel = null) => setModalInfo({ type, currentChannel: channel });
  const hideModal = () => setModalInfo({ type: null, currentChannel: null });

  return (
    <main className="row no-gutters h-100">
      <section className="col-3 col-xl-2 d-flex flex-column h-100 bg-dark">
        <ChannelsHeader showModal={showModal} />
        <ChannelsMenu channels={channels} currentChannelId={currentChannelId} />
      </section>
      <section className="col d-flex flex-column h-100">
        <ChannelDetails currentChannel={currentChannel} showModal={showModal} />
        <MessagesBox currentChannelId={currentChannelId} />
        <MessageForm currentChannelId={currentChannelId} />
      </section>
      {renderModal(modalInfo, hideModal)}
    </main>
  );
};

export default App;
