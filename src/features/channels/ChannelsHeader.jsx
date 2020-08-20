import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Add from './modals/Add.jsx';

const ChannelsHeader = () => {
  const [addFormShow, setAddFormShow] = useState(false);

  const openAddForm = () => setAddFormShow(true);
  const closeAddForm = () => setAddFormShow(false);

  return (
    <div className="d-flex justify-content-between p-1 mb-2">
      <h4>Channels</h4>
      <Button variant="outline-secondary" onClick={openAddForm}><strong>+</strong></Button>
      {addFormShow && <Add onHide={closeAddForm} />}
    </div>
  );
};

export default ChannelsHeader;
