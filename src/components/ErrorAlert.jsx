import React from 'react';
import Alert from 'react-bootstrap/Alert';

const ErrorAlert = ({ children }) => <Alert variant="danger">{children}</Alert>;

export default ErrorAlert;
