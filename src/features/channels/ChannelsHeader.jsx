import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Add from './modals/Add.jsx';

const ChannelsHeader = () => {
  const [isShowingAddForm, toggleShowingAddForm] = useState(false);

  const showAddForm = () => toggleShowingAddForm(true);
  const hideAddForm = () => toggleShowingAddForm(false);

  return (
    <div className="d-flex justify-content-between p-1 mb-2">
      <h4>Channels</h4>
      <Button variant="outline-secondary" onClick={showAddForm}><strong>+</strong></Button>
      {isShowingAddForm && <Add onHide={hideAddForm} />}
    </div>
  );
};

export default ChannelsHeader;
