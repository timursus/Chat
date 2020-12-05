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
      <div className="col-auto">
        <Button variant="outline-dark" onClick={showRenamingForm}>Rename</Button>
        <Button variant="outline-danger" className="ml-2" onClick={showRemovingForm}>Delete</Button>
      </div>
    );
  };

  return (
    <div className="row align-items-baseline border-bottom border-primary py-2">
      <div className="col">
        <h5 className="text-primary text-truncate m-0 pb-1">{currentChannel.name}</h5>
      </div>
      {renderEditButtons()}
    </div>
  );
};

export default ChannelDetails;
