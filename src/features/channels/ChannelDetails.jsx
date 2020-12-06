import React from 'react';
import Button from 'react-bootstrap/Button';

const ChannelDetails = ({ currentChannel, showModal }) => {
  const showRenamingForm = () => showModal('renaming', currentChannel);
  const showRemovingForm = () => showModal('removing', currentChannel);

  const renderEditButtons = () => {
    if (!currentChannel.removable) {
      return null;
    }
    return (
      <div className="btn-group">
        <Button variant="outline-dark" onClick={showRenamingForm}>Rename</Button>
        <Button variant="outline-danger" onClick={showRemovingForm}>Delete</Button>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-between align-items-baseline border-bottom border-primary p-2 px-md-4">
      <h5 className="text-primary text-truncate my-1 p-1">{currentChannel.name}</h5>
      {renderEditButtons()}
    </div>
  );
};

export default ChannelDetails;
