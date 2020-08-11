import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
} from 'formik';
import { sendMessage } from './messagesSlice.js';
import UsernameContext from '../../app/context.js';

const MessageForm = ({ currentChannelId }) => {
  const dispatch = useDispatch();
  const username = useContext(UsernameContext);

  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={
        async ({ message }, { resetForm, setFieldError }) => {
          try {
            await dispatch(sendMessage({ message, username }, currentChannelId));
            resetForm();
          } catch (error) {
            setFieldError('message', error.message);
            throw error;
          }
        }
      }
    >
      {({ isSubmitting }) => (
        <Form className="form-inline">
          <Field
            name="message"
            type="text"
            className="form-control form-control-lg"
            placeholder="Message"
            required
            disabled={isSubmitting}
          />
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Send</button>
          <ErrorMessage component="div" name="message" />
        </Form>
      )}
    </Formik>
  );
};

export default MessageForm;
