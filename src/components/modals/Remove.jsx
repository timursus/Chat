import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { deleteChannel } from '../../features/channels/channelsSlice.js';

const generateOnSubmit = (dispatch, onHide) => (
  async ({ id }, { setStatus }) => {
    try {
      await dispatch(deleteChannel(id));
      onHide();
    } catch (error) {
      setStatus(error.message);
      throw error;
    }
  });

const Remove = ({ modalInfo, onHide }) => {
  const { currentChannel } = modalInfo;
  const dispatch = useDispatch();

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
        <Formik
          initialValues={{ id: currentChannel.id }}
          onSubmit={generateOnSubmit(dispatch, onHide)}
        >
          {(props) => (
            <Form>
              {props.status && <Alert variant="danger">{props.status}</Alert>}
              <div className="d-flex justify-content-around">
                <Button
                  type="submit"
                  variant="danger"
                  className="w-25"
                  disabled={props.isSubmitting}
                >
                  Delete
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

export default Remove;
