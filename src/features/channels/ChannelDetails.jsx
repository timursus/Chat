import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Remove from './modals/Remove.jsx';
import Rename from './modals/Rename.jsx';

const ChannelDetails = ({ currentChannel }) => {
  const [formShow, setFormShow] = useState(null);
  const openRemoveForm = () => setFormShow('remove');
  const openRenameForm = () => setFormShow('rename');
  const closeForm = () => setFormShow(null);

  const getEditButtons = () => {
    if (!currentChannel.removable) {
      return null;
    }
    return (
      <div className="flex-shrink-0">
        <Button variant="outline-secondary" size="sm" onClick={openRenameForm}>Rename</Button>
        <Button variant="outline-danger" size="sm" className="ml-1" onClick={openRemoveForm}>Delete</Button>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-between p-2">
      <h5 className="text-truncate text-info mb-1 pb-1">{currentChannel.name}</h5>
      {getEditButtons()}
      {formShow === 'remove' && <Remove channel={currentChannel} onHide={closeForm} />}
      {formShow === 'rename' && <Rename channel={currentChannel} onHide={closeForm} />}
    </div>
  );
};

export default ChannelDetails;
