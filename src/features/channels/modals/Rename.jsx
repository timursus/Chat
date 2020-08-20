import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Formik,
  Form,
  ErrorMessage,
} from 'formik';
import Modal from 'react-bootstrap/Modal';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ErrorAlert from '../../../components/ErrorAlert.jsx';
import { setChannelName } from '../channelsSlice.js';

const Rename = ({ channel, onHide }) => {
  const inputEl = useRef(null);
  useEffect(() => inputEl.current.select(), []);

  const dispatch = useDispatch();

  const handleSubmit = async ({ channelName }, { setFieldError }) => {
    try {
      await dispatch(setChannelName(channel.id, channelName));
      onHide();
    } catch (error) {
      setFieldError('channelName', error.message);
      throw error;
    }
  };

  return (
    <Modal show onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Rename Channel</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{ channelName: channel.name }}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form>
              <ErrorMessage component={ErrorAlert} name="channelName" />
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

              <div className="row justify-content-around">
                <Button
                  type="submit"
                  variant="success"
                  className="col-4"
                  disabled={props.isSubmitting}
                >
                  Rename
                </Button>
                <Button
                  type="button"
                  variant="outline-secondary"
                  className="col-4"
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

export default Rename;
