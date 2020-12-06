import React from 'react';
import Button from 'react-bootstrap/Button';

const ChannelsHeader = ({ showModal }) => (
  <div className="container p-2">
    <div className="row align-items-baseline">
      <div className="col-12 col-md">
        <h4 className="text-white my-1 pl-sm-4">Channels</h4>
      </div>
      <div className="col-12 col-md-auto">
        <Button
          block
          variant="dark"
          className="px-xl-3"
          title="add channel"
          aria-label="add channel"
          onClick={() => showModal('adding')}
        >
          <strong className="h5">+</strong>
        </Button>
      </div>
    </div>
  </div>
);

export default ChannelsHeader;
