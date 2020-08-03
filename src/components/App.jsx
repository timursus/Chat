import React from 'react';
import ChannelsList from './ChannelsList.jsx';

const App = (props) => {
  const { channels, currentChannelId } = props;
  return (
    <main className="row h-100">
      <div className="col-3 h-100">
        <ChannelsList channels={channels} currentChannelId={currentChannelId} />
      </div>
    </main>
  );
};

export default App;
