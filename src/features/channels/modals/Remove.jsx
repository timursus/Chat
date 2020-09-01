import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Formik,
  Form,
  ErrorMessage,
} from 'formik';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ErrorAlert from '../../../components/ErrorAlert.jsx';
import { deleteChannel } from '../channelsSlice.js';

const Remove = ({ modalInfo, onHide }) => {
  const { currentChannel } = modalInfo;
  const dispatch = useDispatch();

  const handleSubmit = async (_values, { setFieldError }) => {
    try {
      await dispatch(deleteChannel(currentChannel.id));
      onHide();
    } catch (error) {
      setFieldError('submit', error.message);
      throw error;
    }
  };

  return (
    <Modal show onHide={onHide}>
      <Modal.Header>
        <Modal.Title className="text-truncate">
          Delete channel &quot;
          {currentChannel.name}
          &quot;?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik initialValues={{ id: currentChannel.id }} onSubmit={handleSubmit}>
          {(props) => (
            <Form>
              <ErrorMessage component={ErrorAlert} name="submit" />
              <div className="row justify-content-around">
                <Button
                  type="submit"
                  variant="danger"
                  className="col-4"
                  disabled={props.isSubmitting}
                >
                  Delete
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

export default Remove;
