import React from 'react';
import Button from 'react-bootstrap/Button';

const ChannelDetails = ({ currentChannel, showModal }) => {
  const showRenamingForm = () => showModal('renaming', currentChannel);
  const showRemovingForm = () => showModal('removing', currentChannel);

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
    </div>
  );
};

export default ChannelDetails;
