import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Remove from './modals/Remove.jsx';
import Rename from './modals/Rename.jsx';

const ChannelDetails = ({ currentChannel }) => {
  const [showingForm, setShowingForm] = useState(null);
  const showRemovingForm = () => setShowingForm('removing');
  const showRenamingForm = () => setShowingForm('renaming');
  const hideForm = () => setShowingForm(null);

  const getEditButtons = () => {
    if (!currentChannel.removable) {
      return null;
    }
    return (
      <div className="flex-shrink-0">
        <Button variant="outline-secondary" size="sm" onClick={showRenamingForm}>Rename</Button>
        <Button variant="outline-danger" size="sm" className="ml-1" onClick={showRemovingForm}>Delete</Button>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-between p-2">
      <h5 className="text-truncate text-info mb-1 pb-1">{currentChannel.name}</h5>
      {getEditButtons()}
      {showingForm === 'removing' && <Remove channel={currentChannel} onHide={hideForm} />}
      {showingForm === 'renaming' && <Rename channel={currentChannel} onHide={hideForm} />}
    </div>
  );
};

export default ChannelDetails;
