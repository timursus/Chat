import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { sendMessage } from './messagesSlice.js';
import UsernameContext from '../../app/context.js';

const generateOnSubmit = (username, currentChannelId, dispatch) => (
  async ({ message }, { resetForm, setStatus }) => {
    try {
      await dispatch(sendMessage({ body: message, username }, currentChannelId));
      resetForm();
    } catch (error) {
      setStatus(error.message);
      throw error;
    }
  });

const MessageForm = ({ currentChannelId }) => {
  const inputEl = useRef(null);
  useEffect(() => inputEl.current.focus());

  const dispatch = useDispatch();
  const username = useContext(UsernameContext);

  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={generateOnSubmit(username, currentChannelId, dispatch)}
    >
      {(props) => (
        <Form className="m-2 m-md-3 mx-xl-4" autoComplete="off">
          {props.status && <Alert variant="danger">{props.status}</Alert>}
          <InputGroup>
            <FormControl
              name="message"
              type="text"
              size="lg"
              placeholder="Message"
              required
              onChange={props.handleChange}
              value={props.values.message}
              disabled={props.isSubmitting}
              ref={inputEl}
            />
            <InputGroup.Append>
              <Button type="submit" variant="primary" size="lg" disabled={props.isSubmitting}>Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      )}
    </Formik>
  );
};

export default MessageForm;
