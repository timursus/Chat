import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import Modal from 'react-bootstrap/Modal';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { createNewChannel, setChannelName } from '../../features/channels/channelsSlice.js';

const generateOnSubmit = (setName, onHide, id = null) => (
  async ({ channelName }, { setStatus }) => {
    try {
      await setName(channelName, id);
      onHide();
    } catch (error) {
      setStatus(error.message);
      throw error;
    }
  });

const modalDataMap = {
  adding: {
    title: 'Create New Channel',
    submitBtnValue: 'Create',
    action: createNewChannel,
  },
  renaming: {
    title: 'Rename Channel',
    submitBtnValue: 'Rename',
    action: setChannelName,
  },
};

const ChannelNameDialog = ({ modalInfo, onHide }) => {
  const { type, currentChannel } = modalInfo;
  const modalData = modalDataMap[type];

  const inputEl = useRef(null);
  useEffect(() => inputEl.current.select(), []);

  const dispatch = useDispatch();
  const setName = (name, id) => dispatch(modalData.action(name, id));

  return (
    <Modal show onHide={onHide}>
      <Modal.Header>
        <Modal.Title>{modalData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ channelName: currentChannel?.name ?? '' }}
          onSubmit={generateOnSubmit(setName, onHide, currentChannel?.id)}
        >
          {(props) => (
            <Form autoComplete="off">
              <FormGroup>
                <FormControl
                  name="channelName"
                  type="text"
                  placeholder="Channel name"
                  required
                  onChange={props.handleChange}
                  value={props.values.channelName}
                  disabled={props.isSubmitting}
                  ref={inputEl}
                />
              </FormGroup>

              {props.status && <Alert variant="danger">{props.status}</Alert>}

              <div className="d-flex justify-content-around">
                <Button
                  type="submit"
                  variant="success"
                  className="w-25"
                  disabled={props.isSubmitting}
                >
                  {modalData.submitBtnValue}
                </Button>
                <Button
                  type="button"
                  variant="outline-secondary"
                  className="w-25"
                  onClick={onHide}
                  disabled={props.isSubmitting}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default ChannelNameDialog;
