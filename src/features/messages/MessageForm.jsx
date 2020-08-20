import React, { useContext, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  Formik,
  Form,
  ErrorMessage,
} from 'formik';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ErrorAlert from '../../components/ErrorAlert.jsx';
import { sendMessage } from './messagesSlice.js';
import UsernameContext from '../../app/context.js';

const MessageForm = ({ currentChannelId }) => {
  const inputEl = useRef(null);
  useEffect(() => inputEl.current.focus());

  const dispatch = useDispatch();
  const username = useContext(UsernameContext);

  const handleSubmit = async ({ message }, { resetForm, setFieldError }) => {
    try {
      await dispatch(sendMessage({ message, username }, currentChannelId));
      resetForm();
    } catch (error) {
      setFieldError('message', error.message);
      throw error;
    }
  };

  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form>
          <ErrorMessage component={ErrorAlert} name="message" />
          <InputGroup className="w-100">
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
