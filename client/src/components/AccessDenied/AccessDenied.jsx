import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { NavLink } from 'react-router-dom';

function AccessDenied() {
  return (
    <Alert variant="danger" className="access-denied">
      <Alert.Heading>Access denied!</Alert.Heading>
      <p>
        You have not rights to visit this page!
      </p>
      <hr />
      <p className="mb-0">
        <NavLink to="/">
          Return to main page
        </NavLink>
      </p>
    </Alert>
  );
}

export default AccessDenied;
