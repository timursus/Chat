import React from 'react';
import Button from 'react-bootstrap/Button';

const ChannelsHeader = ({ showModal }) => (
  <div className="d-flex justify-content-between p-1 mb-2">
    <h4>Channels</h4>
    <Button variant="outline-secondary" onClick={() => showModal('adding')}><strong>+</strong></Button>
  </div>
);

export default ChannelsHeader;
