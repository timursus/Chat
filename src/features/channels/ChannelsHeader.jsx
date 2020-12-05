import React from 'react';
import Button from 'react-bootstrap/Button';

const ChannelsHeader = ({ showModal }) => (
  <div className="row no-gutters align-items-baseline p-2">
    <div className="col-12 col-md">
      <h4 className="text-white">Channels</h4>
    </div>
    <div className="col-12 col-md-auto">
      <Button
        block
        title="new channel"
        variant="dark"
        className="px-xl-3"
        onClick={() => showModal('adding')}
      >
        <strong className="h5">+</strong>
      </Button>
    </div>
  </div>
);

export default ChannelsHeader;
