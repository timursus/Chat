import React, { useEffect, useRef } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import faker from 'faker';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .required('Name is required')
    .min(2, 'This name is too short')
    .max(25, 'This name is too long'),
});

const UsernameForm = ({ saveUserName }) => {
  const inputEl = useRef(null);
  useEffect(() => inputEl.current.select(), []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome!</h1>
      <div className="row justify-content-center">
        <div className="col-xs-10 col-md-8 col-lg-6">
          <Formik
            initialValues={{
              username: faker.fake('{{internet.userName}}'),
              rememberUser: false,
            }}
            validationSchema={SignupSchema}
            validateOnChange={false}
            onSubmit={({ username, rememberUser }) => saveUserName(username.trim(), rememberUser)}
          >
            {(props) => (
              <Form noValidate onSubmit={props.handleSubmit}>
                <Form.Group>
                  <Form.Label>Please, introduce yourself:</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    size="lg"
                    onChange={props.handleChange}
                    value={props.values.username}
                    isInvalid={props.errors.username}
                    ref={inputEl}
                  />
                  <Form.Control.Feedback type="invalid">
                    {props.errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Check
                    type="checkbox"
                    name="rememberUser"
                    id="rememberUser"
                    label="Remember me"
                    onChange={props.handleChange}
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="success"
                  block
                >
                  Start chatting
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UsernameForm;
