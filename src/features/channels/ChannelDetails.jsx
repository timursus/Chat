import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Remove from './modals/Remove.jsx';
import Rename from './modals/Rename.jsx';

const ChannelDetails = ({ currentChannel }) => {
  const [showForm, setShowForm] = useState(null);
  const openRemovingForm = () => setShowForm('removing');
  const openRenamingForm = () => setShowForm('renaming');
  const closeForm = () => setShowForm(null);

  const getEditButtons = () => {
    if (!currentChannel.removable) {
      return null;
    }
    return (
      <div className="flex-shrink-0">
        <Button variant="outline-secondary" size="sm" onClick={openRenamingForm}>Rename</Button>
        <Button variant="outline-danger" size="sm" className="ml-1" onClick={openRemovingForm}>Delete</Button>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-between p-2">
      <h5 className="text-truncate text-info mb-1 pb-1">{currentChannel.name}</h5>
      {getEditButtons()}
      {showForm === 'removing' && <Remove channel={currentChannel} onHide={closeForm} />}
      {showForm === 'renaming' && <Rename channel={currentChannel} onHide={closeForm} />}
    </div>
  );
};

export default ChannelDetails;
