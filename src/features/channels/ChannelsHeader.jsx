import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Add from './modals/Add.jsx';

const ChannelsHeader = () => {
  const [showAddingForm, setShowAddingForm] = useState(false);

  const openAddingForm = () => setShowAddingForm(true);
  const closeAddingForm = () => setShowAddingForm(false);

  return (
    <div className="d-flex justify-content-between p-1 mb-2">
      <h4>Channels</h4>
      <Button variant="outline-secondary" onClick={openAddingForm}><strong>+</strong></Button>
      {showAddingForm && <Add onHide={closeAddingForm} />}
    </div>
  );
};

export default ChannelsHeader;
